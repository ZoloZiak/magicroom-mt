import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { name, phone, email, service, date, time, note } = data;

    if (!name || !phone || !email || !service) {
      return new Response(
        JSON.stringify({ error: 'Vyplňte všetky povinné polia (meno, telefón, email, služba).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const dateLine = date ? `\nPreferovaný dátum: ${date}` : '';
    const timeLine = time ? `\nPreferovaný čas: ${time}` : '';
    const noteLine = note ? `\nPoznámka: ${note}` : '';

    const html = `
      <h2>Nová rezervácia z magicroom.sk</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Meno</td><td style="padding:8px;border:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Telefón</td><td style="padding:8px;border:1px solid #eee;">${phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #eee;">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Služba</td><td style="padding:8px;border:1px solid #eee;">${service}</td></tr>
        ${date ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Dátum</td><td style="padding:8px;border:1px solid #eee;">${date}</td></tr>` : ''}
        ${time ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Čas</td><td style="padding:8px;border:1px solid #eee;">${time}</td></tr>` : ''}
        ${note ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Poznámka</td><td style="padding:8px;border:1px solid #eee;">${note}</td></tr>` : ''}
      </table>
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
