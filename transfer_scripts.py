import os
from bs4 import BeautifulSoup

# --- Конфигурация ---
# Абсолютные пути к вашим файлам
html_file_path = '/Users/ravilsakirov/Documents/kv-vopros/index.html'
js_file_path = '/Users/ravilsakirov/Documents/kv-vopros/js/main.js'
# --- Конец конфигурации ---

def transfer_scripts():
    """
    Извлекает JavaScript из тегов <script> в HTML-файле и добавляет его в конец JS-файла.
    """
    try:
        # 1. Чтение HTML-файла
        print(f"Чтение HTML из: {html_file_path}")
        with open(html_file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()

        # 2. Поиск и извлечение встроенных скриптов
        print("Поиск и извлечение встроенных скриптов...")
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Ищем только теги <script> без атрибута 'src'
        script_tags = soup.find_all('script', src=False)
        
        if not script_tags:
            print("Встроенные теги <script> в HTML-файле не найдены.")
            return

        all_scripts_content = []
        for script_tag in script_tags:
            # .get_text() надежнее, т.к. он обрабатывает комментарии и другие вложенные элементы,
            # в отличие от .string, который в таких случаях возвращает None.
            script_content = script_tag.get_text()
            if script_content.strip():
                all_scripts_content.append(script_content)
        
        if not all_scripts_content:
            print("Не найдено скриптов с содержимым для переноса.")
            return

        print(f"Найдено {len(all_scripts_content)} блоков скриптов для переноса.")
        # 3. Убеждаемся, что директория для JS-файла существует
        js_dir = os.path.dirname(js_file_path)
        if js_dir and not os.path.exists(js_dir):
            print(f"Создание директории: {js_dir}")
            os.makedirs(js_dir)

        # 4. Добавление извлеченных скриптов в конец JS-файла
        print(f"Добавление скриптов в: {js_file_path}")
        with open(js_file_path, 'a', encoding='utf-8') as f:
            f.write("\n\n/* === Скрипты, перенесенные из index.html === */\n\n")
            # Разделяем скрипты точкой с запятой для предотвращения ошибок синтаксиса.
            # .strip() убирает лишние пробелы и переносы строк по краям каждого скрипта.
            f.write(";\n\n".join(script.strip() for script in all_scripts_content))
            f.write(";\n")

        print(f"Скрипты успешно добавлены в {js_file_path}.")

    except FileNotFoundError as e:
        print(f"Ошибка: Файл не найден - {e.filename}")
    except Exception as e:
        print(f"Произошла непредвиденная ошибка: {e}")

if __name__ == '__main__':
    print("Запуск скрипта для переноса скриптов...")
    transfer_scripts()
    print("Скрипт завершил работу.")
