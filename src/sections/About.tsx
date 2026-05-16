
const skills = ['Full-Stack', 'React', 'TypeScript', '.NET', 'AWS', 'SQL'];

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAF6F2 0%, rgba(216,204,232,0.2) 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — decorative oval */}
          <div className="flex-shrink-0 relative" style={{ width: 260, height: 340 }}>
            <div
              className="w-full h-full overflow-hidden"
              style={{ borderRadius: '60% 60% 60% 60% / 70% 70% 70% 70%' }}
            >
              <img
                src="/images/abbi-grad.JPG"
                alt="Abigail Marlett"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right — bio */}
          <div className="flex-1">
            {/* Eyebrow */}
            <p
              style={{
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#E89A85',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              + 02 — ABOUT
            </p>

            {/* Title */}
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#2A2438',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              hello, I'm{' '}
              <span
                style={{
                  fontFamily: '"Dancing Script", cursive',
                  color: '#E89A85',
                  fontWeight: 600,
                }}
              >
                Abigail
              </span>
            </h2>

            {/* Bio */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1rem',
                color: '#5A4F6E',
                lineHeight: 1.75,
                marginBottom: 16,
              }}
            >
              I'm a software engineer based in Richmond, VA, building full-stack web products
              with React, TypeScript, and .NET. I love the details that make interfaces feel
              intentional.
            </p>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1rem',
                color: '#5A4F6E',
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              I've been writing code professionally since 2023 — currently at CoStar Group —
              and coaching fitness classes on the side. Before that, UNC Chapel Hill,
              Computer Science.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(42,36,56,0.1)',
                    borderRadius: 999,
                    padding: '6px 16px',
                    fontSize: 13,
                    color: '#2A2438',
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
