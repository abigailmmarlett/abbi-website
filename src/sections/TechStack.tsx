import { JSX, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TechItem {
  name: string
  icon: JSX.Element
}

const techStack: TechItem[] = [
  {
    name: "React",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 6c-3 0-6 1.5-6 4s3 4 6 4 6 1.5 6 4-3 4-6 4" />
        <path d="M12 6c3 0 6 1.5 6 4s-3 4-6 4-6 1.5-6 4 3 4 6 4" />
        <path d="M12 6v12" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="1" fill="#3178C6" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TS</text>
      </svg>
    ),
  },
  {
    name: "C#",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#239120" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">C#</text>
      </svg>
    ),
  },
  {
    name: ".NET",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#512BD4" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">.NET</text>
      </svg>
    ),
  },
  {
    name: "SQL Server",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#CC2927" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">SQL</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#FF9900" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AWS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#4B9CD3" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">TW</text>
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#F1502F" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Git</text>
      </svg>
    ),
  },
  {
    name: "TFS",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#0078D4" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">TFS</text>
      </svg>
    ),
  },
  {
    name: "Azure",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#0078D4" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Az</text>
      </svg>
    ),
  },
  {
    name: "Datadog",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#632CA6" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">DD</text>
      </svg>
    ),
  },
  {
    name: "Entity Framework",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#512BD4" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">EF</text>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#3776AB" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Py</text>
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#007396" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Java</text>
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#2496ED" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">DK</text>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#326CE5" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">K8s</text>
      </svg>
    ),
  },
  {
    name: "Kafka",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" fill="#000000" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Kf</text>
      </svg>
    ),
  },
]

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.tech-item')

      // Create a timeline for smooth sequential animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse"
        }
      })

      tl.fromTo(
        items,
        {
          opacity: 0,
          scale: 0.5,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
        }
      )

      // Add hover animation
      items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.15,
            duration: 0.3,
            ease: "power2.out",
          })
        })
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="flex  pt-12 flex-wrap gap-6 sm:gap-8 justify-center px-4">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="tech-item flex flex-col items-center gap-3 cursor-pointer group"
          title={tech.name}
        >
          <div className="relative p-3 sm:p-5 rounded-2xl glass-light border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl group-hover:scale-110" style={{ color: 'hsl(var(--primary))' }}>
            {/* Background glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500" />

            {/* Icon shimmer effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* Icon */}
            <div className="relative z-10 group-hover:rotate-6 transition-transform duration-300">
              {tech.icon}
            </div>

            {/* Orbital ring on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>

          <span className="text-sm font-medium text-center max-w-[100px] text-foreground-muted group-hover:text-primary transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  )
}
