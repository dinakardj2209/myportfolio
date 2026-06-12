import { Router } from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/sendEmail.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    await sendContactEmail(payload);

    if (mongooseConnected()) {
      try {
        await Contact.create(payload);
      } catch (dbErr) {
        console.error('MongoDB save failed (email was sent):', dbErr.message);
      }
    }

    res.status(201).json({
      message: 'Message sent successfully. Thank you for reaching out!',
    });
  } catch (err) {
    console.error('Contact form error:', err.message || err);

    if (err.message === 'Email service is not configured on the server.') {
      return res.status(503).json({
        message: 'Email service is temporarily unavailable. Please email directly.',
      });
    }

    if (err.message?.includes('Invalid login') || err.message?.includes('EAUTH')) {
      return res.status(500).json({
        message: 'Email authentication failed. Check SMTP credentials on the server.',
      });
    }

    if (err.message?.includes('Resend error')) {
      return res.status(500).json({
        message: 'Email delivery failed. Please try again or email directly.',
      });
    }

    res.status(500).json({ message: 'Failed to send your message. Please try again.' });
  }
});

function mongooseConnected() {
  return mongoose.connection.readyState === 1;
}

export default router;
