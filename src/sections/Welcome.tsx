interface WelcomeProps {
  onWorkClick: () => void;
  onContactClick: () => void;
}

const Flower = ({ s = 32, c1, c2 }: { s?: number; c1: string; c2: string }) => (
  <svg width={s} height={s} viewBox="0 0 60 60">
    {[0, 60, 120, 180, 240, 300].map(deg => (
      <ellipse key={deg} cx="30" cy="14" rx="7" ry="14" fill={c1}
        transform={`rotate(${deg} 30 30)`} />
    ))}
    <circle cx="30" cy="30" r="6" fill={c2} />
  </svg>
);

const WavyVine = () => (
  <div className="w-full overflow-hidden" style={{ height: 160 }}>
    <svg
      width="100%"
      height="160"
      viewBox="0 0 1200 160"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      {/* Wavy stem */}
      <path
        d="M 0,130 C 150,80 250,120 380,100 S 560,68 700,98 S 900,132 1200,108"
        stroke="#7FA876"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Flowers along the vine */}
      <g transform="translate(118,116)"><Flower s={28} c1="#F8C8B5" c2="#E89A85" /></g>
      <g transform="translate(218,84)"><Flower s={22} c1="#D8CCE8" c2="#9B86C2" /></g>
      <g transform="translate(378,86)"><Flower s={26} c1="#F8C8B5" c2="#E89A85" /></g>
      <g transform="translate(548,54)"><Flower s={30} c1="#F5E6A8" c2="#E89A85" /></g>
      <g transform="translate(688,84)"><Flower s={22} c1="#D8CCE8" c2="#9B86C2" /></g>
      <g transform="translate(818,116)"><Flower s={24} c1="#F8C8B5" c2="#7FA876" /></g>
      <g transform="translate(968,94)"><Flower s={26} c1="#C7D9C0" c2="#7FA876" /></g>
    </svg>
  </div>
);

export function Welcome({ onWorkClick, onContactClick }: WelcomeProps) {
  return (
    <section
      id="welcome"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: '#FAF6F2' }}
    >
      {/* Wavy vine decoration */}
      <div className="absolute top-16 left-0 right-0 w-full pointer-events-none">
        <WavyVine />
      </div>

      {/* Main centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-48 pb-24">

        {/* Eyebrow */}
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#E89A85',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 600,
            marginBottom: 24,
          }}
          className="animate-fade-in"
        >
          — Portfolio &amp; Selected Works · 2026 —
        </p>

        {/* Name */}
        <h1
          className="animate-text-wipe"
          style={{
            lineHeight: 0.9,
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(5rem, 14vw, 11rem)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#2A2438',
              letterSpacing: '-0.02em',
            }}
          >
            Abigail
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: '"Dancing Script", cursive',
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              fontWeight: 600,
              color: '#E89A85',
              letterSpacing: '0.01em',
            }}
          >
            Marlett
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-in"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontStyle: 'italic',
            color: '#E89A85',
            marginBottom: 40,
            animationDelay: '1.2s',
          }}
        >
          ✿&nbsp; building thoughtful software · richmond, va &nbsp;✿
        </p>

        {/* CTA buttons */}
        <div
          className="flex gap-4 flex-wrap justify-center animate-slide-up"
          style={{ animationDelay: '1.4s' }}
        >
          <button
            onClick={onWorkClick}
            className="transition-all duration-300 hover:opacity-80"
            style={{
              background: '#2A2438',
              color: '#FAF6F2',
              borderRadius: 999,
              padding: '14px 28px',
              fontSize: '0.9rem',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            see the work →
          </button>
          <button
            onClick={onContactClick}
            className="transition-all duration-300 hover:bg-[rgba(42,36,56,0.06)]"
            style={{
              background: 'transparent',
              color: '#2A2438',
              borderRadius: 999,
              padding: '14px 28px',
              fontSize: '0.9rem',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              border: '1.5px solid #2A2438',
              cursor: 'pointer',
            }}
          >
            say hello
          </button>
        </div>

      </div>
    </section>
  );
}
