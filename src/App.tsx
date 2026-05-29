import { useEffect, useState } from 'react'
import { Menu, X, Mail, Phone, Linkedin, Github } from 'lucide-react'
import { Intro } from './sections/Intro'
import { Welcome } from './sections/Welcome'
import { About } from './sections/About'
import { TechStack } from './sections/TechStack'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Hobbies } from './sections/Hobbies'
import { Modal } from './components/ui/modal'

type SectionId = 'welcome' | 'about' | 'projects' | 'experience'

const navItems: { id: SectionId; label: string }[] = [
  { id: 'projects', label: 'work' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'resume' },
]

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('welcome')
  const [showIntro, setShowIntro] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const allIds: SectionId[] = ['welcome', 'about', 'projects', 'experience']
      const scrollPosition = window.scrollY + 100

      for (const id of allIds) {
        const el = document.getElementById(id)
        if (el) {
          const { top, bottom } = el.getBoundingClientRect()
          const elTop = top + window.scrollY
          const elBottom = bottom + window.scrollY
          if (scrollPosition >= elTop && scrollPosition < elBottom) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const navButtonStyle = (id: SectionId) => ({
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#5A4F6E',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    paddingBottom: activeSection === id ? '4px' : '0',
    borderBottom: activeSection === id ? '2px solid #E89A85' : '2px solid transparent',
    transition: 'border-color 0.2s ease, color 0.2s ease',
  } as React.CSSProperties)

  return (
    <div className="w-full relative" style={{ backgroundColor: '#FAF6F2' }}>
      {/* Intro overlay */}
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}

      {/* Navigation */}
      {!showIntro && (
        <nav
          className="fixed top-0 w-full z-[100]"
          style={{
            background: 'rgba(250,246,242,0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(42,36,56,0.08)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            <button
              onClick={() => scrollToSection('welcome')}
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: '1.35rem',
                fontWeight: 600,
                color: '#E89A85',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Abigail.
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={navButtonStyle(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setIsContactOpen(true)}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#5A4F6E',
                  background: 'none',
                  border: 'none',
                  borderBottom: '2px solid transparent',
                  cursor: 'pointer',
                  paddingBottom: '0',
                  transition: 'color 0.2s ease',
                }}
              >
                contact
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              style={{ color: '#5A4F6E' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div
              className="md:hidden"
              style={{
                borderTop: '1px solid rgba(42,36,56,0.08)',
                background: 'rgba(250,246,242,0.97)',
              }}
            >
              <div className="px-6 py-4 space-y-3">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#5A4F6E',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => { setIsContactOpen(true); setMobileMenuOpen(false); }}
                  className="block w-full text-left"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#5A4F6E',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  contact
                </button>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Main content */}
      <main className="relative z-20">
        <div id="welcome">
          <Welcome
            onWorkClick={() => scrollToSection('projects')}
            onContactClick={() => setIsContactOpen(true)}
          />
        </div>

        <div id="about">
          <About />
        </div>

        <TechStack />

        <div id="projects">
          <Projects />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="hobbies">
          <Hobbies />
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-12 px-4 relative z-20"
        style={{ backgroundColor: '#2A2438' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Mail size={18} style={{ color: '#D8CCE8', flexShrink: 0 }} />
                  <a
                    href="mailto:abigailmarlett@gmail.com"
                    style={{ color: '#D8CCE8', fontSize: '0.875rem', fontFamily: '"DM Sans", sans-serif' }}
                    className="hover:text-[#F8C8B5] transition-colors"
                  >
                    abigailmarlett@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Phone size={18} style={{ color: '#D8CCE8', flexShrink: 0 }} />
                  <a
                    href="tel:+18287195574"
                    style={{ color: '#D8CCE8', fontSize: '0.875rem', fontFamily: '"DM Sans", sans-serif' }}
                    className="hover:text-[#F8C8B5] transition-colors"
                  >
                    (828) 719-5574
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/abigail-marlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 justify-center md:justify-end hover:text-[#F8C8B5] transition-colors"
                  style={{ color: '#D8CCE8', fontFamily: '"DM Sans", sans-serif' }}
                >
                  <Linkedin size={20} />
                  <span style={{ fontSize: '0.875rem' }}>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/abigailmmarlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 justify-center md:justify-end hover:text-[#F8C8B5] transition-colors"
                  style={{ color: '#D8CCE8', fontFamily: '"DM Sans", sans-serif' }}
                >
                  <Github size={20} />
                  <span style={{ fontSize: '0.875rem' }}>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '2rem' }}>
            <div className="flex flex-col items-center justify-center gap-4">
              <p style={{ color: '#D8CCE8', fontSize: '0.875rem', fontFamily: '"DM Sans", sans-serif' }}>
                Thanks for visiting!
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact modal */}
      <Modal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Get in Touch"
      >
        <div className="space-y-6">
          <p className="text-sm mb-4" style={{ color: '#5A4F6E', fontFamily: '"DM Sans", sans-serif' }}>
            Say hey! Feel free to reach out through any of these channels:
          </p>
          <div className="space-y-4">
            {[
              { href: 'mailto:abigailmarlett@gmail.com', icon: <Mail size={20} style={{ flexShrink: 0, color: '#E89A85' }} />, label: 'Email', value: 'abigailmarlett@gmail.com' },
              { href: 'tel:+18287195574', icon: <Phone size={20} style={{ flexShrink: 0, color: '#E89A85' }} />, label: 'Phone', value: '(828) 719-5574' },
              { href: 'https://linkedin.com/in/abigail-marlett', icon: <Linkedin size={20} style={{ flexShrink: 0, color: '#E89A85' }} />, label: 'LinkedIn', value: 'abigail-marlett', external: true },
              { href: 'https://github.com/abigailmmarlett', icon: <Github size={20} style={{ flexShrink: 0, color: '#E89A85' }} />, label: 'GitHub', value: 'abigailmmarlett', external: true },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-4 rounded-2xl transition-colors"
                style={{
                  background: 'rgba(248,200,181,0.1)',
                  border: '1px solid rgba(232,154,133,0.2)',
                  color: '#2A2438',
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                {item.icon}
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item.label}</p>
                  <p style={{ fontSize: '0.875rem', color: '#5A4F6E' }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App
