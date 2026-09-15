import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const info = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kaviyarasup.dev@gmail.com',
    href: 'mailto:kaviyarasup.dev@gmail.com',
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+91 8870153108',
    href: 'tel:+918870153108',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
    color: '#0891b2',
    bg: '#ecfeff',
  },
];

const field: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '10px',
  border: '1.5px solid rgba(37,99,235,0.14)',
  background: '#fafbff',
  color: '#0f172a',
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [focus, setFocus] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const active = (name: string): React.CSSProperties => ({
    ...field,
    borderColor: focus === name ? '#2563eb' : 'rgba(37,99,235,0.14)',
    boxShadow: focus === name ? '0 0 0 3px rgba(37,99,235,0.09)' : 'none',
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Send directly to kaviyarasup.dev@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch('https://formsubmit.co/ajax/kaviyarasup.dev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: `New Portfolio Message from ${form.name}: ${form.subject || 'Inquiry'}`,
          subject: form.subject,
          message: form.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('done');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Failed to deliver message. Please try again or email directly.');
      }
    } catch (err: any) {
      console.error('Contact Form Submission Error:', err);
      // If network fails, offer instant direct mailto fallback or retry
      setStatus('error');
      setErrorMessage(err?.message || 'Something went wrong. You can also email me directly at kaviyarasup.dev@gmail.com');
    }
  };

  return (
    <section id="contact" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 60px' }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's Work <span className="grad-text">Together</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75 }}>
            Have a project in mind? Let's discuss and build something amazing.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {info.map(({ icon: Icon, label, value, href, color, bg }, i) => {
                const content = (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, delay: i * 0.08 }}
                    whileHover={{ x: 5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px 18px',
                      borderRadius: '14px',
                      background: '#f9fafb',
                      border: '1px solid rgba(37,99,235,0.08)',
                      transition: 'box-shadow 0.2s, background 0.2s',
                      cursor: href ? 'pointer' : 'default',
                      textDecoration: 'none',
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        background: bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '0.73rem',
                          color: '#9ca3af',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          marginBottom: '2px',
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontWeight: 700,
                          color: '#0f172a',
                          fontSize: '0.94rem',
                          wordBreak: 'break-all',
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  </motion.div>
                );

                return href ? (
                  <a
                    key={i}
                    href={href}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            {/* Location & Availability Note */}
            <div
              style={{
                borderRadius: '16px',
                height: '180px',
                background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
                border: '1px solid rgba(37,99,235,0.10)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#2563eb',
              }}
            >
              <MapPin size={28} />
              <p style={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}>Tamil Nadu, India</p>
              <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Open to freelance projects & remote work worldwide</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            style={{
              background: '#fff',
              border: '1px solid rgba(37,99,235,0.10)',
              borderRadius: '20px',
              boxShadow: '0 8px 36px rgba(37,99,235,0.08)',
              padding: 'clamp(24px, 5vw, 40px)',
            }}
          >
            {status === 'done' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <CheckCircle size={52} color="#22c55e" style={{ margin: '0 auto 18px' }} />
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '8px', color: '#0f172a' }}>
                  Message Sent Directly to My Email!
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.92rem', maxWidth: '380px', margin: '0 auto 8px', lineHeight: 1.6 }}>
                  Your message has been sent to <strong>kaviyarasup.dev@gmail.com</strong>. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline"
                  style={{ marginTop: '24px', cursor: 'pointer' }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: '#fef2f2',
                      border: '1px solid #fecaca',
                      color: '#b91c1c',
                      fontSize: '0.85rem',
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <p style={{ margin: 0, lineHeight: 1.5 }}>
                      {errorMessage}{' '}
                      <a
                        href={`mailto:kaviyarasup.dev@gmail.com?subject=${encodeURIComponent(form.subject || 'Project Inquiry')}&body=${encodeURIComponent(form.message)}`}
                        style={{ color: '#2563eb', fontWeight: 700, textDecoration: 'underline' }}
                      >
                        Click here to send via email app.
                      </a>
                    </p>
                  </motion.div>
                )}

                <div className="form-row" style={{ display: 'grid', gap: '14px' }}>
                  {[
                    { id: 'name', type: 'text', label: 'Your Name', placeholder: 'John Doe' },
                    { id: 'email', type: 'email', label: 'Email Address', placeholder: 'john@example.com' },
                  ].map(({ id, type, label, placeholder }) => (
                    <div key={id}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: '6px',
                        }}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={(form as any)[id]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        style={active(id)}
                        onFocus={() => setFocus(id)}
                        onBlur={() => setFocus('')}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: '6px',
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Hiring"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={active('subject')}
                    onFocus={() => setFocus('subject')}
                    onBlur={() => setFocus('')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: '6px',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project goals, timeline, and requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...active('message'), resize: 'none' }}
                    onFocus={() => setFocus('message')}
                    onBlur={() => setFocus('')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{
                    justifyContent: 'center',
                    padding: '14px',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    border: 'none',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'loading' ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          border: '2.5px solid rgba(255,255,255,0.35)',
                          borderTopColor: '#fff',
                          animation: 'spin 0.8s linear infinite',
                        }}
                      />
                      <span>Sending to kaviyarasup.dev@gmail.com...</span>
                    </div>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.25fr; gap: 48px; align-items: start; }
        .form-row { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 32px; } }
        @media (max-width: 480px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};
