import os
from bs4 import BeautifulSoup

# --- Конфигурация ---
# Абсолютный путь к вашему HTML-файлу
html_file_path = '/Users/ravilsakirov/Documents/kv-vopros/index.html'
# --- Конец конфигурации ---

def remove_inline_styles(file_path):
    """
    Удаляет все теги <style> из указанного HTML-файла.
    """
    if not os.path.exists(file_path):
        print(f"Ошибка: Файл не найден - {file_path}")
        return

    print(f"Чтение HTML из файла: {file_path}")
    try:
        # Чтение HTML-файла
        with open(file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()

        # Поиск и удаление стилей
        print("Поиск и удаление тегов <style>...")
        soup = BeautifulSoup(html_content, 'html.parser')
        style_tags = soup.find_all('style')

        if not style_tags:
            print("Теги <style> в HTML-файле не найдены. Файл не изменен.")
            return

        print(f"Найдено и будет удалено {len(style_tags)} блоков <style>.")

        # Удаление каждого найденного тега <style>
        for style_tag in style_tags:
            style_tag.decompose()

        # Запись измененного HTML обратно в файл
        # soup.prettify() используется для сохранения хорошего форматирования
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(str(soup.prettify()))

        print(f"Все теги <style> были успешно удалены из файла {file_path}.")

    except Exception as e:
        print(f"Произошла непредвиденная ошибка: {e}")

if __name__ == '__main__':
    print("Запуск скрипта для удаления встроенных стилей...")
    remove_inline_styles(html_file_path)
    print("Скрипт завершил работу.")
