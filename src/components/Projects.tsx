import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

// GitHub SVG Icon component
const GitHubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  accent: string;
  accentBg: string;
  badge: string;
}

const projects: Project[] = [
  {
    title: 'WOLF3D — 3D Printing Store',
    category: '3D Printing Store',
    desc: 'An interactive 3D printing store platform showcasing personalized creations, custom designs, and precision prototypes.',
    image: '/project-wolf3d.png',
    liveUrl: 'https://wolf3d-website-livid.vercel.app/',
    githubUrl: 'https://github.com/Kaviyarasu-dev07/wolf3d-website',
    accent: '#f59e0b',
    accentBg: 'rgba(245, 158, 11, 0.08)',
    badge: 'E-Commerce / 3D Store',
  },
  {
    title: 'Aura — Cafe Shop',
    category: 'Cafe Shop',
    desc: 'A premium coffee shop website crafted for artisanal coffee experiences, featuring daily batch roasting, menu, and community.',
    image: '/project-aura.png',
    liveUrl: 'https://coffee-shop-pi-one.vercel.app/',
    githubUrl: 'https://github.com/Kaviyarasu-dev07/coffee-shop',
    accent: '#b45309',
    accentBg: 'rgba(180, 83, 9, 0.08)',
    badge: 'Cafe & Restaurant',
  },
  {
    title: 'Ember & Spice — Food Restaurant',
    category: 'Food Restaurant',
    desc: 'A modern dining and restaurant web experience featuring culinary showcases, curated menu highlights, and online table reservations.',
    image: '/project-ember.png',
    liveUrl: 'https://spiceyfood.vercel.app/',
    githubUrl: 'https://github.com/Kaviyarasu-dev07/spiceyfood',
    accent: '#ea580c',
    accentBg: 'rgba(234, 88, 12, 0.08)',
    badge: 'Food & Dining',
  },
  {
    title: 'Luna Care — Clinic Website',
    category: 'Clinic Website',
    desc: 'A compassionate, patient-centered clinic web platform offering medical specialty overviews, doctor profiles, and appointment booking.',
    image: '/project-luna.png',
    liveUrl: 'https://clinic-rosy-pi.vercel.app/',
    githubUrl: 'https://github.com/Kaviyarasu-dev07/clinic',
    accent: '#0284c7',
    accentBg: 'rgba(2, 132, 199, 0.08)',
    badge: 'Healthcare & Clinic',
  },
  {
    title: 'NOVA STUDIO — 3D Studio',
    category: '3D Studio',
    desc: 'A minimalist, contemporary architecture and 3D interior design studio portfolio showcasing spatial concepts and architectural projects.',
    image: '/project-nova.png',
    liveUrl: 'https://3dstudio-eight.vercel.app/',
    githubUrl: 'https://github.com/Kaviyarasu-dev07/3dstudio',
    accent: '#6366f1',
    accentBg: 'rgba(99, 102, 241, 0.08)',
    badge: 'Architecture / 3D Studio',
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        background: '#ffffff',
        padding: 'clamp(72px, 9vw, 116px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '-6%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '999px',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              color: '#2563eb',
              marginBottom: '16px',
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
              FEATURED WORK
            </span>
          </div>

          <h2
            className="projects-headline"
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.18,
              letterSpacing: '-0.035em',
              marginBottom: '16px',
            }}
          >
            Real-World Deployed{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 55%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Client Projects.
            </span>
          </h2>

          <p
            style={{
              color: '#64748b',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            A showcase of live, responsive, and performance-driven web applications built and deployed for real clients.
          </p>
        </motion.div>

        {/* Projects Responsive Grid */}
        <div className="projects-grid-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
              className="project-card"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease',
              }}
            >
              {/* Screenshot Frame with Browser Top-Bar Accent */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9.4',
                  overflow: 'hidden',
                  background: '#f1f5f9',
                  borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                }}
              >
                {/* Browser Mockup Header Bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '24px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px',
                    gap: '5px',
                    zIndex: 2,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: '0.66rem',
                      fontWeight: 500,
                      color: '#94a3b8',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Screenshot Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Subtle gradient vignette at the bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '28px',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.08), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '22px 22px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                {/* Project Badge */}
                <div style={{ marginBottom: '10px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 9px',
                      borderRadius: '6px',
                      background: project.accentBg,
                      color: project.accent,
                      letterSpacing: '0.03em',
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.14rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1.3,
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
                </h3>

                {/* Short Neutral Description */}
                <p
                  style={{
                    color: '#64748b',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  {project.desc}
                </p>

                {/* Action Buttons: Live Demo ↗ and GitHub ↗ */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(241, 245, 249, 0.95)',
                  }}
                >
                  {/* Live Demo Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live-demo"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      color: '#ffffff',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(37, 99, 235, 0.22)',
                      transition: 'transform 0.16s ease, box-shadow 0.16s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1.5px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 99, 235, 0.34)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 99, 235, 0.22)';
                    }}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} strokeWidth={2.5} />
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: '#f8faff',
                      border: '1px solid rgba(203, 213, 225, 0.8)',
                      color: '#1e293b',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background 0.16s ease, border-color 0.16s ease, transform 0.16s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.35)';
                      e.currentTarget.style.transform = 'translateY(-1.5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8faff';
                      e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.8)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <GitHubIcon size={14} />
                    <span>GitHub</span>
                    <ExternalLink size={11} strokeWidth={2} style={{ opacity: 0.6 }} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── RESPONSIVE ADAPTATIONS (Desktop, Laptop, Tablet, Mobile) ── */}
      <style>{`
        .projects-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Hover effect on project cards */
        .project-card:hover {
          border-color: rgba(37, 99, 235, 0.28) !important;
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04) !important;
        }

        /* Laptop (1024px - 1280px) */
        @media (max-width: 1280px) and (min-width: 1024px) {
          .projects-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .projects-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile (< 768px) */
        @media (max-width: 767px) {
          .projects-grid-container {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .projects-headline {
            font-size: 1.85rem !important;
          }
        }

        /* Small Mobile (< 390px) */
        @media (max-width: 390px) {
          .projects-headline {
            font-size: 1.7rem !important;
          }
          .btn-live-demo, .btn-github {
            padding: 9px 10px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};
