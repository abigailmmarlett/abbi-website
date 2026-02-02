import { useRef, useEffect, useState } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

interface Project {
  id: string
  title: string
  fullDescription: string
  problem: string
  solution: string
  technologies: string[]
  image: string
  link?: string
  codeLink?: string
  iframeUrl?: string
  previewImage?: string
}

const projects: Project[] = [
  {
    id: 'kelsey-day',
    title: "Kelsey Day Book Tour Website",
    fullDescription: "A modern, responsive website designed to promote author Kelsey Day's upcoming book tour and engage with readers.",
    problem: "Author needed a professional online presence to showcase her book, announce tour dates, and connect with readers",
    solution: "Built a polished, responsive website with engaging tour date showcase, book information, and seamless contact integration. Optimized for performance and deployed on Netlify for reliability.",
    technologies: ["React", "TypeScript", "Node.js", "Vite", "Netlify"],
    image: "/images/spiral-key-photo.jpg",
    previewImage: "/images/spiral-key-photo.jpg",
    link: "https://kelseyday.netlify.app/#home",
    iframeUrl: "https://kelseyday.netlify.app/#home",
  }
]

export function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [textOpacity, setTextOpacity] = useState(1)
  const [activeIframeId, setActiveIframeId] = useState<string | null>(null)
  const imagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = imagesContainerRef.current
    if (!container) return

    const handleScroll = () => {
      // Get the height of each image (they should all be equal height)
      const imageHeight = container.offsetHeight
      const scrollPosition = container.scrollTop

      // Determine which image is most in view
      const threshold = imageHeight * 0.5
      const newIndex = Math.floor((scrollPosition + threshold) / imageHeight)
      const clampedIndex = Math.max(0, Math.min(projects.length - 1, newIndex))

      setActiveProjectIndex(clampedIndex)
      // Reset iframe view when scrolling to a different project
      setActiveIframeId(null)

      // Calculate text opacity based on scroll position
      // This creates a smooth fade as you scroll between images
      const scrollRemainder = scrollPosition % imageHeight
      const fadePoint = imageHeight * 0.25

      // Text fades out in the first 25% of scroll, fades in during middle, fades out at end
      let opacity = 1
      if (scrollRemainder < fadePoint) {
        // Fading in as you reach the image
        opacity = scrollRemainder / fadePoint
      } else if (scrollRemainder > imageHeight - fadePoint) {
        // Fading out as you leave the image
        opacity = (imageHeight - scrollRemainder) / fadePoint
      }

      setTextOpacity(Math.max(0.1, Math.min(1, opacity)))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const activeProject = projects[activeProjectIndex]

  return (
    <div>


      {/* Section Title */}
      <div className="py-12 text-center relative z-20">
        <h2 className="text-3xl md:text-4xl font-display font-bold animate-fade-in">
          PERSONAL PROJECTS
        </h2>
      </div>

      <section id="projects" className="relative flex flex-col overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)'
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}
        />
        {/* Content Container */}
        <div className="flex flex-1 h-screen">
          {/* Left Column - Vertically Scrollable Images */}
          <div
            ref={imagesContainerRef}
            className="flex-1 overflow-y-auto overflow-x-hidden relative"
          >
            {projects.map((project, index) => (
              <div key={project.id}>
                {/* Image or Iframe */}
                <div className="w-full h-screen flex-shrink-0 relative bg-black">
                  {activeIframeId === project.id && project.iframeUrl ? (
                    <iframe
                      src={project.iframeUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <>
                      <img
                        src={project.previewImage || project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={project.id === 'kelsey-day' ? { filter: 'blur(8px)' } : {}}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                      {/* Preview button - only show if project has iframe */}
                      {project.iframeUrl && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => setActiveIframeId(project.id)}
                            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-cyan-500/50"
                          >
                            View Interactive Demo
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* Right Column - Static Text with Fade */}
          <div className="w-full lg:w-1/2 bg-black/30 backdrop-blur-sm border-l border-white/10 flex flex-col p-8 md:p-12 overflow-y-auto relative z-10">
            <div className="flex-1 flex flex-col justify-center">
              <div className="max-w-xl">
                {/* Project Counter */}
                <div className="mb-8 transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: textOpacity,
                  }}
                >
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                    Project {activeProjectIndex + 1} of {projects.length}
                  </span>
                </div>

                {/* Title - Fades with scroll */}
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-4 transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: textOpacity,
                  }}
                >
                  {activeProject.title}
                </h2>

                {/* Description - Fades with scroll */}
                <p
                  className="text-lg text-white/80 leading-relaxed mb-10 transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: textOpacity,
                  }}
                >
                  {activeProject.fullDescription}
                </p>

                {/* Problem & Solution */}
                <div className="space-y-8 mb-10 transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: textOpacity,
                  }}
                >
                  <div>
                    <p className="text-lg text-white/80 leading-relaxed mb-10 transition-opacity duration-300 ease-in-out">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-8 transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: textOpacity,
                  }}
                />

                {/* Technologies */}
                <div
                  className="transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: textOpacity,
                  }}
                >
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {activeProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: textOpacity,
                  }}
                >
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-all duration-300"
                    >
                      View Live
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {activeProject.codeLink && (
                    <a
                      href={activeProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white border border-white/30 hover:border-white/60 rounded-lg transition-all duration-300"
                    >
                      View Code
                      <Github size={16} />
                    </a>
                  )}
                </div>

                {/* Progress indicators */}
                <div className="flex gap-2 mt-12">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (imagesContainerRef.current) {
                          imagesContainerRef.current.scrollTop = idx * imagesContainerRef.current.offsetHeight
                        }
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === activeProjectIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
                        }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
