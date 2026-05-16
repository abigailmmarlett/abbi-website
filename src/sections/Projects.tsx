import { ExternalLink } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  category: string
  year: string
  cardColor: string
  link?: string
}

const FlowerIllustration = ({ size = 120 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120">
    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
      <ellipse
        key={deg}
        cx="60" cy="22" rx="10" ry="22"
        fill="#F5E6A8"
        transform={`rotate(${deg} 60 60)`}
      />
    ))}
    <circle cx="60" cy="60" r="18" fill="#9B86C2" />
    <circle cx="60" cy="60" r="10" fill="#E89A85" />
  </svg>
);

const projects: Project[] = [
  {
    id: 'kelsey-day',
    title: 'Kelsey Day Book Tour Website',
    description: 'A modern, responsive website to promote an author\'s book tour and connect with readers.',
    category: 'Full-Stack · Web',
    year: '2025',
    cardColor: '#D8CCE8',
    link: 'https://kelseyday.netlify.app/#home',
  },
  {
    id: 'cherry-oven',
    title: 'The Cherry Oven',
    description: 'Online ordering platform for a local bakery, letting customers browse and order baked goods.',
    category: 'Frontend · Web',
    year: '2026',
    cardColor: '#F8C8B5',
    link: 'https://cherryoven.netlify.app/',
  },
  {
    id: 'cue',
    title: 'Cue',
    description: 'React Native app for building and managing workout sequences — organize exercises into sections, tag routines, and save to a personal library.',
    category: 'Mobile · React Native',
    year: '2026',
    cardColor: '#C7D9C0',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 lg:px-16"
      style={{ background: '#FAF6F2' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#E89A85',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 600,
            }}
          >
            + 01 — SELECTED WORK
          </p>
          <a
            href="#"
            style={{
              fontSize: 13,
              color: '#5A4F6E',
              fontFamily: '"DM Sans", sans-serif',
              textDecoration: 'none',
            }}
            className="hover:text-[#E89A85] transition-colors"
          >
            full archive →
          </a>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: '#2A2438',
            lineHeight: 1.15,
            marginBottom: 48,
          }}
          className="animate-fade-in"
        >
          Things I've made{' '}
          <span
            style={{
              fontFamily: '"Dancing Script", cursive',
              color: '#E89A85',
              fontWeight: 600,
            }}
          >
            recently.
          </span>
        </h2>

        {/* Card grid */}
        <div className="flex flex-wrap gap-8">
          {projects.map(project => (
            <div key={project.id} style={{ width: 280, flexShrink: 0 }}>
              {/* Card */}
              <div
                className="relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: project.cardColor,
                  borderRadius: 24,
                  aspectRatio: '4/3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Year badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: 999,
                    padding: '4px 12px',
                    fontSize: 12,
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 600,
                    color: '#2A2438',
                  }}
                >
                  {project.year}
                </div>
                <FlowerIllustration size={110} />
              </div>

              {/* Card metadata */}
              <div className="mt-3">
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#E89A85',
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  {project.category}
                </p>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: '#2A2438',
                    marginBottom: 6,
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#5A4F6E',
                    fontFamily: '"DM Sans", sans-serif',
                    lineHeight: 1.6,
                    marginBottom: 10,
                  }}
                >
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
                    style={{
                      fontSize: 13,
                      color: '#2A2438',
                      fontFamily: '"DM Sans", sans-serif',
                      textDecoration: 'none',
                    }}
                  >
                    View live <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
