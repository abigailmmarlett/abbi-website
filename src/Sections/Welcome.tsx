import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Welcome() {
  return (
    <section
      id="welcome"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Abigail Marlett
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Full-Stack Software Engineer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Passionate about building elegant, scalable web applications with modern technologies.
            I bring ideas to life through clean code and thoughtful design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              onClick={() => window.open('mailto:abigailmarlett@gmail.com')}
            >
              Get in Touch
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <a
              href="mailto:abigailmarlett@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">abigailmarlett@gmail.com</span>
            </a>
            <a
              href="tel:+18287195574"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">(828) 719-5574</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-6 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
            <a
              href="https://linkedin.com/in/abigail-marlett"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
