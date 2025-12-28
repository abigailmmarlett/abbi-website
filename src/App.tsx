import { useEffect, useState } from 'react'
import { Intro } from './sections/Intro'
import { Welcome } from './sections/Welcome'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Projects } from './sections/Projects'
import { Hobbies } from './sections/Hobbies'

type SectionId = 'welcome' | 'experience' | 'education' | 'projects' | 'hobbies'

// Feature toggles
const FEATURES = {
  showProjects: false,
}

const allSections: { id: SectionId; label: string }[] = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'hobbies', label: 'Outside Work' },
]

const sections = allSections.filter(section => {
  if (section.id === 'projects') return FEATURES.showProjects
  return true
})

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('welcome')
  const [showIntro, setShowIntro] = useState(true)

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

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full relative" style={{ backgroundColor: 'hsl(var(--background))' }}>
      {/* Intro overlay */}
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {/* Navigation */}
      {!showIntro && (
        <nav className="fixed top-0 w-full backdrop-blur-md border-b z-[100] bg-white/80 border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <button
              onClick={() => scrollToSection('welcome')}
              className="text-xl font-bold text-cyan-700 hover:text-cyan-600 transition-colors"
            >
              Abigail
            </button>
            <div className="flex gap-1 items-center">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === section.id
                    ? 'bg-cyan-700 text-white font-semibold'
                    : 'text-gray-600 hover:text-cyan-700 hover:bg-cyan-50'
                    }`}
                >
                  {section.label}
                </button>
              ))}
              <a
                href="mailto:abigailmarlett@gmail.com"
                className="ml-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="pt-20 relative z-20">
        <div id="welcome">
          <Welcome />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="education">
          <Education />
        </div>

        {FEATURES.showProjects && (
          <div id="projects">
            <Projects />
          </div>
        )}

        <div id="hobbies">
          <Hobbies />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 relative z-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 text-sm text-gray-600">© 2025 Abigail Marlett. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="mailto:abigailmarlett@gmail.com" className="text-cyan-700 hover:text-cyan-600 transition-colors">Email</a>
            <span className="text-gray-300">•</span>
            <a href="https://www.linkedin.com/in/abigail-marlett" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-600 transition-colors">LinkedIn</a>
            <span className="text-gray-300">•</span>
            <a href="tel:828-719-5574" className="text-cyan-700 hover:text-cyan-600 transition-colors">Phone</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
