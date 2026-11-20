(function () {
 function formatPhone(value) {
  var digits = value.replace(/\D/g, "");
  if (!digits.length) return "";
  if (digits[0] !== "7") digits = "7" + digits.replace(/^8/, "");
  digits = digits.slice(0, 11);
  var p1 = digits.slice(1, 4);
  var p2 = digits.slice(4, 7);
  var p3 = digits.slice(7, 9);
  var p4 = digits.slice(9, 11);
  return "+7" + (p1 ? " (" + p1 : "") + (p1.length === 3 ? ")" : "") + (p2 ? " " + p2 : "") + (p3 ? "-" + p3 : "") + (p4 ? "-" + p4 : "");
 }

 document.addEventListener("input", function (event) {
  if (event.target.matches(".kv-popup-form__phone")) {
   event.target.value = formatPhone(event.target.value);
  }
 });

 window.kvPopupFormSuccess = function (form) {
  if (typeof window.kvReachSubmitFormGoal === "function") {
   window.kvReachSubmitFormGoal();
  }
  if (window.oc && window.oc.flashMsg) {
   window.oc.flashMsg({ text: "Заявка отправлена", class: "success" });
  }
  form.reset();
  var popup = form.closest(".t-popup");
  if (popup) {
   setTimeout(function () {
    if (popup.classList.contains("t-popup_show")) {
     popup.querySelector("a[href='#closepopup']")?.click();
    }
   }, 1000);
  }
 };

 window.kvPopupFormError = function (context, data) {
  var message = "";
  if (data && data.$env && typeof data.$env.getMessage === "function") {
   message = data.$env.getMessage();
  }
  if (!message && data && typeof data.message === "string") {
   message = data.message;
  }
  if (!message && context && context.el && typeof context.el.getAttribute === "function") {
   message = context.el.getAttribute("data-error-message") || "";
  }
  if (!message) {
   message = "Не удалось отправить заявку. Попробуйте позже.";
  }

  if (window.oc && window.oc.flashMsg) {
   window.oc.flashMsg({ text: message, class: "error" });
  } else if (typeof alert === "function") {
   alert(message);
  }

  return false;
 };
})();
