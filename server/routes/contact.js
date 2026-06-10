import { Router } from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

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

    if (mongooseConnected()) {
      const contact = new Contact({ name, email, subject, message });
      await contact.save();
    }

    res.status(201).json({
      message: 'Message received successfully. Thank you for reaching out!',
    });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ message: 'Failed to process your message. Please try again.' });
  }
});

function mongooseConnected() {
  return mongoose.connection.readyState === 1;
}

export default router;
