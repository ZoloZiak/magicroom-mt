/**
 * API Endpoint: /api/booking
 * Handles POST requests for salon bookings via Resend email service.
 * Used for integrations where standard form actions are not applicable.
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Check if API key is configured
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Email služba nie je nakonfigurovaná. Zavolajte nám na +421 950 490 323.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const { name, phone, email, service, date, time, note } = data;

    // At least one contact method required
    if (!phone && !email && !name) {
      return new Response(
        JSON.stringify({ error: 'Vyplňte aspoň meno alebo telefón.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const dateLine = date ? `\nPreferovaný dátum: ${date}` : '';
    const timeLine = time ? `\nPreferovaný čas: ${time}` : '';
    const noteLine = note ? `\nPoznámka: ${note}` : '';

    const html = `
      <h2>Nová správa z magicroom.sk</h2>
      ${name ? `<p><strong>Meno:</strong> ${name}</p>` : ''}
      ${phone ? `<p><strong>Telefón:</strong> ${phone}</p>` : ''}
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
      ${service ? `<p><strong>Služba:</strong> ${service}</p>` : ''}
      ${dateLine ? `<p>${dateLine}</p>` : ''}
      ${timeLine ? `<p>${timeLine}</p>` : ''}
      ${noteLine ? `<p>${noteLine}</p>` : ''}
      <p style="margin-top:16px;color:#666;font-size:13px;">Odoslané z magicroom.sk</p>
    `;

    await resend.emails.send({
      from: 'MagicRoom Rezervácie <rezervacie@magicroom.sk>',
      to: ['mt.magicroom@gmail.com'],
      replyTo: email,
      subject: `Nová rezervácia: ${name} — ${service}`,
      html,
      text: `Nová rezervácia z magicroom.sk\n\nMeno: ${name}\nTelefón: ${phone}\nEmail: ${email}\nSlužba: ${service}${dateLine}${timeLine}${noteLine}`,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Rezervácia bola odoslaná. Ozveme sa vám do 24 hodín.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Booking API error:', error);
    return new Response(
      JSON.stringify({ error: 'Niečo sa pokazilo. Skúste to znova alebo nám zavolajte.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
