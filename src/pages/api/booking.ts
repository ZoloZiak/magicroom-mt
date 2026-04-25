/**
 * API Endpoint: /api/booking
 * Handles POST requests for salon bookings via Resend email service.
 * Used for integrations where standard form actions are not applicable.
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { bookingFormSchema } from '@/lib/schemas';

export const prerender = false;
// export const runtime = 'edge';  // disabled: Resend SDK compatibility

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Zod validation
    const result = bookingFormSchema.safeParse(data);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return new Response(
        JSON.stringify({ error: errors.name?.[0] || errors.phone?.[0] || errors.email?.[0] || 'Neplatné údaje' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

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

    const dateLine = date ? `\nPreferovaný dátum: ${date}` : '';
    const timeLine = time ? `\nPreferovaný čas: ${time}` : '';
    const noteLine = note ? `\nPoznámka: ${note}` : '';

    const html = `
      <h2>Nová správa z magicroom.sk</h2>
      ${name ? `<p><strong>Meno:</strong> ${name}</p>` : ''}
      ${phone ? `<p><strong>Telefón:</strong> ${phone}</p>` : ''}
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
      ${service ? `<p><strong>Služba:</strong> ${service}</p>` : ''}
      ${date ? `<p><strong>Dátum:</strong> ${date}</p>` : ''}
      ${time ? `<p><strong>Čas:</strong> ${time}</p>` : ''}
      ${note ? `<p><strong>Poznámka:</strong> ${note}</p>` : ''}
      <p style="margin-top:16px;color:#666;font-size:13px;">Odoslané z magicroom.sk</p>
    `;

    const { error: sendError } = await resend.emails.send({
      from: 'MagicRoom <rezervacie@magicroom.sk>',
      to: ['mt.magicroom@gmail.com'],
      replyTo: email,
      subject: `Rezervácia: ${name} — ${service}`,
      html,
      text: `Nová rezervácia z magicroom.sk\n\nMeno: ${name}\nTelefón: ${phone}\nEmail: ${email}\nSlužba: ${service}${dateLine}${timeLine}${noteLine}`,
    });

    if (sendError) {
      console.error('Resend error:', sendError);
      return new Response(
        JSON.stringify({ error: 'E-mail sa nepodarilo odoslať. Skúste WhatsApp alebo nám zavolajte.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Rezervácia bola odoslaná.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Booking API critical error:', error);
    return new Response(
      JSON.stringify({ error: 'Niečo sa pokazilo. Skúste to znova alebo nám zavolajte.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
