import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'

interface IntroProps {
  onComplete: () => void
}

export function Intro({ onComplete }: IntroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLButtonElement>(null)
  const pathRefs = useRef<SVGPathElement[]>([])
  const [showArrow, setShowArrow] = useState(false)

  const handleArrowClick = useCallback(() => {
    if (containerRef.current) {
      // Fade out intro
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        pointerEvents: "none",
        onComplete: () => {
          onComplete()
        },
      })

      // Scroll to welcome section
      const welcomeElement = document.getElementById('welcome')
      if (welcomeElement) {
        welcomeElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [onComplete])

  useEffect(() => {
    // Animate all paths as if being written
    if (pathRefs.current.length > 0) {
      const timeline = gsap.timeline({
        onComplete: () => {
          setShowArrow(true)
        },
      })

      pathRefs.current.forEach((path, index) => {
        const length = path.getTotalLength()

        // Set initial state
        path.style.strokeDasharray = length.toString()
        path.style.strokeDashoffset = length.toString()

        // Animate the stroke being drawn
        timeline.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "none",
          },
          index * 0.15 // Stagger each letter
        )
      })
    }
  }, [])

  // Handle scroll to close intro
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (showArrow && e.deltaY > 0) {
        handleArrowClick()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [showArrow, handleArrowClick])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center z-50 transition-none"
      style={{
        pointerEvents: 'auto',
        backgroundColor: '#2A2438',
      }}
    >
      {/* Animated background elements with depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base layer blobs */}
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow" style={{ background: 'rgba(248,200,181,0.08)' }}></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-medium" style={{ background: 'rgba(216,204,232,0.08)' }}></div>

        {/* Mid-layer glowing blobs */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-2xl opacity-60" style={{ background: 'rgba(248,200,181,0.12)' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full blur-2xl opacity-60" style={{ background: 'rgba(216,204,232,0.10)' }}></div>

        {/* Additional depth layer */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-40" style={{ background: 'linear-gradient(to right, rgba(248,200,181,0.06), rgba(216,204,232,0.06))' }}></div>

        {/* Vignette effect for depth */}
        <div className="absolute inset-0 opacity-40" style={{
          background: 'radial-gradient(circle at center, transparent 0%, #2A2438 100%)'
        }}></div>
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center gap-12"
        style={{
          textShadow: '0 0 30px rgba(232,154,133,0.4), 0 0 60px rgba(248,200,181,0.2)'
        }}
      >
        {/* Handwritten text with SVG */}
        <svg
          width="650"
          height="220"
          viewBox="0 0 650 220"
          className="max-w-full drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(232,154,133,0.5)) drop-shadow(0 0 40px rgba(248,200,181,0.3))',
          }}
        >
          {/* Line 1: "oh !" */}

          {/* O */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[0] = el
            }}
            d="M 80,50 Q 80,30 100,30 Q 120,30 120,50 Q 120,70 100,70 Q 80,70 80,50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* H */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[1] = el
            }}
            d="M 150,30 L 150,70 M 180,30 L 180,70 M 150,50 L 180,50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* ! (exclamation mark) */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[2] = el
            }}
            d="M 210,30 L 210,55 M 210,65 L 210,68"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* Line 2: "hello there" */}

          {/* H */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[3] = el
            }}
            d="M 50,120 L 50,160 M 80,120 L 80,160 M 50,140 L 80,140"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* E */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[4] = el
            }}
            d="M 100,120 L 100,160 M 100,120 L 130,120 M 100,140 L 125,140 M 100,160 L 130,160"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* L */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[5] = el
            }}
            d="M 150,120 L 150,160 L 180,160"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* L */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[6] = el
            }}
            d="M 200,120 L 200,160 L 230,160"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* O */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[7] = el
            }}
            d="M 255,140 Q 255,120 275,120 Q 295,120 295,140 Q 295,160 275,160 Q 255,160 255,140"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* T */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[8] = el
            }}
            d="M 320,120 L 360,120 M 340,120 L 340,160"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* H */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[9] = el
            }}
            d="M 380,120 L 380,160 M 410,120 L 410,160 M 380,140 L 410,140"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* E */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[10] = el
            }}
            d="M 430,120 L 430,160 M 430,120 L 460,120 M 430,140 L 455,140 M 430,160 L 460,160"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* R */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[11] = el
            }}
            d="M 480,120 L 480,160 M 480,120 L 505,120 Q 515,120 515,130 Q 515,140 505,140 L 480,140 M 505,140 L 520,160"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* E */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[12] = el
            }}
            d="M 540,120 L 540,160 M 540,120 L 570,120 M 540,140 L 565,140 M 540,160 L 570,160"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />

          {/* ! (exclamation mark) */}
          <path
            ref={(el) => {
              if (el) pathRefs.current[13] = el
            }}
            d="M 590,120 L 590,155 M 590,165 L 590,168"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />
        </svg>

        {/* Scroll indicator arrow */}
        {showArrow && (
          <button
            ref={arrowRef}
            onClick={handleArrowClick}
            className="flex flex-col items-center gap-2 text-white hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
          >
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
