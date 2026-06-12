import nodemailer from 'nodemailer';

function trimEnv(key) {
  return process.env[key]?.trim() || '';
}

function buildEmailContent({ name, email, subject, message }) {
  const text = [
    'New message from your portfolio contact form',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
    '',
    '---',
    'Reply directly to this email to respond to the sender.',
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; margin-bottom: 8px;">New Portfolio Contact</h2>
      <p style="color: #64748b; margin-top: 0;">Someone submitted your contact form.</p>
      <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; width: 80px;">Name</td>
          <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Email</td>
          <td style="padding: 8px 0;">
            <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Subject</td>
          <td style="padding: 8px 0;">${escapeHtml(subject)}</td>
        </tr>
      </table>
      <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px;">
        <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; text-transform: uppercase;">Message</p>
        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
      </div>
      <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
        Reply to this email to respond directly to ${escapeHtml(name)}.
      </p>
    </div>
  `;

  return { text, html };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isResendConfigured() {
  return Boolean(trimEnv('RESEND_API_KEY') && trimEnv('RECIPIENT_EMAIL'));
}

function isSmtpConfigured() {
  return Boolean(
    trimEnv('SMTP_HOST') &&
    trimEnv('SMTP_USER') &&
    trimEnv('SMTP_PASS') &&
    trimEnv('RECIPIENT_EMAIL')
  );
}

function isEmailConfigured() {
  return isResendConfigured() || isSmtpConfigured();
}

function getEmailProvider() {
  if (isResendConfigured()) return 'resend';
  if (isSmtpConfigured()) return 'smtp';
  return 'none';
}

async function sendViaResend({ name, email, subject, message }) {
  const { text, html } = buildEmailContent({ name, email, subject, message });
  const from = trimEnv('RESEND_FROM') || 'Portfolio Contact <onboarding@resend.dev>';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${trimEnv('RESEND_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [trimEnv('RECIPIENT_EMAIL')],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text,
      html,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = data?.message || data?.error || response.statusText;
    throw new Error(`Resend error: ${detail}`);
  }
}

function createSmtpTransporter() {
  const user = trimEnv('SMTP_USER');
  const pass = trimEnv('SMTP_PASS').replace(/\s/g, '');
  const host = trimEnv('SMTP_HOST');

  if (host.includes('gmail.com')) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: trimEnv('SMTP_SECURE') === 'true',
    auth: { user, pass },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
    tls: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true,
    },
  });
}

async function sendViaSmtp({ name, email, subject, message }) {
  const { text, html } = buildEmailContent({ name, email, subject, message });
  const recipient = trimEnv('RECIPIENT_EMAIL');
  const fromName = trimEnv('EMAIL_FROM_NAME') || 'Portfolio Contact';
  const fromAddress = trimEnv('SMTP_USER');
  const transporter = createSmtpTransporter();

  await transporter.verify();
  console.log('SMTP verified successfully');

  await transporter.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to: recipient,
    replyTo: `"${name}" <${email}>`,
    subject: `[Portfolio] ${subject}`,
    text,
    html,
  });
}

export async function sendContactEmail(payload) {
  if (!isEmailConfigured()) {
    throw new Error('Email service is not configured on the server.');
  }

  if (isResendConfigured()) {
    await sendViaResend(payload);
    return;
  }

  await sendViaSmtp(payload);
}

export { isEmailConfigured, getEmailProvider };
