import re
import os
import glob

replacements = [
    (r"import \{ Button \} from '@/components/ui/button'", "import Button from '@/components/ui/Button.astro'"),
    (r"import \{ Badge \} from '@/components/ui/badge'", "import Badge from '@/components/ui/Badge.astro'"),
    (r"import \{ Card, CardContent, CardDescription, CardHeader, CardTitle \} from '@/components/ui/card'", 
     "import Card from '@/components/ui/Card.astro'\nimport CardContent from '@/components/ui/CardContent.astro'\nimport CardDescription from '@/components/ui/CardDescription.astro'\nimport CardHeader from '@/components/ui/CardHeader.astro'\nimport CardTitle from '@/components/ui/CardTitle.astro'"),
    (r"import \{ Card, CardContent, CardDescription, CardTitle \} from '@/components/ui/card'",
     "import Card from '@/components/ui/Card.astro'\nimport CardContent from '@/components/ui/CardContent.astro'\nimport CardTitle from '@/components/ui/CardTitle.astro'"),
    (r"import \{ Card, CardContent, CardHeader, CardTitle \} from '@/components/ui/card'",
     "import Card from '@/components/ui/Card.astro'\nimport CardContent from '@/components/ui/CardContent.astro'\nimport CardHeader from '@/components/ui/CardHeader.astro'\nimport CardTitle from '@/components/ui/CardTitle.astro'"),
    (r"import \{ Card, CardContent \} from '@/components/ui/card'",
     "import Card from '@/components/ui/Card.astro'\nimport CardContent from '@/components/ui/CardContent.astro'"),
    (r"import \{ Card \} from '@/components/ui/card'", "import Card from '@/components/ui/Card.astro'"),
]

for f in glob.glob('src/**/*.astro', recursive=True):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original = content
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)
    
    if content != original:
        print(f'Updated: {f}')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)

print('Done!')