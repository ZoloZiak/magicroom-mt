import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, phone, email, service, date, time, note } = data;

    // Use process.env for Vercel Node.js runtime
    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Konfigurácia emailov chýba (API kľúč). Kontaktujte nás telefonicky.' 
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Nová rezervácia z webu</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Telefón:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Služba:</strong> ${service}</p>
        <p><strong>Dátum/Čas:</strong> ${date || '-'} / ${time || '-'}</p>
        <p><strong>Poznámka:</strong> ${note || '-'}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from: 'MagicRoom <rezervacie@magicroom.sk>',
      to: ['mt.magicroom@gmail.com'],
      replyTo: email,
      subject: `Rezervácia: ${name}`,
      html,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return new Response(
        JSON.stringify({ success: false, error: 'Chyba služby Resend: ' + result.error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Interná chyba' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
