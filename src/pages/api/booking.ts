import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, time, note } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Chýbajú povinné údaje.' 
      }), { status: 400 });
    }

    const resendApiKey = import.meta.env.RESEND_API_KEY;
    if (!resendApiKey || resendApiKey === 're_...') {
       // Mock success if API key is not configured for production
       console.log('Resend API key not configured, mocking success for:', name);
       return new Response(JSON.stringify({ success: true, mocked: true }), { status: 200 });
    }

    const resend = new Resend(resendApiKey);

    // 1. Send email to Natalia (Owner)
    const { data: ownerEmail, error: ownerError } = await resend.emails.send({
      from: 'MagicRoom <onboarding@resend.dev>',
      to: 'mt.magicroom@gmail.com', // Natalia's email
      subject: `Nová rezervácia: ${name} (${service})`,
      html: `
        <h1>Nová rezervácia skúšky / dopyt</h1>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefón:</strong> ${phone}</p>
        <p><strong>Služba:</strong> ${service}</p>
        <p><strong>Dátum:</strong> ${date || 'neuvedený'}</p>
        <p><strong>Čas:</strong> ${time || 'neuvedený'}</p>
        <p><strong>Poznámka:</strong> ${note || '-'}</p>
        <hr />
        <p>Táto správa bola odoslaná z kontaktného formulára na magicroom.sk</p>
      `,
    });

    if (ownerError) {
      console.error('Resend error (owner):', ownerError);
      throw new Error('Chyba pri odosielaní emailu majiteľke.');
    }

    // 2. Send confirmation to Customer (Optional but good)
    try {
      await resend.emails.send({
        from: 'MagicRoom <onboarding@resend.dev>',
        to: email,
        subject: 'Potvrdenie prijatia vašej rezervácie — MagicRoom',
        html: `
          <h1>Ahoj ${name}!</h1>
          <p>Ďakujeme za tvoj záujem o návštevu nášho salónu MagicRoom v Martine.</p>
          <p>Tvoje údaje sme prijali a čoskoro sa ti ozveme (najčastejšie cez WhatsApp alebo telefonicky), aby sme si potvrdili presný termín.</p>
          <p><strong>Zhrnutie dopytu:</strong></p>
          <ul>
            <li><strong>Služba:</strong> ${service}</li>
            <li><strong>Preferovaný termín:</strong> ${date || 'podľa dohody'} o ${time || 'čase podľa dohody'}</li>
          </ul>
          <p>Tešíme sa na teba!</p>
          <p>Natália & MagicRoom</p>
          <hr />
          <p><small>Toto je automatické potvrdenie, neodpovedajte na tento email.</small></p>
        `,
      });
    } catch (e) {
      console.warn('Could not send confirmation email to customer:', e);
      // Don't fail the whole request if customer confirmation fails
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Booking API error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message || 'Chyba na serveri.' 
    }), { status: 500 });
  }
};
