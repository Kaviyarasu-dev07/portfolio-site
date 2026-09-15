import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Projects', to: '#projects' },
  { label: 'Testimonials', to: '#testimonials' },
  { label: 'Contact', to: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          background: scrolled ? 'rgba(250, 251, 255, 0.94)' : 'rgba(250, 251, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(37,99,235,0.08)' : '1px solid rgba(37,99,235,0.04)',
          boxShadow: scrolled ? '0 4px 24px rgba(37,99,235,0.06)' : 'none',
          transition: 'background 0.35s, box-shadow 0.35s, border-color 0.35s',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '66px' }}>
          {/* Logo */}
          <a href="#home" style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-0.04em', color: '#0f172a', lineHeight: 1 }}>
            Kavi<span style={{ color: '#2563eb' }}>Dev</span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-links">
            {links.map(l => (
              <a
                key={l.to}
                href={l.to}
                style={{ fontSize: '0.88rem', fontWeight: 500, color: '#374151', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
                onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#contact" className="btn-primary nav-cta" style={{ padding: '9px 22px', fontSize: '0.88rem' }}>
            Hire Me
          </a>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#1e293b', display: 'none' }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.25)', zIndex: 190, backdropFilter: 'blur(2px)' }}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: 'min(300px, 85vw)', zIndex: 210,
                background: 'rgba(250,251,255,0.98)', backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(37,99,235,0.12)',
                boxShadow: '-8px 0 40px rgba(37,99,235,0.10)',
                display: 'flex', flexDirection: 'column', padding: '0',
              }}
            >
              {/* Drawer header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(37,99,235,0.08)' }}>
                <span style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.04em', color: '#0f172a' }}>
                  Kavi<span style={{ color: '#2563eb' }}>Dev</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', padding: '4px' }}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer links */}
              <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px 0' }}>
                {links.map((l, i) => (
                  <motion.a
                    key={l.to}
                    href={l.to}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: 'block', padding: '13px 24px',
                      fontSize: '1rem', fontWeight: 500, color: '#374151',
                      borderBottom: '1px solid rgba(37,99,235,0.05)',
                      transition: 'color 0.15s, background 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.background = '#eff6ff'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#374151'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(37,99,235,0.08)' }}>
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) {
          .nav-links { display: none !important; }
          .nav-cta   { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </>
  );
};
