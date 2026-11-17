import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// Helper to log analytics internally since we are in the same environment
async function logAnalytics(data: any) {
  try {
    const { origin } = new URL(import.meta.env.SITE || 'http://localhost:4321');
    // We try to call the analytics API internally
    // Note: In serverless this might need to be a direct function call to avoid cold start/fetch overhead
    // but for now we'll stick to the roadmap's suggestion of integration
    await fetch(`${origin}/api/admin/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'booking',
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: data.service
        }
      })
    });
  } catch (e) {
    console.error('Failed to log booking analytics:', e);
  }
}

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
    
    // Log analytics even if email fails or is mocked
    await logAnalytics(body);

    if (!resendApiKey || resendApiKey === 're_...') {
       console.log('Resend API key not configured, mocking success for:', name);
       return new Response(JSON.stringify({ success: true, mocked: true }), { status: 200 });
    }

    const resend = new Resend(resendApiKey);

    // 1. Send email to Natalia (Owner)
    const { error: ownerError } = await resend.emails.send({
      from: 'MagicRoom <info@magicroom.sk>',
      to: 'mt.magicroom@gmail.com',
      subject: `Nová objednávka / dopyt: ${name} (${service})`,
      html: `
        <h1>Nová online objednávka / dopyt</h1>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefón:</strong> ${phone}</p>
        <p><strong>Služba / Položka:</strong> ${service}</p>
        <p><strong>Dátum:</strong> ${date || 'neuvedený'}</p>
        <p><strong>Čas / Poznámka k času:</strong> ${time || 'neuvedený'}</p>
        <p><strong>Poznámka / Detaily:</strong> ${note || '-'}</p>
        <hr />
        <p>Táto správa bola odoslaná z online formulára na magicroom.sk</p>
      `,
    });

    if (ownerError) {
      console.error('Resend error (owner):', ownerError);
      throw new Error('Chyba pri odosielaní emailu majiteľke.');
    }

    // 2. Send confirmation to Customer
    try {
      await resend.emails.send({
        from: 'MagicRoom <info@magicroom.sk>',
        to: email,
        subject: 'Potvrdenie prijatia vašej objednávky — MagicRoom',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; rounded: 10px;">
            <h1 style="color: #db2777;">Ahoj ${name}!</h1>
            <p>Ďakujeme za tvoju objednávku / dopyt v MagicRoom.</p>
            <p>Tvoje údaje sme prijali a čoskoro sa ti ozveme (najčastejšie cez WhatsApp alebo telefonicky), aby sme si potvrdili dostupnosť šiat, doručenie alebo detaily k výzdobe.</p>
            <div style="background-color: #fdf2f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #9d174d;">Zhrnutie dopytu:</h3>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Položka / Služba:</strong> ${service}</li>
                <li><strong>Termín:</strong> ${date || 'podľa dohody'}</li>
              </ul>
            </div>
            <p style="font-size: 13px; color: #666;">Upozornenie: Prešli sme na online-only predaj spoločenských šiat, osobné skúšky svadobných šiat už neposkytujeme.</p>
            <p>Tešíme sa na komunikáciu!</p>
            <p><strong>Natália & MagicRoom</strong></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">Toto je automatické potvrdenie, neodpovedajte na tento email.</p>
          </div>
        `,
      });
    } catch (e) {
      console.warn('Could not send confirmation email to customer:', e);
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
