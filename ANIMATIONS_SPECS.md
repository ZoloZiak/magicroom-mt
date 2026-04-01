# Špecifikácie animácií pre MagicRoom (Anime.js v4)

## Prehľad
Tento dokument obsahuje detailné špecifikácie pre implementáciu vysokokvalitných animácií pomocou Anime.js v4. Všetky animácie rešpektujú `prefers-reduced-motion` a sú optimalizované pre 60fps výkon.

## 1. Inštalácia a nastavenie
- **Knižnica**: Anime.js v4
- **Import**: `import { animate, timeline } from 'animejs'`
- **Fallback**: CSS animácie pre prehliadače bez JS podpory
- **Prístupnosť**: Automatické vypnutie pri `prefers-reduced-motion: reduce`

## 2. Základné animácie (nahradenie CSS)

### 2.1 Fade-in-up pre sekcie
- **Target**: Všetky elementy s triedou `animate-fade-in-up`
- **Trigger**: Intersection Observer (50% viditeľnosti)
- **Parametry**:
  - `translateY`: [20, 0]
  - `opacity`: [0, 1]
  - `duration`: 600ms
  - `easing`: 'easeOutCubic'
  - `delay`: stagger(100ms) pre skupiny elementov

### 2.2 Spring hover efekty
- **Target**: Elementy s triedou `spring-hover`
- **Trigger**: mouseenter/mouseleave
- **Parametry**:
  - Hover in: `translateY`: [0, -2], `boxShadow`: ['0 4px 20px rgba(0,0,0,0.1)', '0 8px 30px rgba(0,0,0,0.15)']
  - Hover out: späť na pôvodné hodnoty
  - `duration`: 350ms
  - `easing`: 'cubicBezier(0.34, 1.56, 0.64, 1)'

## 3. Pokročilé animácie

### 3.1 Hero sekcia timeline
- **Target**: `.hero-badge`, `.hero-title`, `.hero-description`, `.hero-buttons`
- **Trigger**: Stránka load (po 300ms delay)
- **Timeline postupnosť**:
  1. Badge: fade in + scale (duration: 400ms, delay: 0)
  2. Title: slide up + fade (duration: 600ms, delay: 200ms)
  3. Description: fade in (duration: 500ms, delay: 400ms)
  4. Buttons: stagger fade in + slide up (duration: 400ms, delay: 600ms, stagger: 100ms)

### 3.2 Karty služieb stagger animácia
- **Target**: `.service-card` v sekcii služieb
- **Trigger**: Scroll do viewportu
- **Parametry**:
  - `translateY`: [30, 0]
  - `opacity`: [0, 1]
  - `scale`: [0.95, 1]
  - `duration`: 500ms
  - `easing`: 'easeOutQuart'
  - `delay`: stagger(150ms, {start: 0})

### 3.3 Hover efekty na kartách
- **Target**: `.card` elementy
- **Trigger**: mouseenter
- **Parametry**:
  - `scale`: [1, 1.02]
  - `boxShadow`: ['0 4px 20px rgba(0,0,0,0.08)', '0 8px 40px rgba(0,0,0,0.12)']
  - `duration`: 300ms
  - `easing`: 'easeOutQuad'

### 3.4 Scroll progress animácie
- **Target**: Progress bar v headeri alebo sekciách
- **Trigger**: Scroll event (throttled)
- **Parametry**:
  - `width`: ['0%', scrollPercent + '%']
  - `duration`: 100ms
  - `easing`: 'linear'

### 3.5 Morphing animácie pre ikony
- **Target**: SVG ikony s triedou `morph-icon`
- **Trigger**: Hover alebo klik
- **Parametry**:
  - Použiť `morphTo()` pre SVG path
  - `duration`: 800ms
  - `easing`: 'easeInOutQuad'

## 4. Form animácie

### 4.1 Input focus animácie
- **Target**: Form inputs
- **Trigger**: focus/blur
- **Parametry**:
  - Label: `translateY`: [0, -20], `fontSize`: ['16px', '14px']
  - Border: `borderColor` zmena
  - `duration`: 200ms
  - `easing`: 'easeOutQuad'

### 4.2 Validation feedback
- **Target**: Form fields
- **Trigger**: Validation event
- **Parametry**:
  - Success: `borderColor`: green, `backgroundColor`: light green
  - Error: `borderColor`: red, shake animation
  - `duration`: 300ms

## 5. Blog animácie

### 5.1 Článok entrance animácie
- **Target**: Blog články pri načítaní
- **Trigger**: Intersection Observer
- **Parametry**:
  - Stagger pre nadpisy, obrázky, text
  - `translateX`: [-20, 0] pre alternujúce články
  - `duration`: 600ms
  - `delay`: stagger(200ms)

## 6. Performance optimalizácie
- Použiť `will-change` len počas animácií
- Limitovať animované properties na `transform`, `opacity`, `filter`
- Debounce/throttle scroll events
- Použiť WAAPI cez Anime.js pre hardware acceleration

## 7. Testovanie
- Testovať na rôznych zariadeniach (mobile, desktop)
- Overiť 60fps pomocou DevTools
- Skontrolovať prístupnosť s screen readerom
- Testovať s `prefers-reduced-motion`

## 8. Fallback stratégie
- CSS animácie ako záloha
- No-JS: statické zobrazenie bez animácií
- Staršie prehliadače: jednoduché fade efekty

## Implementačná poznámka
Animácie sa implementujú postupne, začínajúc od základných fade efektov a pokračujúc k pokročilým timeline a morphing animáciám. Každá animácia má svoj vlastný súbor v `/src/animations/` pre lepšiu organizáciu.