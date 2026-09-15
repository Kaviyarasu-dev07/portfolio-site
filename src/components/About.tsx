import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Code2,
  Server,
  Palette,
  Smartphone,
  Sparkles,
  Layers,
  Database,
  Network,
  LayoutTemplate,
  MonitorCheck,
  Cpu,
} from 'lucide-react';

// Brand icon components rendered as precise SVGs with authentic brand marks
const ReactIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="0" cy="0" r="2.05" fill="#0ea5e9" />
    <g stroke="#0ea5e9" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TypeScriptIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, borderRadius: '2px' }}>
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path d="M4 8.5H12V10.5H9.2V19H6.8V10.5H4V8.5Z" fill="#ffffff" />
    <path d="M12.8 16.5C13.5 17.5 14.7 18 16 18C17.3 18 18.2 17.4 18.2 16.3C18.2 15.2 17.3 14.7 15.6 14.1C13.5 13.3 12.3 12.4 12.3 10.4C12.3 8.5 13.8 7.2 16.1 7.2C17.5 7.2 18.6 7.6 19.3 8.3L18.2 10.1C17.6 9.5 16.8 9.2 16 9.2C15 9.2 14.3 9.7 14.3 10.4C14.3 11.2 15 11.6 16.7 12.3C18.9 13.1 20.2 14 20.2 16.1C20.2 18.2 18.5 19.8 15.8 19.8C14.1 19.8 12.7 19.1 11.8 17.8L12.8 16.5Z" fill="#ffffff" />
  </svg>
);

const NextJsIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 180 180" fill="none" style={{ flexShrink: 0 }}>
    <mask id="mask0_next_about" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
      <circle cx="90" cy="90" r="90" fill="#000000" />
    </mask>
    <g mask="url(#mask0_next_about)">
      <circle cx="90" cy="90" r="90" fill="#0f172a" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.168 149.508 157.52Z" fill="url(#paint0_linear_next_about)" />
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next_about)" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_next_about" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_next_about" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const TailwindIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
  </svg>
);

const NodeIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2L2 7.8V19.2L12 25L22 19.2V7.8L12 2Z" fill="#339933" />
    <path d="M12 4.2L19.8 8.7V17.8L12 22.3L4.2 17.8V8.7L12 4.2Z" fill="#215732" />
    <path d="M12 7.2L16.8 10V15.5L12 18.3L7.2 15.5V10L12 7.2Z" fill="#68A063" />
  </svg>
);

const FigmaIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" fill="none" style={{ flexShrink: 0 }}>
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
  </svg>
);

// Organized skill categories with recognizable brand icons and consistent styling
const skillGroups = [
  {
    category: 'Frontend Development',
    categoryIcon: Code2,
    accent: '#2563eb',
    accentBg: 'rgba(37, 99, 235, 0.08)',
    border: 'rgba(37, 99, 235, 0.16)',
    skills: [
      { name: 'React', Icon: ReactIcon },
      { name: 'TypeScript', Icon: TypeScriptIcon },
      { name: 'Next.js', Icon: NextJsIcon },
      { name: 'Tailwind CSS', Icon: TailwindIcon },
    ],
  },
  {
    category: 'Backend Development',
    categoryIcon: Server,
    accent: '#7c3aed',
    accentBg: 'rgba(124, 58, 237, 0.08)',
    border: 'rgba(124, 58, 237, 0.16)',
    skills: [
      { name: 'Node.js', Icon: NodeIcon },
      { name: 'Express', Icon: () => <Cpu size={14} color="#7c3aed" /> },
      { name: 'REST APIs', Icon: () => <Network size={14} color="#7c3aed" /> },
      { name: 'Database Integration', Icon: () => <Database size={14} color="#7c3aed" /> },
    ],
  },
  {
    category: 'UI/UX Design',
    categoryIcon: Palette,
    accent: '#0891b2',
    accentBg: 'rgba(8, 145, 178, 0.08)',
    border: 'rgba(8, 145, 178, 0.16)',
    skills: [
      { name: 'Figma', Icon: FigmaIcon },
      { name: 'Design Systems', Icon: () => <Layers size={14} color="#0891b2" /> },
      { name: 'Interactive Prototypes', Icon: () => <LayoutTemplate size={14} color="#0891b2" /> },
    ],
  },
  {
    category: 'Responsive Web Design',
    categoryIcon: Smartphone,
    accent: '#059669',
    accentBg: 'rgba(5, 150, 105, 0.08)',
    border: 'rgba(5, 150, 105, 0.16)',
    skills: [
      { name: 'Mobile-First Design', Icon: () => <Smartphone size={14} color="#059669" /> },
      { name: 'Cross-Browser Compatibility', Icon: () => <MonitorCheck size={14} color="#059669" /> },
      { name: 'Fluid Layouts', Icon: () => <Sparkles size={14} color="#059669" /> },
    ],
  },
];

export const About = () => (
  <section
    id="about"
    className="about-section"
    style={{
      background: '#fafbff',
      padding: 'clamp(72px, 8vw, 110px) 0',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Subtle ambient light gradient blooms in background */}
    <div
      style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '680px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.035) 45%, transparent 70%)',
        filter: 'blur(75px)',
        pointerEvents: 'none',
      }}
    />

    <div className="container" style={{ position: 'relative', zIndex: 10 }}>
      {/* ── CENTERED HERO INTRODUCTION (Image-Free, Clean & Balanced) ── */}
      <div className="about-centered-container">

        {/* Section Label: ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              color: '#2563eb',
            }}
          >
            <Sparkles size={13} />
            <span
              style={{
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              ABOUT ME
            </span>
          </div>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="about-headline"
          style={{
            fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.18,
            letterSpacing: '-0.035em',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Passionate About{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 55%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            Digital Craftsmanship.
          </span>
        </motion.h2>

        {/* Exact Introduction Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
          className="about-intro-text"
          style={{
            color: '#334155',
            fontSize: 'clamp(1rem, 1.8vw, 1.12rem)',
            lineHeight: 1.82,
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto 46px',
            fontWeight: 500,
          }}
        >
          Hi, I'm Kaviyarasu, a freelance web developer who transforms ideas into modern, responsive, and high-performing websites. I combine thoughtful design, clean code, and practical problem-solving to create digital experiences that help businesses grow.
        </motion.p>

        {/* ── SKILLS PRESENTATION: 4 Clean, Compact Cards in Responsive Grid ── */}
        <div style={{ marginBottom: '44px' }}>
          <div className="about-skills-grid">
            {skillGroups.map((group, i) => {
              const CategoryIcon = group.categoryIcon;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(37,99,235,0.08)' }}
                  style={{
                    padding: '22px 22px',
                    borderRadius: '18px',
                    background: '#ffffff',
                    border: `1.5px solid ${group.border}`,
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                  }}
                >
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '10px',
                        background: group.accentBg,
                        color: group.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <CategoryIcon size={17} />
                    </div>
                    <h3
                      style={{
                        fontSize: '0.96rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        margin: 0,
                      }}
                    >
                      {group.category}
                    </h3>
                  </div>

                  {/* Technology Pills with Recognizable Brand Logos */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {group.skills.map(({ name, Icon }) => (
                      <div
                        key={name}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '5px 11px',
                          borderRadius: '8px',
                          background: '#f8faff',
                          border: '1px solid rgba(226, 232, 240, 0.95)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: '#1e293b',
                          transition: 'background 0.15s, border-color 0.15s',
                        }}
                      >
                        <Icon />
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── PROFESSIONAL DUAL CTAS: Download CV + Let's Work Together ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="about-cta-wrapper"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
          }}
        >
          <a
            href="#contact"
            className="btn-about-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 30px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 6px 22px rgba(37, 99, 235, 0.3)',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(37, 99, 235, 0.44)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 22px rgba(37, 99, 235, 0.3)';
            }}
          >
            Let's Work Together <ArrowRight size={16} />
          </a>

          <a
            href="#"
            className="btn-about-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 28px',
              borderRadius: '12px',
              background: '#ffffff',
              border: '1.5px solid rgba(37, 99, 235, 0.22)',
              color: '#1e293b',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 2px 10px rgba(37, 99, 235, 0.05)',
              transition: 'background 0.18s, border-color 0.18s, transform 0.18s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#eff6ff';
              e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.42)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.22)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Download size={16} color="#2563eb" /> Download CV
          </a>
        </motion.div>

      </div>
    </div>

    {/* ── RESPONSIVE ADAPTATIONS (Desktop, Laptop, Tablet, Mobile) ── */}
    <style>{`
      .about-centered-container {
        max-width: 980px;
        margin: 0 auto;
        width: 100%;
      }

      .about-skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      /* Laptop (1024px - 1280px) */
      @media (max-width: 1280px) and (min-width: 1024px) {
        .about-centered-container {
          max-width: 920px;
        }
        .about-skills-grid {
          gap: 14px;
        }
      }

      /* Tablet (768px - 1023px) */
      @media (max-width: 1023px) and (min-width: 768px) {
        .about-centered-container {
          max-width: 720px;
        }
        .about-skills-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
      }

      /* Mobile (< 768px) */
      @media (max-width: 767px) {
        .about-centered-container {
          max-width: 100%;
        }
        .about-skills-grid {
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .about-headline {
          font-size: 1.95rem !important;
        }
        .about-intro-text {
          font-size: 0.98rem !important;
          margin-bottom: 36px !important;
          text-align: left !important;
        }
        .btn-about-primary, .btn-about-secondary {
          width: 100%;
          justify-content: center;
        }
      }

      /* Small Mobile (< 390px) */
      @media (max-width: 390px) {
        .about-headline {
          font-size: 1.8rem !important;
        }
      }
    `}</style>
  </section>
);
