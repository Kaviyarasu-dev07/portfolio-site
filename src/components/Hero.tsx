import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, CheckCircle2, Terminal } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  // Parallax on mouse move
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Smooth mouse damping
  const smoothX = useSpring(mousePos.x, { stiffness: 45, damping: 22 });
  const smoothY = useSpring(mousePos.y, { stiffness: 45, damping: 22 });

  // Scroll parallax
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 700], [0, 80]);
  const textY = useTransform(scrollY, [0, 700], [0, 40]);

  // 3D subtle transforms for portrait and floating widgets
  const rotateY = useTransform(smoothX, [-1, 1], [-5, 5]);
  const rotateX = useTransform(smoothY, [-1, 1], [4, -4]);
  const cardTranslateX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const cardTranslateY = useTransform(smoothY, [-1, 1], [-9, 9]);

  // Floating tags opposite motion for depth separation
  const tag1X = useTransform(smoothX, [-1, 1], [14, -14]);
  const tag1Y = useTransform(smoothY, [-1, 1], [10, -10]);
  const tag2X = useTransform(smoothX, [-1, 1], [-18, 18]);
  const tag2Y = useTransform(smoothY, [-1, 1], [14, -14]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="hero-light-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#fafbff',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '86px',
        perspective: '1200px',
      }}
    >
      {/* ── PREMIUM LIGHT AMBIENT BACKGROUND GRADIENTS ── */}
      {/* Soft Blue Top-Right Aura */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '65vw',
          maxWidth: '750px',
          height: '65vw',
          maxHeight: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.11) 0%, rgba(124,58,237,0.06) 50%, transparent 72%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Subtle Violet Bottom-Left Atmosphere */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '50vw',
          maxWidth: '600px',
          height: '50vw',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147,197,253,0.16) 0%, rgba(196,181,253,0.10) 50%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Elegant Dot Matrix Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(37, 99, 235, 0.06) 1.2px, transparent 1.2px)',
          backgroundSize: '36px 36px',
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── TWO-COLUMN BALANCED HERO CONTENT ── */}
      <div
        className="container hero-container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: '16px',
          paddingBottom: '44px',
        }}
      >
        <div className="hero-grid-2col">

          {/* ── LEFT COLUMN: Typography & CTAs ── */}
          <motion.div
            className="hero-left-col"
            style={{ y: textY }}
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ marginBottom: '20px' }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '6px 15px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.88)',
                  border: '1px solid rgba(37, 99, 235, 0.18)',
                  boxShadow: '0 2px 14px rgba(37, 99, 235, 0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Sparkles size={13} color="#2563eb" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#2563eb',
                  }}
                >
                  FREELANCE WEB DEVELOPER
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="hero-heading"
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.65rem)',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                marginBottom: '20px',
              }}
            >
              I Build Digital Experiences
              <br className="desktop-break" />
              That{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 50%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Grow Your Business.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
              className="hero-subtext"
              style={{
                fontSize: 'clamp(0.98rem, 1.7vw, 1.1rem)',
                color: '#475569',
                lineHeight: 1.78,
                maxWidth: '520px',
                marginBottom: '36px',
              }}
            >
              I create modern, responsive, and high-performing websites that help businesses build their online presence and convert visitors into customers.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="hero-action-buttons"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '46px',
              }}
            >
              <a
                href="#contact"
                className="btn-primary-action"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 30px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.96rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 26px rgba(37, 99, 235, 0.32)',
                  transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 99, 235, 0.44)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 26px rgba(37, 99, 235, 0.32)';
                }}
              >
                Let's Work Together <ArrowRight size={17} />
              </a>

              <a
                href="#projects"
                className="btn-secondary-action"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1.5px solid rgba(37, 99, 235, 0.18)',
                  color: '#1e293b',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 2px 10px rgba(37, 99, 235, 0.04)',
                  transition: 'background 0.18s, border-color 0.18s, transform 0.18s, box-shadow 0.18s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.38)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.10)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
                  e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.18)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(37, 99, 235, 0.04)';
                }}
              >
                View My Projects
              </a>
            </motion.div>

            {/* Verified Statistics Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42, ease: 'easeOut' }}
              className="hero-metrics-row"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(20px, 3.8vw, 42px)',
                paddingTop: '26px',
                borderTop: '1px solid rgba(37, 99, 235, 0.12)',
              }}
            >
              {[
                { val: '20+', label: 'Projects Delivered' },
                { val: '15+', label: 'Happy Clients' },
                { val: '100%', label: 'Satisfaction Rate' },
              ].map((st, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <p
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                      fontWeight: 900,
                      color: '#2563eb',
                      lineHeight: 1.1,
                      marginBottom: '3px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {st.val}
                  </p>
                  <p
                    style={{
                      fontSize: '0.76rem',
                      color: '#64748b',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {st.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Integrated 3D Light Portrait Composition ── */}
          <motion.div
            className="hero-right-col"
            style={{ y: portraitY }}
          >
            {/* 3D Tilting Stage on Desktop */}
            <motion.div
              className="portrait-card-stage"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5.5,
                ease: 'easeInOut',
              }}
              style={{
                rotateX: isDesktop ? rotateX : 0,
                rotateY: isDesktop ? rotateY : 0,
                x: isDesktop ? cardTranslateX : 0,
                y: isDesktop ? cardTranslateY : 0,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.14s ease-out',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '440px',
              }}
            >
              {/* Soft Light Frame Background Glass Container */}
              <div
                className="portrait-glass-wrapper"
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1.15',
                  maxHeight: '520px',
                  borderRadius: '28px',
                  background: 'linear-gradient(155deg, rgba(255,255,255,0.92) 0%, rgba(240,245,255,0.85) 60%, rgba(235,242,255,0.7) 100%)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow:
                    '0 24px 60px rgba(37,99,235,0.12), 0 8px 24px rgba(124,58,237,0.06), inset 0 1px 0 rgba(255,255,255,1)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* Radial Lighting Accent inside frame behind head */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8%',
                    left: '12%',
                    right: '12%',
                    height: '65%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(147,197,253,0.38) 0%, rgba(196,181,253,0.22) 50%, transparent 75%)',
                    filter: 'blur(45px)',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />

                {/* Original Photo - Sharp, Proportional, 100% Preserved Features */}
                <img
                  src="/image.png"
                  alt="Kaviyarasu P - Freelance Web Developer"
                  className="portrait-photo-img"
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    filter: 'drop-shadow(0 14px 34px rgba(37,99,235,0.18))',
                    userSelect: 'none',
                    display: 'block',
                    transform: 'translateZ(15px)',
                  }}
                />

                {/* Soft Bottom Gradient to integrate smoothly inside card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '24%',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 60%, transparent 100%)',
                    pointerEvents: 'none',
                    zIndex: 3,
                  }}
                />
              </div>

              {/* ── FLOATING UI / CODE-INSPIRED WIDGETS (3D Depth) ── */}
              {/* Floating Widget 1: Available Status (Top Right) */}
              <motion.div
                className="floating-widget widget-status"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-18px',
                  x: isDesktop ? tag1X : 0,
                  y: isDesktop ? tag1Y : 0,
                  zIndex: 20,
                  background: 'rgba(255, 255, 255, 0.94)',
                  border: '1px solid rgba(37, 99, 235, 0.16)',
                  borderRadius: '16px',
                  padding: '10px 16px',
                  boxShadow: '0 12px 30px rgba(37,99,235,0.12)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  transform: 'translateZ(30px)',
                }}
              >
                <span
                  style={{
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0, lineHeight: 1.1 }}>
                    Status
                  </p>
                  <p style={{ fontSize: '0.84rem', color: '#0f172a', fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
                    Available for Work
                  </p>
                </div>
              </motion.div>

              {/* Floating Widget 2: Code / Tech Stack Snippet (Bottom Left) */}
              <motion.div
                className="floating-widget widget-code"
                style={{
                  position: 'absolute',
                  bottom: '22px',
                  left: '-24px',
                  x: isDesktop ? tag2X : 0,
                  y: isDesktop ? tag2Y : 0,
                  zIndex: 20,
                  background: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid rgba(124, 58, 237, 0.18)',
                  borderRadius: '16px',
                  padding: '11px 18px',
                  boxShadow: '0 14px 34px rgba(124,58,237,0.12)',
                  backdropFilter: 'blur(14px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transform: 'translateZ(35px)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
                    border: '1px solid rgba(37,99,235,0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2563eb',
                    flexShrink: 0,
                  }}
                >
                  <Terminal size={17} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#7c3aed', letterSpacing: '0.04em' }}>
                      Clean Code
                    </span>
                    <CheckCircle2 size={12} color="#10b981" />
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#1e293b', fontWeight: 700, margin: 0 }}>
                    Modern React & Three.js
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── REFINED FLOATING SCROLL INDICATOR ── */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: '#94a3b8',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <span>Scroll</span>
        <ChevronDown size={14} strokeWidth={2.5} />
      </motion.div>

      {/* ── RESPONSIVE ADAPTATIONS (Desktop, Laptop, Tablet, Mobile) ── */}
      <style>{`
        .hero-grid-2col {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 48px;
          min-height: calc(100vh - 130px);
        }

        .hero-left-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 10;
        }

        .hero-right-col {
          display: flex;
          align-items: center;
          justifyContent: center;
          position: relative;
          z-index: 5;
        }

        /* Laptop (1024px - 1280px) */
        @media (max-width: 1280px) and (min-width: 1024px) {
          .hero-grid-2col {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 36px;
          }
          .portrait-card-stage {
            max-width: 390px !important;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .hero-light-section {
            padding-top: 104px;
            padding-bottom: 60px;
          }
          .hero-grid-2col {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            min-height: unset;
          }
          .hero-heading {
            font-size: 2.35rem !important;
          }
          .desktop-break {
            display: none !important;
          }
          .portrait-card-stage {
            max-width: 330px !important;
          }
          .widget-status {
            right: -8px !important;
          }
          .widget-code {
            left: -10px !important;
          }
        }

        /* Mobile (< 768px) */
        @media (max-width: 767px) {
          .hero-light-section {
            min-height: 100svh;
            padding-top: 86px;
            padding-bottom: 54px;
            align-items: flex-start;
          }
          .hero-grid-2col {
            display: flex;
            flex-direction: column;
            gap: 34px;
            min-height: unset;
          }
          .hero-left-col {
            align-items: flex-start;
            text-align: left;
          }
          .hero-heading {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          .desktop-break {
            display: none !important;
          }
          .hero-subtext {
            font-size: 0.96rem !important;
            margin-bottom: 28px !important;
          }
          .hero-action-buttons {
            gap: 12px !important;
            margin-bottom: 36px !important;
          }
          .portrait-card-stage {
            max-width: 300px !important;
            margin: 0 auto;
          }
          .widget-status {
            top: -8px !important;
            right: -10px !important;
            padding: 8px 12px !important;
          }
          .widget-code {
            bottom: 12px !important;
            left: -10px !important;
            padding: 8px 14px !important;
          }
        }

        /* Small Mobile (< 390px) */
        @media (max-width: 390px) {
          .hero-heading {
            font-size: 1.75rem !important;
          }
          .btn-primary-action, .btn-secondary-action {
            width: 100%;
            justify-content: center;
          }
          .portrait-card-stage {
            max-width: 260px !important;
          }
        }
      `}</style>
    </section>
  );
};
