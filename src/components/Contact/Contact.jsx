import React, { useState } from 'react';
import { Send, CheckCircle, CheckCircle2, AlertCircle, Github, Linkedin, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Floating Toast Notification State
  const [toast, setToast] = useState({ show: false, type: 'info', message: '' });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const nameTrimmed = formData.name.trim();
    const emailTrimmed = formData.email.trim();
    const subjectTrimmed = formData.subject.trim();
    const messageTrimmed = formData.message.trim();

    // Name Validation
    if (!nameTrimmed) {
      showToast('error', 'Please enter your name.');
      return false;
    }
    if (nameTrimmed.length < 2) {
      showToast('error', 'Name must be at least 2 characters long.');
      return false;
    }
    if (nameTrimmed.length > 50) {
      showToast('error', 'Name cannot exceed 50 characters.');
      return false;
    }
    const nameRegex = /^[a-zA-Z\s\.\-']+$/;
    if (!nameRegex.test(nameTrimmed)) {
      showToast('error', 'Name should only contain letters and spaces.');
      return false;
    }

    // Email Validation
    if (!emailTrimmed) {
      showToast('error', 'Please enter your email address.');
      return false;
    }
    if (emailTrimmed.length > 80) {
      showToast('error', 'Email address is too long (max 80 characters).');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      showToast('error', 'Please enter a valid email address (e.g. name@domain.com).');
      return false;
    }

    // Subject Validation
    if (!subjectTrimmed) {
      showToast('error', 'Please enter a subject.');
      return false;
    }
    if (subjectTrimmed.length < 3) {
      showToast('error', 'Subject must be at least 3 characters.');
      return false;
    }

    // Message Validation
    if (!messageTrimmed) {
      showToast('error', 'Please enter your message.');
      return false;
    }
    if (messageTrimmed.length < 10) {
      showToast('error', 'Message must be at least 10 characters long.');
      return false;
    }
    if (messageTrimmed.length > 1000) {
      showToast('error', 'Message cannot exceed 1000 characters.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "a2c4bf7b-fd16-442b-997e-007f0a3f6604",
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setSubmitted(true);
        showToast('success', 'Message sent successfully!');

        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ecebdc', '#a8a663', '#b5d27a']
          });
        } catch (err) {
          console.log(err);
        }

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setIsSubmitting(false);
        showToast('error', result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      showToast('error', 'Network error. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" className="section">
      {toast.show && (
        <div className="toast" role="status">
          {toast.type === 'success' ? (
            <CheckCircle2 size={18} color="var(--success)" style={{ flexShrink: 0 }} />
          ) : (
            <AlertCircle size={18} color="var(--danger)" style={{ flexShrink: 0 }} />
          )}
          <span style={{ flexGrow: 1, lineHeight: 1.4 }}>{toast.message}</span>
          <button onClick={() => setToast((prev) => ({ ...prev, show: false }))} aria-label="Dismiss">
            <X size={16} />
          </button>
        </div>
      )}

      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <div className="eyebrow"><span>06</span>Contact</div>
              <h2 className="section-title">
                Let's build something <span className="serif">together.</span>
              </h2>
              <p className="section-subtitle">
                Open to full-time remote or hybrid roles, contract projects and startups building with the MERN stack.
              </p>
            </div>

            <div className="contact-list">
              <a href="mailto:raunakkhanam0207@gmail.com" className="contact-item">
                <span className="ci-label">Email</span>
                <span className="ci-value">raunakkhanam0207@gmail.com</span>
              </a>
              <div className="contact-item">
                <span className="ci-label">Location</span>
                <span className="ci-value">India · Remote</span>
              </div>
              <div className="contact-item">
                <span className="ci-label">Availability</span>
                <span className="ci-value">Immediate / 1 month notice</span>
              </div>
            </div>

            <div className="socials">
              <a href="https://github.com/rounakkhanam06" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                <Github size={15} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rounak-khanam-20ab58284" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="card reveal">
            {submitted ? (
              <div className="form-success">
                <CheckCircle size={40} strokeWidth={1.5} />
                <h3 style={{ fontSize: '1.35rem' }}>Message sent</h3>
                <p>Thanks for reaching out — I'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-ghost">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form" noValidate>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Name <span>{formData.name.length}/50</span></label>
                    <input id="name" className="input" type="text" name="name" maxLength={50} value={formData.name} onChange={handleChange} placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email <span>{formData.email.length}/80</span></label>
                    <input id="email" className="input" type="email" name="email" maxLength={80} value={formData.email} onChange={handleChange} placeholder="you@company.com" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="subject">Subject <span>{formData.subject.length}/100</span></label>
                  <input id="subject" className="input" type="text" name="subject" maxLength={100} value={formData.subject} onChange={handleChange} placeholder="Project inquiry / Job opportunity" />
                </div>

                <div className="field">
                  <label htmlFor="message">Message <span>{formData.message.length}/1000</span></label>
                  <textarea id="message" className="input" name="message" rows="5" maxLength={1000} value={formData.message} onChange={handleChange} placeholder="Tell me about your project, timeline or role..." />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', marginTop: '0.25rem' }}>
                  {isSubmitting ? 'Sending…' : (<>Send message <Send size={15} /></>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
