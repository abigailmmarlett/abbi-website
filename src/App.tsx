import { useEffect, useState } from 'react'
import { Menu, X, Mail, Phone, Linkedin, Github } from 'lucide-react'
import { Intro } from './sections/Intro'
import { Welcome } from './sections/Welcome'
import { TechStack } from './sections/TechStack'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Projects } from './sections/Projects'
import { Hobbies } from './sections/Hobbies'
import { SectionDivider } from './components/SectionDivider'
import { Modal } from './components/ui/modal'

type SectionId = 'welcome' | 'experience' | 'education' | 'projects' | 'hobbies'

// Feature toggles
const FEATURES = {
  showProjects: true,
}

const allSections: { id: SectionId; label: string }[] = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'hobbies', label: 'OOO' },
]

const sections = allSections.filter(section => {
  if (section.id === 'projects') return FEATURES.showProjects
  return true
})

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('welcome')
  const [showIntro, setShowIntro] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }))

      const scrollPosition = window.scrollY + 100

      for (const section of sectionElements) {
        if (section.element) {
          const { top, bottom } = section.element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="w-full relative" style={{ backgroundColor: 'hsl(var(--background))' }}>
      {/* Mouse Shadow Effect */}
      <div
        className="pointer-events-none fixed"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '300px',
          height: '300px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(75, 156, 211, 0.15) 0%, rgba(75, 156, 211, 0.05) 40%, transparent 70%)',
          zIndex: 1,
          transition: 'opacity 0.1s ease-out',
          filter: 'blur(40px)',
        }}
      />
      {/* Intro overlay */}
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {/* Navigation */}
      {!showIntro && (
        <nav className="fixed top-0 w-full z-[100] bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            <button
              onClick={() => scrollToSection('welcome')}
              className="text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              AM
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium text-gray-700 transition-colors ${activeSection === section.id
                    ? 'border-b-2 border-cyan-700 pb-1'
                    : ''
                    }`}
                >
                  {section.label}
                </button>
              ))}
              {/* <button
                onClick={() => setIsContactOpen(true)}
                className="ml-4 px-5 py-2 bg-cyan-700 text-white text-sm font-medium rounded-md hover:bg-cyan-800 transition-colors"
              >
                Contact Me
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-6 py-4 space-y-3">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left text-sm font-medium text-gray-700"
                  >
                    {section.label}
                  </button>
                ))}
                {/* <button
                  onClick={() => {
                    setIsContactOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full px-5 py-2 mt-2 bg-cyan-700 text-white text-sm font-medium rounded-md hover:bg-cyan-800 transition-colors text-center"
                >
                  Contact
                </button> */}
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Main Content */}
      <main className="relative z-20">
        <div id="welcome">
          <Welcome setIsContactOpen={setIsContactOpen} />
        </div>

        <section >
          <div className="container mx-auto px-6 max-w-5xl">
            <TechStack />
          </div>
        </section>

        <SectionDivider />

        <div id="experience">
          <Experience />
        </div>

        <div id="education">
          <Education />
        </div>

        {FEATURES.showProjects && (
          <>
            <SectionDivider />
            <div id="projects">
              <Projects />
            </div>
          </>
        )}

        <SectionDivider />

        <div id="hobbies">
          <Hobbies />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 relative z-20" style={{ backgroundColor: 'oklch(29.3% 0.066 243.157)' }}>
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center md:text-left">
            {/* Left Column - Contact Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Mail size={18} className="text-gray-300 flex-shrink-0" />
                  <a href="mailto:abigailmarlett@gmail.com" className="text-gray-300 hover:text-cyan-200 transition-colors text-sm">
                    abigailmarlett@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Phone size={18} className="text-gray-300 flex-shrink-0" />
                  <a href="tel:+18287195574" className="text-gray-300 hover:text-cyan-200 transition-colors text-sm">
                    (828) 719-5574
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Social Icons */}
            <div className="flex flex-col items-center md:items-end">
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/abigail-marlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-200 transition-colors justify-center md:justify-end"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/abigailmmarlett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-200 transition-colors justify-center md:justify-end"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer - Divider */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-gray-300 text-sm flex items-center gap-2">
                Thanks for visiting!
              </p>
              <p className="text-gray-400 text-xs">© 2025 Abigail Marlett. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

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
    </div>
  )
}

export default App
