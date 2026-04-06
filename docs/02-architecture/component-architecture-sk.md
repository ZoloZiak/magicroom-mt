# Architektúra komponentov — MagicRoom

## 1. Technologický stack

### Voľba: Astro + shadcn/ui

**Odôvodnenie:**
- Astro = rýchlosť (zero JS predvolene) + SSR keď je potrebné
- shadcn/ui = overené komponenty + customizácia cez Tailwind
- Tailwind = štylovanie (už v shadcn)
- Resend = email pre rezervácie

### Štruktúra projektu

```
/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui komponenty (vybrané)
│   │   ├── blocks/          # Sekcie/bloky (Hero, Services, etc.)
│   │   ├── forms/           # Formuláre (Contact, Reservation)
│   │   └── layout/          # Navigácia, Footer, Container
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── o-nas.astro
│   │   ├── sluzby.astro
│   │   ├── komisny-predaj.astro
│   │   ├── prenajom-dekoracii.astro
│   │   └── kontakt.astro
│   │
│   ├── lib/
│   │   ├── supabase.ts      # Supabase client
│   │   ├── utils.ts         # cn() helper
│   │   └── validations.ts   # Zod schemas
│   │
│   └── styles/
│       └── globals.css
│
├── public/
│   └── images/

### Optimalizácia obrázkov
- Astro automaticky lazy-loaduje obrázky (<img loading="lazy">)
- Formát: WebP s fallbackom na JPEG/PNG
- Rozmery: max 800px šírka pre galériu, 1200px pre hero
- Kompresia: 80% kvalita
│
├── supabase/
│   └── migrations/          # Database schema
│
└── components.json          # shadcn/ui config
```

---

## 2. Vybrané komponenty shadcn/ui

### Minimálna sada (pre MVP)

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add textarea
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add sheet       # Mobile menu
npx shadcn@latest add toast
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add avatar
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs
npx shadcn@latest add scroll-area
```

### Rozšírené komponenty (po MVP)

```bash
npx shadcn@latest add calendar    # Date picker
npx shadcn@latest add popover     # Tooltips
npx shadcn@latest add select      # Dropdown select
npx shadcn@latest add carousel    # Image carousel
npx shadcn@latest add accordion   # FAQ sections
```

---

## 3. Vlastné komponenty (blocks/)

### Block: Hero

```astro
---
// src/components/blocks/Hero.astro
interface Props {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string;
}

const { headline, subheadline, ctaText, ctaLink, imageSrc } = Astro.props;
---

<section class="relative min-h-screen flex items-center">
  <div class="container grid lg:grid-cols-2 gap-12 items-center">
    <!-- Text Content -->
    <div class="space-y-8">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-display">
        {headline}
      </h1>
      <p class="text-lg text-muted-foreground max-w-md">
        {subheadline}
      </p>
      <Button asChild size="lg" class="bg-[#B85C4A] hover:bg-[#A04D3C]">
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </div>
    
    <!-- Image -->
    {imageSrc && (
      <div class="relative">
        <img src={imageSrc} alt="MagicRoom" class="rounded-2xl" />
      </div>
    )}
  </div>
</section>
```

### Block: ServiceCard

```astro
---
// src/components/blocks/ServiceCard.astro
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Props {
  title: string;
  description: string;
  price?: string;
  icon: string;  # Lucide icon name
  href: string;
}

const { title, description, price, icon, href } = Astro.props;
---

<Card class="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <CardHeader>
    <div class="mb-4 text-[#C9A86C]">
      <iconify-icon icon={icon} width="48" height="48" />
    </div>
    <CardTitle class="text-2xl font-display">{title}</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4">
    <p class="text-muted-foreground">{description}</p>
    {price && (
      <p class="text-sm font-medium text-[#8B6F5C]">
        Od {price}
      </p>
    )}
    <Button variant="outline" asChild class="w-full">
      <a href={href}>Zistiť viac</a>
    </Button>
  </CardContent>
</Card>
```

### Block: DecorationCard

```astro
---
// src/components/blocks/DecorationCard.astro
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Props {
  name: string;
  category: string;
  price: number;
  imageUrl?: string;
  available?: boolean;
}

const { name, category, price, imageUrl, available = true } = Astro.props;
---

<Card class="overflow-hidden">
  {imageUrl ? (
    <img src={imageUrl} alt={name} class="w-full h-48 object-cover" />
  ) : (
    <div class="w-full h-48 bg-[#F7F3EF] flex items-center justify-center">
      <span class="text-muted-foreground">Bez fotografie</span>
    </div>
  )}
  
  <CardContent class="pt-4">
    <Badge variant="secondary" class="mb-2">{category}</Badge>
    <h3 class="font-medium">{name}</h3>
  </CardContent>
  
  <CardFooter class="flex justify-between items-center">
    <span class="text-lg font-semibold text-[#B85C4A]">{price} €</span>
    {!available && (
      <Badge variant="destructive">Obsadené</Badge>
    )}
  </CardFooter>
</Card>
```

### Block: ContactForm

```astro
---
// src/components/forms/ContactForm.astro
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

# Client-side form z Supabase integration
---

<form id="contact-form" class="space-y-6">
  <div class="grid md:grid-cols-2 gap-4">
    <div class="space-y-2">
      <Label for="name">Meno *</Label>
      <Input id="name" name="name" required placeholder="Anna Nováková" />
    </div>
    <div class="space-y-2">
      <Label for="email">Email *</Label>
      <Input id="email" name="email" type="email" required placeholder="anna@email.sk" />
    </div>
  </div>
  
  <div class="space-y-2">
    <Label for="phone">Telefón</Label>
    <Input id="phone" name="phone" type="tel" placeholder="+421 900 123 456" />
  </div>
  
  <div class="space-y-2">
    <Label for="message">Správa *</Label>
    <Textarea id="message" name="message" required rows={4} 
              placeholder="Chcela by som sa opýtať na..." />
  </div>
  
  <Button type="submit" class="w-full md:w-auto" id="submit-btn">
    Odoslať správu
  </Button>
</form>

<script>
  const form = document.getElementById('contact-form');
  
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn') as HTMLButtonElement;
    btn.disabled = true;
    btn.innerHTML = 'Odosielanie...';
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (res.ok) {
        # Toast success
        window.location.href = '/kontakt?success=true';
      } else {
        throw new Error('Chyba pri odosielaní');
      }
    } catch (error) {
      # Toast error
      btn.disabled = false;
      btn.textContent = 'Skúsiť znova';
    }
  });
</script>
```

---

## 4. Navigácia a Layout

### Header (Sticky)

```astro
---
// src/components/layout/Header.astro
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
---

<header class="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b">
  <nav class="container flex items-center justify-between h-16">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2">
      <img src="/logo.svg" alt="MagicRoom" class="h-8" />
      <span class="font-display text-xl hidden sm:block">MagicRoom</span>
    </a>
    
    <!-- Desktop Nav -->
    <ul class="hidden md:flex items-center gap-8">
      <li><a href="/o-nas" class="hover:text-[#B85C4A] transition-colors">O nás</a></li>
      <li><a href="/sluzby" class="hover:text-[#B85C4A] transition-colors">Služby</a></li>
      <li><a href="/komisny-predaj" class="hover:text-[#B85C4A] transition-colors">Komisný predaj</a></li>
      <li><a href="/prenajom-dekoracii" class="hover:text-[#B85C4A] transition-colors">Dekorácie</a></li>
      <li><a href="/kontakt" class="hover:text-[#B85C4A] transition-colors">Kontakt</a></li>
    </ul>
    
    <!-- CTA + Mobile Menu -->
    <div class="flex items-center gap-4">
      <Button asChild size="sm" class="hidden md:flex bg-[#B85C4A] hover:bg-[#A04D3C]">
        <a href="/kontakt#rezervacia">Zarezervuj skúšku</a>
      </Button>
      
      <Sheet>
        <SheetTrigger asChild class="md:hidden">
          <Button variant="ghost" size="icon">
            <iconify-icon icon="lucide:menu" width="24" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <ul class="flex flex-col gap-4 mt-8">
            <li><a href="/o-nas" class="text-lg">O nás</a></li>
            <li><a href="/sluzby" class="text-lg">Služby</a></li>
            <li><a href="/komisny-predaj" class="text-lg">Komisný predaj</a></li>
            <li><a href="/prenajom-dekoracii" class="text-lg">Dekorácie</a></li>
            <li><a href="/kontakt" class="text-lg">Kontakt</a></li>
          </ul>
          <div class="mt-8">
            <Button asChild class="w-full bg-[#B85C4A] hover:bg-[#A04D3C]">
              <a href="/kontakt#rezervacia">Zarezervuj skúšku</a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</header>
```

### Footer

```astro
---
// src/components/layout/Footer.astro
import { Separator } from '@/components/ui/separator';
---

<footer class="bg-[#2D2421] text-white py-16">
  <div class="container">
    <div class="grid md:grid-cols-4 gap-12">
      <!-- Logo + Description -->
      <div class="md:col-span-2">
        <h3 class="font-display text-2xl mb-4">MagicRoom</h3>
        <p class="text-white/70 mb-6">
          Malý osobný svadobný salón v Martine. 
          Ceny vidíte hneď, komis šiat, osobný prístup.
        </p>
        <div class="flex gap-4">
          <a href="https://facebook.com/magicroom" aria-label="Facebook">
            <iconify-icon icon="lucide:facebook" width="24" />
          </a>
          <a href="https://instagram.com/mt.magicroom" aria-label="Instagram">
            <iconify-icon icon="lucide:instagram" width="24" />
          </a>
        </div>
      </div>
      
      <!-- Contact -->
      <div>
        <h4 class="font-semibold mb-4">Kontakt</h4>
        <ul class="space-y-2 text-white/70">
          <li>
            <a href="tel:+421950490323" class="hover:text-white">
              + 421 950 490 323
            </a>
          </li>
          <li>
            <a href="mailto:mt.magicroom@gmail.com" class="hover:text-white">
              mt.magicroom@gmail.com
            </a>
          </li>
          <li>Jilemníckeho 43, Martin</li>
        </ul>
      </div>
      
      <!-- Links -->
      <div>
        <h4 class="font-semibold mb-4">Navigácia</h4>
        <ul class="space-y-2 text-white/70">
          <li><a href="/o-nas" class="hover:text-white">O nás</a></li>
          <li><a href="/sluzby" class="hover:text-white">Služby</a></li>
          <li><a href="/komisny-predaj" class="hover:text-white">Komisný predaj</a></li>
          <li><a href="/prenajom-dekoracii" class="hover:text-white">Dekorácie</a></li>
          <li><a href="/kontakt" class="hover:text-white">Kontakt</a></li>
        </ul>
      </div>
    </div>
    
    <Separator class="my-8 bg-white/20" />
    
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
      <p>© 2026 MagicRoom. Všetky práva vyhradené.</p>
      <div class="flex gap-4">
        <a href="/reklamacny-poriadok" class="hover:text-white">Reklamačný poriadok</a>
      </div>
    </div>
  </div>
</footer>
```

### WhatsApp FAB (Floating)

```astro
---
// src/components/layout/WhatsAppFAB.astro
---

<a 
  href="https://wa.me/421950490323?text=Dobr%C3%BD%20de%C5%88%2C%20chcela%20by%20som%20sa%20sp%C3%BDta%C5%A5%20na%20sk%C3%BA%C5%A1ku%20%C5%A1iat."
  target="_blank"
  rel="noopener noreferrer"
  class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform md:bottom-8 md:right-8"
  aria-label="Napísať na WhatsApp"
>
  <iconify-icon icon="logos:whatsapp-icon" width="28" height="28" />
</a>
```

---

## 5. Konfigurácia témy (Tailwind)

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // MagicRoom palette
        primary: {
          DEFAULT: '#8B6F5C',   // Warm Taupe
          50: '#F7F3EF',
          100: '#EDE7E1',
          200: '#D4B8A0',
          300: '#BC9A82',
          400: '#A47D65',
          500: '#8B6F5C',
          600: '#735C4D',
          700: '#5B4939',
          800: '#433626',
          900: '#2D2421',
        },
        secondary: '#D4B8A0',   // Blush Sand
        accent: '#C9A86C',     // Muted Gold
        background: '#FDFBF9',  // Warm White
        surface: '#F7F3EF',     // Cream
        cta: '#B85C4A',         // Terracotta Rose
        success: '#7A9E7E',     // Sage Green
        foreground: '#2D2421',
        muted: '#6B5E57',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

---

## 6. Supabase Schema

```sql
-- Tabuľka kontaktov
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabuľka rezervácií
CREATE TABLE reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_date DATE,
  notes TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabuľka dekorácií
CREATE TABLE decorations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabuľka služieb
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price_from DECIMAL(10,2),
  price_to DECIMAL(10,2),
  features JSONB,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE decorations ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Policy: anyone can insert, only service role can read
CREATE POLICY "Anyone can contact" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can reserve" ON reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view decorations" ON decorations FOR SELECT USING (true);
CREATE POLICY "Anyone can view services" ON services FOR SELECT USING (true);
```

---

## 7. API Routes (Astro)

```typescript
// src/pages/api/contact.ts
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);
    
    const { error } = await supabase.from('contacts').insert(data);
    
    if (error) throw error;
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid data' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

---

## 8. Inštalácia — rýchly štart

```bash
# 1. Vytvorenie projektu Astro
npm create astro@latest magicroom
cd magicroom

# 2. Pridanie Tailwind
npx astro add tailwind

# 3. Inicializácia shadcn/ui
npx shadcn@latest init

# 4. Pridanie komponentov
npx shadcn@latest add button card input label textarea sheet badge separator

# 5. Konfigurácia Supabase
npm install @supabase/supabase-js

# 6. Premenné prostredia
cp .env.example .env
# Uprav .env a pridaj SUPABASE_URL a SUPABASE_ANON_KEY
```
