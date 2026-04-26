export default async function handler(req, res) {
  // CORS hlavičky
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const data = req.body;
    const { name, email, service } = data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return res.status(200).json({ 
        success: false, 
        error: 'Chýba API kľúč na serveri. Skontrolujte Vercel Environment Variables.' 
      });
    }

    // Namiesto knižnice použijeme priamy FETCH na Resend API
    // Toto je najistejší spôsob, lebo nepotrebujeme žiadny import
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'MagicRoom <rezervacie@magicroom.sk>',
        to: 'mt.magicroom@gmail.com',
        reply_to: email,
        subject: `Rezervácia: ${name}`,
        html: `<p>Nová rezervácia od <b>${name}</b> na službu <b>${service}</b>.</p><p>Email: ${email}</p>`
      })
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      return res.status(200).json({ 
        success: false, 
        error: 'Resend API chyba: ' + (resendResult.message || 'Neznáma chyba') 
      });
    }

    return res.status(200).json({ success: true, id: resendResult.id });

  } catch (err) {
    // Vrátime chybu ako text, aby sme ju videli v konzole
    return res.status(200).json({ 
      success: false, 
      error: 'KRITICKÁ CHYBA: ' + err.message 
    });
  }
}
