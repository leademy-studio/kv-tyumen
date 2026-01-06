import os
from bs4 import BeautifulSoup

# --- Конфигурация ---
# Абсолютные пути к вашим файлам
html_file_path = '/Users/ravilsakirov/Documents/kv-vopros/index.html'
css_file_path = '/Users/ravilsakirov/Documents/kv-vopros/css/main.css'
# --- Конец конфигурации ---

def transfer_styles():
    """
    Извлекает CSS из тегов <style> в HTML-файле и добавляет его в конец CSS-файла.
    """
    try:
        # Чтение HTML-файла
        print(f"Чтение HTML из: {html_file_path}")
        with open(html_file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()

        # Поиск и извлечение стилей
        print("Поиск и извлечение стилей...")
        soup = BeautifulSoup(html_content, 'html.parser')
        style_tags = soup.find_all('style')
        
        if not style_tags:
            print("Теги <style> в HTML-файле не найдены.")
            return

        print(f"Найдено {len(style_tags)} блоков стилей для переноса.")

        all_styles_content = []
        for style_tag in style_tags:
            if style_tag.string:
                all_styles_content.append(style_tag.string.strip())
        
        # Добавление извлеченных стилей в конец CSS-файла
        print(f"Добавление стилей в: {css_file_path}")
        with open(css_file_path, 'a', encoding='utf-8') as f:
            f.write("\n\n/* === Стили, перенесенные из index.html === */\n\n")
            f.write("\n\n".join(all_styles_content))
            f.write("\n")

        print(f"Стили успешно добавлены в {css_file_path}.")

    except FileNotFoundError as e:
        print(f"Ошибка: Файл не найден - {e.filename}")
    except Exception as e:
        print(f"Произошла непредвиденная ошибка: {e}")

if __name__ == '__main__':
    print("Запуск скрипта для переноса стилей...")
    transfer_styles()
    print("Скрипт завершил работу.")
