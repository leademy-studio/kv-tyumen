#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKUPS_DIR="${ROOT_DIR}/backups"
ENV_FILE="${ROOT_DIR}/.env"

if [[ ! -f "${ENV_FILE}" ]]; then
  echo "ERROR: .env not found at ${ENV_FILE}" >&2
  exit 1
fi

if [[ ! -d "${BACKUPS_DIR}" ]]; then
  echo "ERROR: backups dir not found at ${BACKUPS_DIR}" >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "ERROR: docker is not installed" >&2
  exit 1
fi

if ! command -v zcat >/dev/null 2>&1; then
  echo "ERROR: zcat is not installed" >&2
  exit 1
fi

cd "${ROOT_DIR}"

set -a
. "${ENV_FILE}"
set +a

if [[ -z "${DB_USERNAME:-}" || -z "${DB_PASSWORD:-}" || -z "${DB_DATABASE:-}" ]]; then
  echo "ERROR: DB_USERNAME/DB_PASSWORD/DB_DATABASE must be set in ${ENV_FILE}" >&2
  exit 1
fi

backup_arg="${1:-}"
if [[ -n "${backup_arg}" ]]; then
  if [[ -f "${backup_arg}" ]]; then
    backup_file="${backup_arg}"
  elif [[ -f "${BACKUPS_DIR}/${backup_arg}" ]]; then
    backup_file="${BACKUPS_DIR}/${backup_arg}"
  else
    echo "ERROR: backup file not found: ${backup_arg}" >&2
    exit 1
  fi
else
  latest_name="$(ls -1t "${BACKUPS_DIR}"/db_*.sql.gz 2>/dev/null | head -n1 || true)"
  if [[ -z "${latest_name}" ]]; then
    echo "ERROR: no db_*.sql.gz backups found in ${BACKUPS_DIR}" >&2
    exit 1
  fi
  backup_file="${latest_name}"
fi

timestamp="$(date +%Y%m%d_%H%M%S)"
backup_base="$(basename "${backup_file}")"
current_snapshot="${BACKUPS_DIR}/team_members_current_before_restore_${timestamp}.sql"
restore_sql="${BACKUPS_DIR}/team_members_restore_from_${backup_base%.sql.gz}_${timestamp}.sql"

echo "Using backup: ${backup_file}"
echo "Saving current snapshot: ${current_snapshot}"

docker compose exec -T -e MYSQL_PWD="${DB_PASSWORD}" db \
  mysqldump -u"${DB_USERNAME}" "${DB_DATABASE}" tailor_global_repeaters \
  --no-create-info --skip-triggers --where="host_field='team_members'" > "${current_snapshot}"

tmp_block="$(mktemp)"
tmp_team="$(mktemp)"
trap 'rm -f "${tmp_block}" "${tmp_team}"' EXIT

awk '
  /INSERT INTO `tailor_global_repeaters` VALUES/ { flag=1; next }
  flag {
    print
    if ($0 ~ /;$/) exit
  }
' < <(zcat "${backup_file}") > "${tmp_block}"

grep "'team_members'" "${tmp_block}" > "${tmp_team}" || true
if [[ ! -s "${tmp_team}" ]]; then
  echo "ERROR: team_members rows not found in ${backup_file}" >&2
  exit 1
fi

{
  echo "-- restore team_members from ${backup_base}"
  echo "START TRANSACTION;"
  echo "DELETE FROM \`tailor_global_repeaters\` WHERE \`host_field\`='team_members';"
  echo "INSERT INTO \`tailor_global_repeaters\` (\`id\`,\`host_id\`,\`host_field\`,\`site_id\`,\`content_group\`,\`content_value\`,\`content_spawn_path\`,\`parent_id\`,\`sort_order\`,\`created_at\`,\`updated_at\`) VALUES"
  awk '
    {
      line=$0
      sub(/;$/, ",", line)
      rows[NR]=line
    }
    END {
      for (i=1; i<=NR; i++) {
        if (i==NR) sub(/,$/, ";", rows[i])
        print rows[i]
      }
    }
  ' "${tmp_team}"
  echo "COMMIT;"
} > "${restore_sql}"

echo "Generated restore SQL: ${restore_sql}"
echo "Applying restore..."

docker compose exec -T -e MYSQL_PWD="${DB_PASSWORD}" db \
  mysql -u"${DB_USERNAME}" "${DB_DATABASE}" < "${restore_sql}"

echo "Verifying..."
docker compose exec -T -e MYSQL_PWD="${DB_PASSWORD}" db \
  mysql -N -B -u"${DB_USERNAME}" "${DB_DATABASE}" -e "
SELECT 'rows', COUNT(*)
FROM tailor_global_repeaters
WHERE host_field='team_members';

SELECT id, sort_order, JSON_UNQUOTE(JSON_EXTRACT(content_value, '$.name')) AS name
FROM tailor_global_repeaters
WHERE host_field='team_members'
  AND JSON_EXTRACT(content_value, '$.name') IS NOT NULL
ORDER BY sort_order;
"

echo "Done."
echo "Snapshot: ${current_snapshot}"
echo "Restore SQL: ${restore_sql}"
