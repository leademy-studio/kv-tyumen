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