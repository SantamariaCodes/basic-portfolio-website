import { Resend } from 'resend';
import { Request, Response } from 'express';

const API_KEY = process.env.REACT_APP_EMAIL_KEY ?? (() => { throw new Error("REACT_APP_EMAIL_KEY is not set!"); })();
const RECIPIENT = process.env.REACT_APP_RECIPIENT_EMAIL ?? "default_email@example.com"; // Provide a default

const resend = new Resend(API_KEY);

export default async (req: Request, res: Response) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: RECIPIENT,
        subject: `New Message from ${name} - ${email}`,
        html: `<p>${message}</p>`
      });

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      // Handle the error of type unknown
      if (typeof error === "object" && error !== null && "message" in error) {
        return res.status(500).json({ success: false, error: error.message });
      } else {
        return res.status(500).json({ success: false, error: "An unknown error occurred." });
      }
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
