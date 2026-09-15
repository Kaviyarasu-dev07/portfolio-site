import { motion } from 'framer-motion';
import { Globe, ShoppingCart, RefreshCw, Smartphone, ArrowUpRight } from 'lucide-react';

const services = [
  { icon: Globe,        title: 'Website Development',    desc: 'Custom, performant websites built from scratch with modern frameworks and clean code.',     color: '#2563eb', bg: '#eff6ff' },
  { icon: ShoppingCart, title: 'E-Commerce Solutions',   desc: 'Fully functional online stores with product management, cart, and payment integration.',   color: '#7c3aed', bg: '#f5f3ff' },
  { icon: RefreshCw,    title: 'Website Redesign',       desc: 'Modernising outdated websites into fast, professional, conversion-focused experiences.',    color: '#0891b2', bg: '#ecfeff' },
  { icon: Smartphone,   title: 'Responsive Design',      desc: 'Pixel-perfect layouts that look and work beautifully on every device and screen size.',     color: '#059669', bg: '#ecfdf5' },
];

export const Services = () => (
  <section id="services" className="section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 64px' }}
      >
        <span className="section-label">Services</span>
        <h2 className="section-title">What I Can <span className="grad-text">Do For You</span></h2>
        <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75 }}>
          End-to-end web solutions designed to help your business stand out and grow.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="card"
            style={{ padding: '30px 26px', cursor: 'default', position: 'relative', overflow: 'hidden' }}
          >
            {/* Icon */}
            <div style={{ width: 52, height: 52, borderRadius: '14px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, marginBottom: '20px' }}>
              <s.icon size={24} />
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>{s.title}</h3>
            <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '22px' }}>{s.desc}</p>

            <a
              href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', fontWeight: 700, color: s.color, textDecoration: 'none', transition: 'gap 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.gap = '9px')}
              onMouseLeave={e => (e.currentTarget.style.gap = '5px')}
            >
              Get Started <ArrowUpRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>

    <style>{`
      .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
      @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      @media (max-width: 540px)  { .services-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);
