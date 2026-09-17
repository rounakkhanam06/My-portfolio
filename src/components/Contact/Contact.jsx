import React, { useState } from 'react';
import { Mail, Send, MapPin, MessageSquare, CheckCircle, CheckCircle2, AlertCircle, Sparkles, Github, Linkedin, X } from 'lucide-react';
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
            colors: ['#00f5d4', '#7b2cbf', '#f72585']
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
    <section id="contact" className="section" style={{ position: 'relative' }}>

      {/* Floating Toast Notification */}
      {toast.show && (
        <div
          style={{
            position: 'fixed',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.85rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(15, 19, 31, 0.95)',
            backdropFilter: 'blur(16px)',
            border: `1px solid ${
              toast.type === 'success'
                ? 'var(--neon-cyan)'
                : 'var(--neon-pink)'
            }`,
            boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${
              toast.type === 'success'
                ? 'rgba(0, 245, 212, 0.3)'
                : 'rgba(247, 37, 133, 0.3)'
            }`,
            color: 'var(--text-main)',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-heading)',
            maxWidth: '380px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 size={20} color="var(--neon-cyan)" style={{ flexShrink: 0 }} />
          ) : (
            <AlertCircle size={20} color="var(--neon-pink)" style={{ flexShrink: 0 }} />
          )}
          <span style={{ flexGrow: 1, lineHeight: 1.4 }}>{toast.message}</span>
          <button
            onClick={() => setToast((prev) => ({ ...prev, show: false }))}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-dim)',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={16} />
          </button>
        </div>
      )}

      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-title">
            Have a Project in Mind? <span className="gradient-text-mern">Get in Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to discuss a full-stack engineering role, an architectural consultation, or freelance collaboration, my inbox is open.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>

          {/* Contact Details & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                Let's build something extraordinary together
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                I am currently open to full-time remote/hybrid roles, high-impact contract projects, and exciting tech startups looking to build robust MERN architectures.
              </p>

              {/* Direct Info List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a
                  href="mailto:raunakkhanam0207@gmail.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0, 245, 212, 0.1)', border: '1px solid rgba(0, 245, 212, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-cyan)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>EMAIL DIRECT</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>raunakkhanam0207@gmail.com</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(157, 78, 221, 0.1)', border: '1px solid rgba(157, 78, 221, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-purple)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>India (Available Globally / Remote)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(247, 37, 133, 0.1)', border: '1px solid rgba(247, 37, 133, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-pink)' }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>AVAILABILITY</div>
                    <div style={{ fontWeight: 600, color: 'var(--neon-cyan)' }}>Immediate / 1 month notice</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                  NETWORK PROFILES
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href="https://github.com/rounakkhanam06"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rounak-khanam-20ab58284"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(0, 245, 212, 0.15)',
                    border: '2px solid var(--neon-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'var(--neon-cyan)'
                  }}
                >
                  <CheckCircle size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Message Dispatched!</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                  Thank you for reaching out. I have received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                {/* Name Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Your Name
                    </label>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      {formData.name.length}/50
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    maxLength={50}
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Raunak Khanam"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Email Address
                    </label>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      {formData.email.length}/80
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    maxLength={80}
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="raunak@example.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Subject
                    </label>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      {formData.subject.length}/100
                    </span>
                  </div>
                  <input
                    type="text"
                    name="subject"
                    maxLength={100}
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Message
                    </label>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      {formData.message.length}/1000
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows="5"
                    maxLength={1000}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
