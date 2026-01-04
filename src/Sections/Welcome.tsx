import { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Modal } from '../components/ui/modal';
import ParticleBackground from '../components/ParticleBackground';

export function Welcome() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id="welcome"
      className="min-h-screen flex items-center justify-center pt-20 relative"
    >
      <ParticleBackground />
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Headshot */}
            <div className="flex-shrink-0 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              <img
                src="/images/headshot.JPG"
                alt="Abigail Marlett"
                className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl object-cover shadow-lg opacity-95"
              />
            </div>

            {/* Content */}
            <div className="text-left flex-1">
              <p className="text-cyan-700 font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                Abigail Marlett
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
                Full-Stack Software Engineer
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                Passionate about building elegant, scalable web applications with modern technologies.
                I bring ideas to life through clean code and thoughtful design.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
                <Button
                  size="lg"
                  className="px-8"
                  onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work Experience
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => setIsContactOpen(true)}
                >
                  Get in Touch
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-4 text-muted-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
                <a
                  href="mailto:abigailmarlett@gmail.com"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">abigailmarlett@gmail.com</span>
                </a>
                <a
                  href="tel:+18287195574"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm">(828) 719-5574</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
                <a
                  href="https://linkedin.com/in/abigail-marlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-cyan-700 hover:text-white text-muted-foreground transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/abigailmmarlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-cyan-700 hover:text-white text-muted-foreground transition-all duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Get in Touch"
      >
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-4">
              Say hey! Feel free to reach out to me through any of these channels:
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:abigailmarlett@gmail.com"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors text-gray-900 hover:text-blue-600 border border-gray-200"
            >
              <Mail size={20} className="flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm">abigailmarlett@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+18287195574"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors text-gray-900 hover:text-blue-600 border border-gray-200"
            >
              <Phone size={20} className="flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm">(828) 719-5574</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/abigail-marlett"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors text-gray-900 hover:text-blue-600 border border-gray-200"
            >
              <Linkedin size={20} className="flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <p className="text-sm">abigail-marlett</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/abigailmmarlett"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors text-gray-900 hover:text-blue-600 border border-gray-200"
            >
              <Github size={20} className="flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">GitHub</p>
                <p className="text-sm">abigailmmarlett</p>
              </div>
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}
