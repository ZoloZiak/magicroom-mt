---
description: Check for hardcoded brown colors that should be rose
---
Search the codebase for old brown color values that should have been replaced with rose tones.

Run: `grep -rn "rgba(45,36,33\|rgba(71,50,42\|rgba(59,44,38\|rgba(47,34,31\|#8B6F5C\|#D4B8A0\|#2D2421" src/`

Expected rose colors:
- primary: #B87A8E
- primary-900: #4A2E3A
- shadows: rgba(74,46,58,...) or rgba(53,31,42,...)

If any old brown values found, replace them with the rose equivalents.
