import os
import re

mappings = {
    'assets': '01-assets',
    'components': '02-components',
    'data': '03-data',
    'layouts': '04-layouts',
    'lib': '05-lib',
    'pages': '06-pages',
    'styles': '07-styles'
}

# Regex to match @/, ./, or ../ followed by one of the old directory names
# and a slash.
pattern = re.compile(r'(@/|\./|(?:\.\./)+)(assets|components|data|layouts|lib|pages|styles)/')

def replace_match(match):
    prefix = match.group(1)
    old_dir = match.group(2)
    new_dir = mappings[old_dir]
    return f"{prefix}{new_dir}/"

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = pattern.sub(replace_match, content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    base_dir = r'C:\Users\Zolo_lenovo\magicroom-mt'
    targets = [os.path.join(base_dir, '2-src'), os.path.join(base_dir, '3-tests')]
    
    count = 0
    for target in targets:
        for root, dirs, files in os.walk(target):
            for file in files:
                if file.endswith(('.astro', '.ts', '.tsx', '.js', '.jsx', '.css')):
                    file_path = os.path.join(root, file)
                    if process_file(file_path):
                        print(f"Updated: {file_path}")
                        count += 1
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    main()
