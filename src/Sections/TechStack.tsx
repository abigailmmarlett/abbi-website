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
    <div className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-semibold mb-8" style={{ color: 'hsl(var(--foreground))' }}>Tech Stack</h3>
      <div ref={containerRef} className="flex flex-wrap gap-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="tech-item flex flex-col items-center gap-3 cursor-pointer"
            title={tech.name}
          >
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-all" style={{ color: 'hsl(var(--primary))' }}>
              {tech.icon}
            </div>
            <span className="text-sm font-medium text-center max-w-[80px]" style={{ color: 'hsl(var(--muted-foreground))' }}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
