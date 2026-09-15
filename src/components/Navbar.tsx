import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Layers,
  MessageSquare,
  Mail,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const links = [
  { label: 'Home', to: '#home', icon: Home },
  { label: 'About', to: '#about', icon: User },
  { label: 'Services', to: '#services', icon: Layers },
  { label: 'Projects', to: '#projects', icon: Briefcase },
  { label: 'Testimonials', to: '#testimonials', icon: MessageSquare },
  { label: 'Contact', to: '#contact', icon: Mail },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect current active section for highlight
      const sections = links.map(l => l.to.replace('#', ''));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
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
                style={{
                  fontSize: '0.88rem',
                  fontWeight: activeSection === l.to ? 700 : 500,
                  color: activeSection === l.to ? '#2563eb' : '#374151',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
                onMouseLeave={e => (e.currentTarget.style.color = activeSection === l.to ? '#2563eb' : '#374151')}
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
            style={{
              background: open ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
              border: '1px solid rgba(37, 99, 235, 0.14)',
              borderRadius: '10px',
              cursor: 'pointer',
              padding: '7px 8px',
              color: '#0f172a',
              display: 'none',
              transition: 'background 0.18s',
            }}
          >
            {open ? <X size={22} color="#2563eb" /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── MOBILE SIDEBAR DRAWER (Designed using Reference Image) ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Blurred Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(5, 9, 20, 0.65)',
                backdropFilter: 'blur(6px)',
                zIndex: 250,
              }}
            />

            {/* Premium Dark Sidebar Container */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(320px, 86vw)',
                zIndex: 260,
                background: '#0d111a',
                borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '-16px 0 50px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* Drawer Top Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '22px 20px 18px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                }}
              >
                <div>
                  <span style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.04em', color: '#ffffff' }}>
                    Kavi<span style={{ color: '#3b82f6' }}>Dev</span>
                  </span>
                  <p style={{ color: '#64748b', fontSize: '0.72rem', margin: '2px 0 0', fontWeight: 500 }}>
                    Freelance Web Developer
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    color: '#94a3b8',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links (Styled exactly like Reference Image: Pill Cards with Icon + Text + Right Arrow) */}
              <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px 16px' }}>
                {links.map((link, i) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.to;

                  return (
                    <motion.a
                      key={link.to}
                      href={link.to}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        borderRadius: '14px',
                        textDecoration: 'none',
                        background: isActive
                          ? 'rgba(37, 99, 235, 0.14)'
                          : 'rgba(255, 255, 255, 0.025)',
                        border: isActive
                          ? '1.5px solid #2563eb'
                          : '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: isActive ? '0 0 20px rgba(37, 99, 235, 0.25)' : 'none',
                        transition: 'background 0.16s, border-color 0.16s, box-shadow 0.16s',
                      }}
                    >
                      {/* Left: Icon + Label */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div
                          style={{
                            color: isActive ? '#60a5fa' : '#94a3b8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon size={19} />
                        </div>
                        <span
                          style={{
                            fontSize: '0.96rem',
                            fontWeight: isActive ? 800 : 600,
                            color: isActive ? '#ffffff' : '#e2e8f0',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {link.label}
                        </span>
                      </div>

                      {/* Right: Golden/Blue Chevron Arrow like Reference */}
                      <ChevronRight
                        size={17}
                        color={isActive ? '#60a5fa' : 'rgba(255, 255, 255, 0.25)'}
                      />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer Bottom Project Teaser Card (Like Reference Image's "Need a 3D Print?" Card) */}
              <div style={{ padding: '0 16px 20px' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '16px',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Sparkles size={13} color="#60a5fa" />
                    <p style={{ fontWeight: 800, fontSize: '0.88rem', color: '#ffffff', margin: 0 }}>
                      Need a Website?
                    </p>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.78rem', margin: '0 0 12px', lineHeight: 1.5 }}>
                    Let's bring your idea to life with modern code and design.
                  </p>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#60a5fa',
                      textDecoration: 'none',
                    }}
                  >
                    Get in touch <ArrowRight size={13} />
                  </a>
                </div>

                {/* Primary CTA Full-Width Button */}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '13px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(37, 99, 235, 0.35)',
                  }}
                >
                  Start a Project <ArrowRight size={15} />
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
