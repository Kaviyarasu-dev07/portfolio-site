import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson', role: 'Startup Founder', rating: 5, accent: '#2563eb',
    body: 'Working with Kaviyarasu was outstanding. He delivered a stunning, fast website that captured our brand perfectly and exceeded every expectation.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80' },
  { name: 'Michael Chen', role: 'E-commerce Director', rating: 5, accent: '#7c3aed',
    body: 'The interactive product showcase he built increased our conversion rate significantly. Technically excellent and always professional.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80' },
  { name: 'Emily Davis', role: 'Marketing Lead', rating: 5, accent: '#0891b2',
    body: 'Finding a reliable freelancer is hard — Kaviyarasu made it effortless. Clean code, pixel-perfect design, and delivered ahead of schedule.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80' },
];

export const Testimonials = () => (
  <section id="testimonials" className="section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 60px' }}
      >
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">What Clients <span className="grad-text">Say</span></h2>
        <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75 }}>
          Feedback from real people I've had the pleasure to work with.
        </p>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: i * 0.09 }}
            whileHover={{ y: -5 }}
            className="card"
            style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(t.rating)].map((_, si) => (
                <Star key={si} size={14} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
              ))}
            </div>

            {/* Quote */}
            <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.8, flex: 1 }}>
              "{t.body}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(37,99,235,0.07)' }}>
              <img src={t.img} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: `2.5px solid ${t.accent}` }} />
              <div>
                <p style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0f172a' }}>{t.name}</p>
                <p style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <style>{`
      .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
      @media (max-width: 900px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      @media (max-width: 560px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);
