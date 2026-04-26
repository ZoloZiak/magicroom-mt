/**
 * API Endpoint: /api/booking
 * Handles POST requests for salon bookings via Resend email service.
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { bookingFormSchema } from '@/lib/schemas';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Log request start
    console.log('Booking API: Received request');

    // 2. Safely parse JSON
    let data;
    try {
      data = await request.json();
    } catch (e) {
      console.error('Booking API: Failed to parse JSON', e);
      return new Response(
        JSON.stringify({ error: 'Neplatný formát dát (JSON error)' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Zod validation
    const result = bookingFormSchema.safeParse(data);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      const firstError = Object.values(errors).flat()[0] || 'Neplatné údaje';
      return new Response(
        JSON.stringify({ error: firstError }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Check for API key (using both import.meta.env and process.env for max compatibility)
    const apiKey = import.meta.env.RESEND_API_KEY || (process && process.env ? process.env.RESEND_API_KEY : undefined);
    
    if (!apiKey || apiKey === 're_...') {
      console.error('Booking API: RESEND_API_KEY is missing or placeholder');
      return new Response(
        JSON.stringify({ error: 'Email služba nie je nakonfigurovaná. Kontaktujte nás telefonicky.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 5. Initialize Resend and send
    const resend = new Resend(apiKey);
    const { name, phone, email, service, date, time, note } = data;

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #c08497; border-bottom: 2px solid #f9f4f5; padding-bottom: 10px;">Nová rezervácia — magicroom.sk</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Telefón:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Služba:</strong> ${service}</p>
        ${date ? `<p><strong>Dátum:</strong> ${date}</p>` : ''}
        ${time ? `<p><strong>Čas:</strong> ${time}</p>` : ''}
        ${note ? `<p><strong>Poznámka:</strong> ${note}</p>` : ''}
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #888; font-size: 12px; text-align: center;">Odoslané z rezervačného systému magicroom.sk</p>
      </div>
    `;

    const { data: sendData, error: sendError } = await resend.emails.send({
      from: 'MagicRoom <rezervacie@magicroom.sk>',
      to: ['mt.magicroom@gmail.com'],
      replyTo: email,
      subject: `Rezervácia: ${name} — ${service}`,
      html,
    });

    if (sendError) {
      console.error('Booking API: Resend error:', sendError);
      return new Response(
        JSON.stringify({ error: 'Chyba pri odosielaní emailu. Skúste WhatsApp.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('Booking API: Success!', sendData?.id);
    return new Response(
      JSON.stringify({ success: true, message: 'Rezervácia odoslaná' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Booking API: Critical failure:', error);
    return new Response(
      JSON.stringify({ error: 'Interná chyba servera. Skúste nám zavolať.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
