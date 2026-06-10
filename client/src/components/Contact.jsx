import { useState } from 'react';
import { HiOutlinePaperAirplane, HiOutlineMail } from 'react-icons/hi';
import { profile } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './Contact.css';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus({ type: 'success', message: 'Thank you! Your message has been received.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please try again or email directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Feedback & Queries"
      subtitle="Have a question, opportunity, or feedback? Send me a message — I'd love to hear from you."
    >
      <div className="contact-grid">
        <div className="contact-info card">
          <h3 className="contact-info__title">Let's Connect</h3>
          <p className="contact-info__desc">
            Whether you're a recruiter, collaborator, or fellow developer — feel free to reach out.
            I typically respond within 24–48 hours.
          </p>
          <a href={`mailto:${profile.email}`} className="contact-info__email">
            <HiOutlineMail />
            {profile.email}
          </a>
          <a href={profile.resumePath} download className="btn btn-outline contact-info__resume">
            View / Download Resume
          </a>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div className="contact-form__field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Job opportunity, collaboration, feedback..."
              required
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={5}
              required
            />
          </div>

          {status.message && (
            <div className={`contact-form__status contact-form__status--${status.type}`}>
              {status.message}
            </div>
          )}

          <button type="submit" className="btn btn-primary contact-form__submit" disabled={loading}>
            <HiOutlinePaperAirplane size={18} className="contact-form__submit-icon" aria-hidden="true" />
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
