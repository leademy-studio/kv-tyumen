import cssbeautifier
import os
import re

# --- Конфигурация ---
# Абсолютный путь к вашему CSS-файлу
css_file_path = '/Users/ravilsakirov/Documents/kv-vopros/css/main.css'
# --- Конец конфигурации ---

def format_css_file(file_path):
    """
    Форматирует CSS-файл, приводя его к единому стилю с отступами и переносами строк.
    Также удаляет некорректные для CSS комментарии вида <!-- ... -->.
    """
    if not os.path.exists(file_path):
        print(f"Ошибка: Файл не найден - {file_path}")
        return

    print(f"Чтение CSS из файла: {file_path}")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            original_css = f.read()

        # Удаление HTML-комментариев, так как они невалидны в CSS
        # и могут нарушить работу форматера.
        cleaned_css = re.sub(r'<!--(.*?)-->', '', original_css, flags=re.DOTALL)

        # Настройка параметров форматирования
        options = cssbeautifier.default_options()
        options.indent_size = 4  # Размер отступа - 4 пробела
        options.indent_char = ' ' # Символ для отступа - пробел
        options.selector_separator_newline = True # Перенос строки после селектора
        options.end_with_newline = True # Заканчивать файл новой строкой

        print("Форматирование CSS...")
        formatted_css = cssbeautifier.beautify(cleaned_css, options)

        # Запись отформатированного CSS обратно в файл
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(formatted_css)

        print(f"Файл {file_path} успешно отформатирован.")

    except Exception as e:
        print(f"Произошла непредвиденная ошибка: {e}")

if __name__ == '__main__':
    print("Запуск скрипта для форматирования CSS...")
    format_css_file(css_file_path)
    print("Скрипт завершил работу.")
