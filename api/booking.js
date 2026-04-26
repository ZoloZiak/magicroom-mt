import { Resend } from 'resend';

export default async function handler(req, res) {
  console.log('DEBUG: API Handler started');
  console.log('DEBUG: Method:', req.method);
  console.log('DEBUG: Body type:', typeof req.body);
  console.log('DEBUG: Body content:', JSON.stringify(req.body));

  // CORS hlavičky
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    console.log('DEBUG: Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed', success: false });
  }

  try {
    const data = req.body;
    
    if (!data || Object.keys(data).length === 0) {
      console.error('DEBUG: Request body is empty or not parsed');
      return res.status(400).json({ 
        error: 'Chýbajúce dáta vo formulári (Empty body)', 
        success: false 
      });
    }

    const { name, phone, email, service, date, time, note } = data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('DEBUG: RESEND_API_KEY is missing');
      return res.status(503).json({ 
        error: 'Konfigurácia emailov na serveri chýba (API key missing).', 
        success: false 
      });
    }

    console.log('DEBUG: Initializing Resend with key starting with:', apiKey.substring(0, 7));
    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #c08497;">Nová rezervácia — magicroom.sk</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Telefón:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Služba:</strong> ${service}</p>
        <p><strong>Dátum/Čas:</strong> ${date || '-'} / ${time || '-'}</p>
        <p><strong>Poznámka:</strong> ${note || '-'}</p>
      </div>
    `;

    console.log('DEBUG: Sending email via Resend...');
    const result = await resend.emails.send({
      from: 'MagicRoom <rezervacie@magicroom.sk>',
      to: ['mt.magicroom@gmail.com'],
      replyTo: email,
      subject: `Rezervácia: ${name}`,
      html,
    });

    if (result.error) {
      console.error('DEBUG: Resend service error:', result.error);
      return res.status(500).json({ 
        error: `Chyba Resend: ${result.error.message}`, 
        success: false 
      });
    }

    console.log('DEBUG: Email sent successfully, ID:', result.data?.id);
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('DEBUG: Critical API Exception:', err);
    return res.status(500).json({ 
      error: `Kritická chyba: ${err.message}`, 
      success: false 
    });
  }
}
