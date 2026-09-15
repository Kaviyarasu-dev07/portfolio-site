import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTA = () => (
  <section style={{ padding: '80px 0', background: '#fafbff' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          borderRadius: '28px',
          overflow: 'hidden',
          padding: 'clamp(52px, 8vw, 80px) clamp(24px, 5vw, 72px)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 40%, #4338ca 75%, #7c3aed 100%)',
          boxShadow: '0 20px 70px rgba(37,99,235,0.28)',
        }}
      >
        {/* Subtle inner glow overlays */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(ellipse 60% 60% at 20% 30%, rgba(255,255,255,0.10) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 80% 70%, rgba(255,255,255,0.07) 0%, transparent 60%)' }} />

        {/* Floating shapes — minimal, purposeful */}
        {[
          { w: 48, h: 48, t: '12%', l: '4%', r: 6, delay: 0 },
          { w: 32, h: 32, t: '65%', r: '6%', r2: -5, delay: 1 },
          { w: 22, h: 22, b: '18%', l: '12%', r3: 8, delay: 0.5 },
        ].map((s, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 + i, delay: s.delay }}
            style={{
              position: 'absolute',
              width: s.w, height: s.h,
              border: '1.5px solid rgba(255,255,255,0.18)',
              borderRadius: '8px',
              ...(s.t ? { top: s.t } : {}), ...(s.b ? { bottom: s.b } : {}),
              ...(s.l ? { left: s.l } : {}), ...(s.r ? { right: s.r + '%' } : {}),
            } as React.CSSProperties}
          />
        ))}

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.22)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '18px' }}>
            AVAILABLE FOR PROJECTS
          </span>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: '18px' }}>
            Let's Build Something<br />Truly Great Together.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(0.9rem, 2vw, 1.08rem)', marginBottom: '40px', maxWidth: '460px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            Ready to turn your vision into a stunning digital reality? Let's talk.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 40px', borderRadius: '12px', background: '#fff', color: '#1d4ed8', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.16)', transition: 'box-shadow 0.2s' }}
          >
            Hire Me Now <ArrowRight size={18} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);
