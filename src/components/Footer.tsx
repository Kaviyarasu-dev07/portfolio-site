import { motion } from 'framer-motion';
import { Code2, Briefcase, Camera, Play } from 'lucide-react';

const navLinks = ['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'];
const socials = [
  { icon: Code2,     href: '#', label: 'GitHub' },
  { icon: Briefcase, href: '#', label: 'LinkedIn' },
  { icon: Camera,    href: '#', label: 'Instagram' },
  { icon: Play,      href: '#', label: 'YouTube' },
];

export const Footer = () => (
  <footer style={{ background: '#0f172a', paddingTop: '60px', paddingBottom: '28px' }}>
    <div className="container">
      <div className="footer-grid" style={{ marginBottom: '48px' }}>
        {/* Brand */}
        <div>
          <a href="#home" style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.04em', color: '#fff', display: 'block', marginBottom: '14px' }}>
            Kavi<span style={{ color: '#3b82f6' }}>Dev</span>
          </a>
          <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.8, maxWidth: '260px' }}>
            Freelance web developer building modern, responsive, and high-performance digital experiences.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p style={{ color: '#9ca3af', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Navigation</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px' }}>
            {navLinks.map(n => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                style={{ color: '#6b7280', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
              >
                {n}
              </a>
            ))}
          </div>
        </div>

        {/* Socials + CTA */}
        <div>
          <p style={{ color: '#9ca3af', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Connect</p>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -3 }}
                style={{ width: 40, height: 40, borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', textDecoration: 'none', transition: 'background 0.2s, color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.18)'; e.currentTarget.style.color = '#60a5fa'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
          <a href="#contact" style={{ display: 'inline-block', padding: '10px 22px', borderRadius: '10px', background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}
          >
            Start a Project →
          </a>
        </div>
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <p style={{ color: '#4b5563', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} KaviDev — Kaviyarasu P. All rights reserved.
        </p>
        <p style={{ color: '#4b5563', fontSize: '0.82rem' }}>
          Built with React, Three.js & Framer Motion
        </p>
      </div>
    </div>

    <style>{`
      .footer-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; }
      @media (max-width: 800px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
      @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </footer>
);
