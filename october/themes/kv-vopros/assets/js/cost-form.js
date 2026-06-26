window.kvCostFormSuccess = function () {
    if (typeof window.kvReachSubmitFormGoal === 'function') {
        window.kvReachSubmitFormGoal();
    }

    if (window.oc && window.oc.flashMsg) {
        window.oc.flashMsg({ text: 'Заявка отправлена', class: 'success' });
    }

    var formEl = document.querySelector('.cost-form__form');
    if (formEl && typeof formEl.reset === 'function') {
        formEl.reset();
    }
};

window.kvCostFormError = function (context, data) {
    var message = '';
    if (data && data.$env && typeof data.$env.getMessage === 'function') {
        message = data.$env.getMessage();
    }
    if (!message && data && typeof data.message === 'string') {
        message = data.message;
    }
    if (!message && context && context.el && typeof context.el.getAttribute === 'function') {
        message = context.el.getAttribute('data-error-message') || '';
    }
    if (!message) {
        message = 'Не удалось отправить заявку. Попробуйте позже.';
    }

    if (window.oc && window.oc.flashMsg) {
        window.oc.flashMsg({ text: message, class: 'error' });
    } else if (typeof alert === 'function') {
        alert(message);
    }

    return false;
};

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.querySelector('.cost-form__input[name="phone"]');

    if (!phoneInput) return;

    const applyMask = (event) => {
        const input = event.target;
        let value = input.value.replace(/\D/g, ''); // Оставляем только цифры

        // Обработка ввода 7, 8, 9 в начале
        if (value.length > 0) {
            if (value.startsWith('7') || value.startsWith('8')) {
                value = '7' + value.substring(1);
            }
            else {
                value = '7' + value;
            }
        }

        // Обрезаем до 11 цифр (7 + 10 цифр номера)
        value = value.substring(0, 11);

        let formattedValue = '';
        if (value.length > 0) {
            formattedValue = '+' + value.substring(0, 1); // +7
            if (value.length > 1) {
                formattedValue += ' ' + value.substring(1, 4);
            }
            if (value.length > 4) {
                formattedValue += ' ' + value.substring(4, 7);
            }
            if (value.length > 7) {
                formattedValue += ' ' + value.substring(7, 9);
            }
            if (value.length > 9) {
                formattedValue += ' ' + value.substring(9, 11);
            }
        }

        input.value = formattedValue;
    };

    phoneInput.addEventListener('input', applyMask);

    phoneInput.addEventListener('focus', (e) => {
        if (e.target.value === '') {
            e.target.value = '+7 ';
        }
    });

    phoneInput.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value.length <= 3) {
            e.preventDefault();
        }
    });
});
