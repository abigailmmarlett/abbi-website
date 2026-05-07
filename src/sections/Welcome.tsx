import { Mail, Phone, Download } from 'lucide-react';
import { Linkedin, Github } from 'lucide-react';

interface WelcomeProps {
  setIsContactOpen: (value: boolean) => void;
}

const MARQUEE_TEXT = 'Full-Stack · Backend · Frontend · AWS · TypeScript · React · .NET · SQL Server · Python · Docker · Kubernetes · ';

export function Welcome({ }: WelcomeProps) {
  return (
    <section
      id="welcome"
      className="min-h-screen relative overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #010d1e 0%, #001a3d 60%, #002454 100%)',
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-24">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

            {/* Left: text */}
            <div className="flex-1 text-left">
              <h1
                className="animate-text-wipe font-display font-bold text-white leading-none tracking-tight mb-6"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
              >
                ABIGAIL<br />MARLETT
              </h1>

              {/* Accent line */}
              <div
                className="w-16 h-0.5 bg-cyan-400 mb-8 animate-fade-in"
                style={{ animationDelay: '1.4s' }}
              />

              {/* Social buttons */}
              <div
                className="flex gap-3 flex-wrap animate-slide-up"
                style={{ animationDelay: '1.6s' }}
              >
                <a
                  href="mailto:abigailmarlett@gmail.com"
                  title="Email"
                  className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(100, 200, 255, 0.12)',
                    border: '1.5px solid rgba(100, 200, 255, 0.25)',
                  }}
                >
                  <Mail size={18} style={{ color: '#ffffff' }} />
                </a>
                <a
                  href="tel:+18287195574"
                  title="Phone"
                  className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(100, 200, 255, 0.12)',
                    border: '1.5px solid rgba(100, 200, 255, 0.25)',
                  }}
                >
                  <Phone size={18} style={{ color: '#ffffff' }} />
                </a>
                <a
                  href="https://linkedin.com/in/abigail-marlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(100, 200, 255, 0.12)',
                    border: '1.5px solid rgba(100, 200, 255, 0.25)',
                  }}
                >
                  <Linkedin size={18} style={{ color: '#ffffff' }} />
                </a>
                <a
                  href="https://github.com/abigailmmarlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(100, 200, 255, 0.12)',
                    border: '1.5px solid rgba(100, 200, 255, 0.25)',
                  }}
                >
                  <Github size={18} style={{ color: '#ffffff' }} />
                </a>
                <a
                  href="/amarlett-resume.pdf"
                  download
                  title="Download Resume"
                  className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(100, 200, 255, 0.12)',
                    border: '1.5px solid rgba(100, 200, 255, 0.25)',
                  }}
                >
                  <Download size={18} style={{ color: '#ffffff' }} />
                </a>
              </div>
            </div>

            {/* Right: headshot */}
            <div
              className="flex-shrink-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="relative">
                <img
                  src="/images/headshot.JPG"
                  alt="Abigail Marlett"
                  className="w-56 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-[480px] object-cover rounded-2xl"
                  style={{
                    objectPosition: 'center top',
                    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)',
                  }}
                />
                {/* Offset accent border */}
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10"
                  style={{ border: '1.5px solid rgba(100, 200, 255, 0.25)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 overflow-hidden border-y border-white/10 py-4">
        <div className="marquee-track">
          <span className="marquee-content">{MARQUEE_TEXT}</span>
          <span className="marquee-content" aria-hidden="true">{MARQUEE_TEXT}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce-in"
        style={{ animationDelay: '2s' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-xs font-light tracking-widest uppercase"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
