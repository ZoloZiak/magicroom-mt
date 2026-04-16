import type { APIRoute } from 'astro';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

export const prerender = false;

const ANALYTICS_PATH = join(process.cwd(), 'content/json/analytics.json');

function simpleId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 11);
}

async function loadAnalytics() {
  try {
    const content = await readFile(ANALYTICS_PATH, 'utf-8');
    return JSON.parse(content);
  } catch {
    return { conversions: [], whatsappClicks: [], bookingSubmissions: [], contactFormSubmissions: [] };
  }
}

async function saveAnalytics(data: any) {
  await writeFile(ANALYTICS_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { type, data: eventData } = body;
    
    const analytics = await loadAnalytics();
    const timestamp = new Date().toISOString();
    
    switch (type) {
      case 'whatsapp_click':
        analytics.whatsappClicks.push({
          id: simpleId(),
          timestamp,
          url: eventData?.url || ''
        });
        break;
        
      case 'booking':
        analytics.bookingSubmissions.push({
          id: simpleId(),
          timestamp,
          name: eventData?.name || '',
          phone: eventData?.phone || '',
          email: eventData?.email || '',
          service: eventData?.service || ''
        });
        break;
        
      case 'contact_form':
        analytics.contactFormSubmissions.push({
          id: simpleId(),
          timestamp,
          name: eventData?.name || '',
          email: eventData?.email || '',
          message: eventData?.message || ''
        });
        break;
        
      case 'conversion':
        analytics.conversions.push({
          id: simpleId(),
          timestamp,
          source: eventData?.source || 'unknown',
          type: eventData?.conversionType || 'form'
        });
        break;
    }
    
    await saveAnalytics(analytics);
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return new Response(JSON.stringify({ error: 'Chyba' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async () => {
  const analytics = await loadAnalytics();
  return new Response(JSON.stringify(analytics), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
