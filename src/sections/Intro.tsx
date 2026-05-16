import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface IntroProps {
  onComplete: () => void
}

export function Intro({ onComplete }: IntroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRefs = useRef<SVGPathElement[]>([])

  const spawnConfetti = () => {
    const container = containerRef.current
    if (!container) return

    const colors = ['#F8C8B5', '#D8CCE8', '#C7D9C0', '#F5E6A8', '#ffffff', '#E89A85', '#9B86C2']

    for (let i = 0; i < 80; i++) {
      const el = document.createElement('div')
      const color = colors[Math.floor(Math.random() * colors.length)]
      const isCircle = Math.random() > 0.5
      const size = 5 + Math.random() * 9

      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${isCircle ? '50%' : '2px'};
        left: 50%;
        top: 50%;
        margin-left: -${size / 2}px;
        margin-top: -${size / 2}px;
        pointer-events: none;
        z-index: 60;
      `
      container.appendChild(el)

      const angle = Math.random() * Math.PI * 2
      const distance = 150 + Math.random() * 250
      gsap.fromTo(
        el,
        { x: 0, y: 0, opacity: 1, rotation: 0, scale: 1 },
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          opacity: 0,
          rotation: Math.random() * 720 - 360,
          scale: 0.2,
          duration: 1.0 + Math.random() * 0.6,
          ease: 'power2.out',
          delay: Math.random() * 0.4,
          onComplete: () => el.remove(),
        }
      )
    }
  }

  const handleTransition = () => {
    if (!containerRef.current) return
    gsap.to(containerRef.current, {
      y: '-100%',
      duration: 0.9,
      ease: 'power3.inOut',
      onComplete: () => onComplete(),
    })
  }

  useEffect(() => {
    // Animate all paths as if being written
    if (pathRefs.current.length > 0) {
      const timeline = gsap.timeline({
        onComplete: () => {
          spawnConfetti()
          gsap.delayedCall(1.5, handleTransition)
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

      </div>
    </div>
  )
}
