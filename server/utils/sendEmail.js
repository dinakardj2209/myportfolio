import nodemailer from 'nodemailer';

function isEmailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.RECIPIENT_EMAIL
  );
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendContactEmail({ name, email, subject, message }) {
  if (!isEmailConfigured()) {
    throw new Error('Email service is not configured on the server.');
  }

  const recipient = process.env.RECIPIENT_EMAIL;
  const fromName = process.env.EMAIL_FROM_NAME || 'Portfolio Contact';
  const fromAddress = process.env.SMTP_USER;

  const transporter = createTransporter();

  const mailOptions = {
    from: `"${fromName}" <${fromAddress}>`,
    to: recipient,
    replyTo: `"${name}" <${email}>`,
    subject: `[Portfolio] ${subject}`,
    text: [
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
    ].join('\n'),
    html: `
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
    `,
  };

  await transporter.sendMail(mailOptions);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export { isEmailConfigured };
