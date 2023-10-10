// /api/send-email.js
import { Resend } from 'resend';

const API_KEY = 're_MQzeWfFs_6UP761ERjUK7RAGauyX8cQCx';
const resend = new Resend(API_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'diego.santamaria750@gmail.com',
        subject: `New Message from ${name} - ${email}`,
        html: `<p>${message}</p>`
      });

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
