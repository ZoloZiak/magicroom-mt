import { Resend } from 'resend';

export default async function handler(req, res) {
  try {
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
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const data = req.body;
    if (!data || typeof data !== 'object') {
      return res.status(400).json({ error: 'Neplatné dáta formulára' });
    }

    const { name, phone, email, service, date, time, note } = data;

    // VALIDÁCIA: Ak sú polia prázdne, vrátime chybu skôr než oslovíme Resend
    if (!name || !email || !service) {
      return res.status(400).json({ 
        error: 'Vyplňte prosím všetky povinné polia (Meno, Email, Služba).',
        received: { name, email, service }
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(503).json({ error: 'Služba nie je nakonfigurovaná (API kľúč).' });
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Nová rezervácia z webu</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Telefón:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Služba:</strong> ${service}</p>
        <p><strong>Poznámka:</strong> ${note || '-'}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'MagicRoom <rezervacie@magicroom.sk>',
      to: ['mt.magicroom@gmail.com'],
      replyTo: email,
      subject: `Rezervácia: ${name}`,
      html,
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('CRASH:', err);
    // Vrátime JSON chybu namiesto spadnutia
    return res.status(500).json({ 
      error: 'Interná chyba servera', 
      details: err.message 
    });
  }
}
