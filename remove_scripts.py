import os
from bs4 import BeautifulSoup

# --- Конфигурация ---
# Абсолютный путь к вашему HTML-файлу
# Замените на 'main.html', если это необходимо
html_file_path = '/Users/ravilsakirov/Documents/kv-vopros/index.html'
# --- Конец конфигурации ---

def remove_all_scripts(file_path):
    """
    Удаляет все теги <script> из указанного HTML-файла.
    """
    if not os.path.exists(file_path):
        print(f"Ошибка: Файл не найден - {file_path}")
        return

    print(f"Чтение HTML из файла: {file_path}")
    try:
        # Чтение HTML-файла
        with open(file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()

        # Поиск и удаление скриптов
        print("Поиск и удаление тегов <script>...")
        soup = BeautifulSoup(html_content, 'html.parser')
        script_tags = soup.find_all('script')

        if not script_tags:
            print("Теги <script> в HTML-файле не найдены. Файл не изменен.")
            return

        print(f"Найдено и будет удалено {len(script_tags)} блоков <script>.")

        # Удаление каждого найденного тега <script>
        for script_tag in script_tags:
            script_tag.decompose()

        # Запись измененного HTML обратно в файл
        # soup.prettify() используется для сохранения хорошего форматирования
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(str(soup.prettify()))

        print(f"Все теги <script> были успешно удалены из файла {file_path}.")

    except Exception as e:
        print(f"Произошла непредвиденная ошибка: {e}")

if __name__ == '__main__':
    print("Запуск скрипта для удаления всех скриптов...")
    remove_all_scripts(html_file_path)
    print("Скрипт завершил работу.")

