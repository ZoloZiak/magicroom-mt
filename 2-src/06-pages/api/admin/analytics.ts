import type { APIRoute } from 'astro';
import { getAnalytics, saveAnalytics, simpleId } from '@/05-lib/storage';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { type, data: eventData } = body;
    
    const analytics = await getAnalytics();
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
    
    // Limits: Keep only last 1000 events per category to avoid KV size limits
    analytics.whatsappClicks = analytics.whatsappClicks.slice(-1000);
    analytics.bookingSubmissions = analytics.bookingSubmissions.slice(-1000);
    analytics.contactFormSubmissions = analytics.contactFormSubmissions.slice(-1000);
    analytics.conversions = analytics.conversions.slice(-1000);

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
  const analytics = await getAnalytics();
  return new Response(JSON.stringify(analytics), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
