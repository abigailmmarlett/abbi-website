import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import ParticleBackground from '../components/ParticleBackground';

interface WelcomeProps {
  isContactOpen: boolean;
  setIsContactOpen: (value: boolean) => void;
}

export function Welcome({ isContactOpen, setIsContactOpen }: WelcomeProps) {
  const { displayedText } = useTypingAnimation('Full-Stack Software Engineer', 50, 400);

  return (
    <section
      id="welcome"
      className="min-h-screen flex items-center justify-center relative"
    >
      <ParticleBackground />
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Headshot */}
            <div className="flex-shrink-0 animate-fade-in opacity-0 w-full sm:w-auto flex justify-center" style={{ animationDelay: '0.1s' }}>
              <img
                src="/images/headshot.JPG"
                alt="Abigail Marlett"
                className="w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] rounded-2xl object-cover shadow-lg opacity-95"
              />
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1 w-full">
              <p className="text-sm sm:text-base text-cyan-700 font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                Abigail Marlett
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-muted-foreground mb-8 animate-fade-in opacity-0 min-h-[2.5rem] sm:h-[3rem] flex items-center justify-center md:justify-start" style={{ animationDelay: '0.4s' }}>
                <span className="relative">
                  {displayedText}
                  <span className="absolute -right-2 animate-pulse">|</span>
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                Passionate about building elegant, scalable web applications with modern technologies.
                I bring ideas to life through clean code and thoughtful design.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 animate-fade-in opacity-0 justify-center md:justify-start" style={{ animationDelay: '0.6s' }}>
                <Button
                  size="lg"
                  className="px-6 sm:px-8 py-3 w-full sm:w-auto"
                  onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work Experience
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 sm:px-8 py-3 w-full sm:w-auto"
                  onClick={() => setIsContactOpen(true)}
                >
                  Get in Touch
                </Button>
                <a
                  href="/amarlett-resume.pdf"
                  download="Abigail_Marlett_Resume.pdf"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-6 sm:px-8 py-3 flex items-center justify-center sm:justify-center gap-2 w-full"
                  >
                    <Download size={18} />
                    <span className="hidden sm:inline">Download Resume</span>
                    <span className="sm:hidden">Resume</span>
                  </Button>
                </a>
              </div>

              {/* Contact & Social Links */}
              <div className="flex gap-3 sm:gap-4 mb-6 animate-fade-in opacity-0 justify-center md:justify-start" style={{ animationDelay: '0.7s' }}>
                <a
                  href="mailto:abigailmarlett@gmail.com"
                  title="Email"
                  className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-cyan-700 hover:text-white text-muted-foreground transition-all duration-300"
                >
                  <Mail size={18} className="sm:w-[20px] sm:h-[20px]" />
                </a>
                <a
                  href="tel:+18287195574"
                  title="Phone"
                  className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-cyan-700 hover:text-white text-muted-foreground transition-all duration-300"
                >
                  <Phone size={18} className="sm:w-[20px] sm:h-[20px]" />
                </a>
                <a
                  href="https://linkedin.com/in/abigail-marlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-cyan-700 hover:text-white text-muted-foreground transition-all duration-300"
                >
                  <Linkedin size={18} className="sm:w-[20px] sm:h-[20px]" />
                </a>
                <a
                  href="https://github.com/abigailmmarlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-cyan-700 hover:text-white text-muted-foreground transition-all duration-300"
                >
                  <Github size={18} className="sm:w-[20px] sm:h-[20px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
