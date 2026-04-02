# Deployment — MagicRoom

## Automatický deploy

Push na `main` → Vercel automaticky buildne a deploynne.

```bash
git add -A && git commit -m "..." && git push
```

## Manuálny deploy

```bash
source ~/.nvm/nvm.sh
vercel --prod --yes
```

## Build lokálne

```bash
source ~/.nvm/nvm.sh
npm run build
```

## URL

- **Produkcia:** https://magicroom-mt.vercel.app
- **GitHub:** github.com/ZoloZiak/magicroom-mt

## Environment Variables (Vercel)

| Kľúč | Hodnota | Popis |
|------|---------|-------|
| `RESEND_API_KEY` | `re_...` | Resend API kľúč pre emaily |

## Email

- **Odosielateľ:** `rezervacie@magicroom.sk` (overená doména na Resend)
- **Príjemca:** `mt.magicroom@gmail.com` (Natália)
- **Site email:** `info@magicroom.sk`

## Doména

- DNS záznamy pre Resend overené (DKIM, SPF, MX na `send.magicroom.sk`)
- Email forward: `info@magicroom.sk` → `mt.magicroom@gmail.com`
- Email forward: `rezervacie@magicroom.sk` → `mt.magicroom@gmail.com`
- Hlavná doména magicroom.sk zatiaľ NEpresmerovaná na Vercel
