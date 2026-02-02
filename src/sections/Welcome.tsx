import { Mail, Phone, Download } from 'lucide-react';
import { Linkedin, Github } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import ParticleBackground from '../components/ParticleBackground';
import CircularTextComponent from '../components/ui/circular-text';

interface WelcomeProps {
  setIsContactOpen: (value: boolean) => void;
}

export function Welcome({ }: WelcomeProps) {
  const { displayedText } = useTypingAnimation('Full-Stack Software Engineer', 50, 400);

  return (
    <section
      id="welcome"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #001a4d 0%, #003366 50%, #004080 100%)',
        boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Animated gradient orbs for depth - futuristic neon glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb absolute top-1/4 left-1/4 w-96 h-96"
          style={{
            background: 'radial-gradient(circle, rgba(100, 200, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '0s'
          }}
        />
        <div
          className="orb absolute bottom-1/3 right-1/4 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(75, 150, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '2s'
          }}
        />
        <div
          className="orb absolute top-1/2 right-1/3 w-64 h-64"
          style={{
            background: 'radial-gradient(circle, rgba(100, 200, 255, 0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '4s'
          }}
        />
      </div>

      <ParticleBackground />

      {/* Circular Component - large and going off page, visible on all views */}
      <div className="absolute top-1/2 w-[1800px] h-[1800px] animate-float-gentle flex items-center justify-center z-10" style={{ left: '20%', transform: 'translateY(-50%)' }}>
        <CircularTextComponent />
      </div>

      {/* Content in lower left */}
      <div className="relative z-20 min-h-screen flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl">
          {/* Main heading layout */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 animate-fade-in">

              {/* Name and subtitle section */}
              <div className="text-left">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 animate-fade-in relative tracking-wider"
                  style={{
                    color: '#ffffff',
                    textShadow: '0 0 20px rgba(100, 200, 255, 0.6), 0 0 40px rgba(75, 150, 255, 0.3)',
                    letterSpacing: '0.05em'
                  }}
                >
                  ABIGAIL MARLETT
                  <span
                    className="absolute -inset-4 blur-3xl -z-10 animate-pulse-attention"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(100, 200, 255, 0.2) 0%, transparent 70%)',
                    }}
                  />
                </h1>

                {/* Subtitle with typing animation */}
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 animate-slide-up min-h-[2rem]"
                  style={{
                    animationDelay: '0.2s',
                    color: '#e0e0ff',
                    textShadow: '0 0 10px rgba(100, 200, 255, 0.4)'
                  }}
                >
                  {displayedText}
                  <span
                    className="inline-block w-0.5 h-6 ml-1 animate-pulse"
                    style={{ backgroundColor: 'rgba(100, 200, 255, 0.8)' }}
                  />
                </p>

                {/* Social Media Links with neon glow effects */}
                <div className=" pb-14 flex gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <a
                    href="mailto:abigailmarlett@gmail.com"
                    title="Email"
                    className="group relative p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-6"
                    style={{
                      background: 'rgba(100, 200, 255, 0.15)',
                      border: '1.5px solid rgba(100, 200, 255, 0.3)',
                      boxShadow: '0 0 15px rgba(100, 200, 255, 0.2)',
                    }}
                  >
                    <Mail size={16} className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] relative z-10 transition-colors duration-300" style={{ color: '#ffffff' }} />
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'radial-gradient(circle, rgba(100, 200, 255, 0.3), transparent 70%)',
                        boxShadow: '0 0 30px rgba(100, 200, 255, 0.5)'
                      }}
                    />
                  </a>
                  <a
                    href="tel:+18287195574"
                    title="Phone"
                    className="group relative p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-6"
                    style={{
                      background: 'rgba(100, 200, 255, 0.15)',
                      border: '1.5px solid rgba(100, 200, 255, 0.3)',
                      boxShadow: '0 0 15px rgba(100, 200, 255, 0.2)',
                    }}
                  >
                    <Phone size={16} className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] relative z-10 transition-colors duration-300" style={{ color: '#ffffff' }} />
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'radial-gradient(circle, rgba(100, 200, 255, 0.3), transparent 70%)',
                        boxShadow: '0 0 30px rgba(100, 200, 255, 0.5)'
                      }}
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/abigail-marlett"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="group relative p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-6"
                    style={{
                      background: 'rgba(100, 200, 255, 0.15)',
                      border: '1.5px solid rgba(100, 200, 255, 0.3)',
                      boxShadow: '0 0 15px rgba(100, 200, 255, 0.2)',
                    }}
                  >
                    <Linkedin size={16} className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] relative z-10 transition-colors duration-300" style={{ color: '#ffffff' }} />
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'radial-gradient(circle, rgba(100, 200, 255, 0.3), transparent 70%)',
                        boxShadow: '0 0 30px rgba(100, 200, 255, 0.5)'
                      }}
                    />
                  </a>
                  <a
                    href="https://github.com/abigailmmarlett"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="group relative p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-6"
                    style={{
                      background: 'rgba(100, 200, 255, 0.15)',
                      border: '1.5px solid rgba(100, 200, 255, 0.3)',
                      boxShadow: '0 0 15px rgba(100, 200, 255, 0.2)',
                    }}
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] relative z-10 transition-colors duration-300" style={{ color: '#ffffff' }} />
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'radial-gradient(circle, rgba(100, 200, 255, 0.3), transparent 70%)',
                        boxShadow: '0 0 30px rgba(100, 200, 255, 0.5)'
                      }}
                    />
                  </a>
                  <a
                    href="/amarlett-resume.pdf"
                    download
                    title="Download Resume"
                    className="group relative p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-6"
                    style={{
                      background: 'rgba(100, 200, 255, 0.15)',
                      border: '1.5px solid rgba(100, 200, 255, 0.3)',
                      boxShadow: '0 0 15px rgba(100, 200, 255, 0.2)',
                    }}
                  >
                    <Download size={16} className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] relative z-10 transition-colors duration-300" style={{ color: '#ffffff' }} />
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'radial-gradient(circle, rgba(100, 200, 255, 0.3), transparent 70%)',
                        boxShadow: '0 0 30px rgba(100, 200, 255, 0.5)'
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - centered at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-in" style={{ animationDelay: '0.8s' }}>
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-sm font-light tracking-wider uppercase"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textShadow: '0 0 10px rgba(100, 200, 255, 0.3)'
            }}
          >
            Scroll to explore
          </span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              filter: 'drop-shadow(0 0 8px rgba(100, 200, 255, 0.4))'
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
