#!/bin/sh
set -eu

TARGET_URL="${ALERT_TARGET_URL:-${APP_URL:-https://kv-tyumen.ru}}"
CHECK_INTERVAL="${ALERT_CHECK_INTERVAL:-30}"
REQUEST_TIMEOUT="${ALERT_REQUEST_TIMEOUT:-10}"
FAIL_THRESHOLD="${ALERT_FAIL_THRESHOLD:-3}"

STATE_FILE="${ALERT_STATE_FILE:-/tmp/kv_watchdog_state}"
FAIL_COUNT_FILE="${ALERT_FAIL_COUNT_FILE:-/tmp/kv_watchdog_fail_count}"

log() {
  printf '%s %s\n' "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$*"
}

is_positive_int() {
  case "$1" in
    ''|*[!0-9]*)
      return 1
      ;;
    *)
      [ "$1" -gt 0 ]
      ;;
  esac
}

if ! is_positive_int "$CHECK_INTERVAL"; then
  log "Invalid ALERT_CHECK_INTERVAL: $CHECK_INTERVAL"
  exit 1
fi

if ! is_positive_int "$REQUEST_TIMEOUT"; then
  log "Invalid ALERT_REQUEST_TIMEOUT: $REQUEST_TIMEOUT"
  exit 1
fi

if ! is_positive_int "$FAIL_THRESHOLD"; then
  log "Invalid ALERT_FAIL_THRESHOLD: $FAIL_THRESHOLD"
  exit 1
fi

read_state() {
  if [ -f "$STATE_FILE" ]; then
    cat "$STATE_FILE"
  else
    echo "unknown"
  fi
}

write_state() {
  printf '%s' "$1" > "$STATE_FILE"
}

read_fail_count() {
  if [ -f "$FAIL_COUNT_FILE" ]; then
    cat "$FAIL_COUNT_FILE"
  else
    echo "0"
  fi
}

write_fail_count() {
  printf '%s' "$1" > "$FAIL_COUNT_FILE"
}

json_escape() {
  printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

send_telegram() {
  message="$1"
  if [ -z "${TELEGRAM_BOT_TOKEN:-}" ] || [ -z "${TELEGRAM_CHAT_ID:-}" ]; then
    return 0
  fi

  curl -sS --fail --max-time "$REQUEST_TIMEOUT" \
    -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    --data-urlencode "chat_id=${TELEGRAM_CHAT_ID}" \
    --data-urlencode "text=${message}" \
    --data-urlencode "disable_web_page_preview=true" >/dev/null \
    || log "Telegram notification failed"
}

send_max_with_auth() {
  auth_header="$1"
  message="$2"
  recipient_query="$3"
  escaped_message="$(json_escape "$message")"

  curl -sS --fail --max-time "$REQUEST_TIMEOUT" \
    -X POST "https://platform-api.max.ru/messages?${recipient_query}" \
    -H "Authorization: ${auth_header}" \
    -H "Content-Type: application/json" \
    -d "{\"text\":\"${escaped_message}\"}" >/dev/null
}

send_max() {
  message="$1"
  if [ -z "${MAX_MESSENGER_TOKEN:-}" ]; then
    return 0
  fi

  if [ -n "${MAX_MESSENGER_CHAT_ID:-}" ]; then
    recipient_query="chat_id=${MAX_MESSENGER_CHAT_ID}"
  elif [ -n "${MAX_MESSENGER_USER_ID:-}" ]; then
    recipient_query="user_id=${MAX_MESSENGER_USER_ID}"
  else
    return 0
  fi

  if send_max_with_auth "${MAX_MESSENGER_TOKEN}" "$message" "$recipient_query"; then
    return 0
  fi

  case "${MAX_MESSENGER_TOKEN}" in
    *" "*)
      log "MAX notification failed"
      ;;
    *)
      if ! send_max_with_auth "Bearer ${MAX_MESSENGER_TOKEN}" "$message" "$recipient_query"; then
        log "MAX notification failed"
      fi
      ;;
  esac
}

send_alerts() {
  message="$1"
  send_telegram "$message"
  send_max "$message"
}

current_utc() {
  date -u '+%Y-%m-%d %H:%M:%S UTC'
}

check_target() {
  http_code="$(curl -sS --max-time "$REQUEST_TIMEOUT" -o /dev/null -w '%{http_code}' "$TARGET_URL" || echo 000)"
  case "$http_code" in
    2*|3*)
      return 0
      ;;
    *)
      return 1
      ;;
  esac
}

log "Watchdog started: target=${TARGET_URL}, interval=${CHECK_INTERVAL}s, threshold=${FAIL_THRESHOLD}"

while true; do
  state="$(read_state)"
  fail_count="$(read_fail_count)"

  if check_target; then
    write_fail_count "0"
    if [ "$state" = "down" ]; then
      recovery_message="SERVER UP: ${TARGET_URL} (${current_utc})"
      send_alerts "$recovery_message"
      log "Status changed: DOWN -> UP"
    fi
    write_state "up"
  else
    fail_count=$((fail_count + 1))
    write_fail_count "$fail_count"

    if [ "$fail_count" -ge "$FAIL_THRESHOLD" ] && [ "$state" != "down" ]; then
      down_message="SERVER DOWN: ${TARGET_URL} (${current_utc})"
      send_alerts "$down_message"
      write_state "down"
      log "Status changed: UP -> DOWN (failures=${fail_count})"
    fi
  fi

  sleep "$CHECK_INTERVAL"
done
