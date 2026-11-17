/**
 * API Endpoint: /api/info
 * Provides essential site information for integrations and external tools.
 * This endpoint is stable and maintained for partners and SEO tools.
 * 
 * @see e2e/feeds.spec.ts for automated tests
 */
import type { APIRoute } from 'astro';

export const prerender = false;
export const runtime = 'edge';

const siteInfo = {
  version: '1.1.0',
  name: 'MagicRoom',
  description: 'Online predaj spoločenských šiat a prenájom svadobných dekorácií v Martine (online-only)',
  url: 'https://www.magicroom.sk',
  phone: '+421 950 490 323',
  email: 'info@magicroom.sk',
  address: {
    street: 'Jilemnického 4015/43',
    city: 'Martin',
    postal: '036 01',
    country: 'SK',
  },
  coordinates: {
    lat: 49.0624,
    lng: 18.9186,
  },
  social: {
    facebook: 'https://www.facebook.com/909260838935730/',
    instagram: 'https://www.instagram.com/mt.magicroom/',
  },
  services: [
    {
      name: 'Spoločenské šaty online',
      priceRange: '15–150 €',
    },
    {
      name: 'Prenájom dekorácií',
      priceRange: 'od 0,50 €',
    },
    {
      name: 'Svadobné poradenstvo',
      priceRange: 'od 40 €',
    },
  ],
  notice: 'Svadobné skúšky šiat už nie sú možné — prechod na online-only predaj spoločenských šiat.',
  updated: new Date().toISOString(),
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(siteInfo, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};