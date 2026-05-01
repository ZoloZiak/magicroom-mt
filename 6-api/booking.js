/**
 * Native Vercel Serverless Function
 * Uses direct fetch to Resend API to ensure maximum stability on Vercel.
 */
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    const { name, phone, email, service, date, time, note } = data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return res.status(200).json({ success: false, error: 'API key missing on server' });
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px; background-color: #fff;">
        <h2 style="color: #c08497; margin-top: 0;">Nová rezervácia — magicroom.sk</h2>
        <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f4f5; border-radius: 8px;">
          <p style="margin: 5px 0;"><strong>Meno:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Telefón:</strong> ${phone}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <p style="margin: 5px 0;"><strong>Služba:</strong> ${service}</p>
          <p style="margin: 5px 0;"><strong>Dátum:</strong> ${date || '-'}</p>
          <p style="margin: 5px 0;"><strong>Čas:</strong> ${time || '-'}</p>
        </div>
        ${note ? `<div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee;"><p><strong>Poznámka:</strong></p><p style="font-style: italic; color: #555;">${note}</p></div>` : ''}
        <p style="margin-top: 30px; color: #999; font-size: 12px; text-align: center;">Odoslané z natívnej Vercel funkcie (Stable Fetch)</p>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'MagicRoom <rezervacie@magicroom.sk>',
        to: ['mt.magicroom@gmail.com'],
        reply_to: email,
        subject: `Rezervácia: ${name} (${service})`,
        html: html
      })
    });

    const result = await response.json();

    if (!response.ok) {
      return res.status(200).json({ success: false, error: result.message || 'Resend error' });
    }

    return res.status(200).json({ success: true, id: result.id });

  } catch (err) {
    return res.status(200).json({ success: false, error: 'Internal server error: ' + err.message });
  }
}
