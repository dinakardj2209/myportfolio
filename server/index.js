import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';
import { getEmailProvider, isEmailConfigured } from './utils/sendEmail.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

  app.use(cors({
    origin: true,
    credentials: true,
  }));
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio API is running',
    email: {
      configured: isEmailConfigured(),
      provider: getEmailProvider(),
    },
    mongo: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.get('/', (_req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

const connectDB = async () => {
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri) {
    console.warn('MONGODB_URI not set — contact form will not persist messages.');
    return;
  }
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS origins: ${allowedOrigins.join(', ')}`);

  if (isEmailConfigured()) {
    console.log(`Email notifications enabled (${getEmailProvider()})`);
  } else {
    console.warn('Email not configured — set RESEND_API_KEY or SMTP_* in environment variables');
  }
});
