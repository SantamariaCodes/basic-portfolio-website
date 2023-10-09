import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const sendEmail = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  try {
    const response = await axios.post('https://api.resend.io/emails/send', {
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Contact form submission from ${name}`,
      html: `<p>${message}</p>`
    }, {
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`
      }
    });

    res.status(200).json({ success: true, data: response.data });
} catch (error) {   // <-- This is the start of the catch block
  console.error('Server-Side Detailed Error:', error); // Add this line

  res.status(500).json({ success: false, message: 'Error sending email.' });
}

};
export default sendEmail;