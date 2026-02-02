import React from 'react'

interface StickyProjectImageProps {
  image: string
  title: string
  isActive: boolean
}

/**
 * Sticky Project Image Component
 * 
 * POSITIONING STRATEGY:
 * - Uses CSS `position: sticky` to pin the container
 * - Set `top: 96px` (6rem) to leave space for header
 * - Stacking context managed with z-index
 * 
 * IMAGE TRANSITION APPROACH:
 * - Crossfade: opacity transition (300-500ms)
 * - Subtle scale: 0.95 → 1.0 during fade-in
 * - Uses CSS transitions for smooth, GPU-accelerated animation
 * - Each image layer uses absolute positioning for perfect overlap
 * 
 * PERFORMANCE CONSIDERATIONS:
 * - will-change: opacity, transform (hints to browser)
 * - transform: translateZ(0) (promotes to GPU layer)
 * - Only animates opacity and transform (cheap operations)
 * - No layout recalculations during scroll
 * - backdrop-filter with efficient blur values
 */

export function StickyProjectImage({ image, title, isActive }: StickyProjectImageProps) {
  return (
    <div className="lg:px-6">
      {/* 
        Sticky container: pins to top while section scrolls
        Using sticky positioning ensures the image stays visible
        as users scroll through project descriptions
      */}
      <div className="sticky top-24 h-fit will-change-[opacity,transform]">
        {/*
          Image box: aspect ratio container with glass morphism effect
          Using aspect-square on mobile, aspect-auto on larger screens
          for responsive sizing without layout shift
        */}
        <div className="relative aspect-square md:aspect-auto md:h-96 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden group">
          {/*
            Crossfade Effect:
            - Opacity transition: active projects fade in (opacity: 1)
            - Inactive projects fade out (opacity: 0.2)
            - Duration: 700ms for smooth, intentional feel
            - Easing: ease-in-out for natural motion
          */}

          {/*
            Image Container:
            - Absolute positioning for perfect layering
            - scale and opacity transform for entrance animation
            - GPU accelerated with transform (not top/left)
            - Only changes when active state changes
          */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out will-change-[opacity,transform]"
            style={{
              transform: isActive ? 'scale(1)' : 'scale(0.95)',
              opacity: isActive ? 1 : 0.2,
              // translateZ promotes to GPU layer for smooth animation
              WebkitTransform: `${isActive ? 'scale(1)' : 'scale(0.95)'} translateZ(0)`,
            }}
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/40 pointer-events-none" />

          {/* Title overlay appears on image in active state */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-4 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
            }}
          >
            <p className="text-white text-sm font-semibold line-clamp-2">
              {title}
            </p>
          </div>
        </div>

        {/* Progress indicators are managed by parent component */}
      </div>
    </div>
  )
}

/**
 * DETAILED IMPLEMENTATION NOTES:
 * 
 * 1. POSITIONING STRATEGY
 * ========================
 * Why `sticky` instead of `fixed`:
 * - Sticky keeps the image within the section bounds
 * - Fixed would escape the section overflow context
 * - User can still see the image is part of the section
 * 
 * top: 96px = 6rem:
 * - Leaves space for fixed header (if present)
 * - Adjust based on your header height
 * - Can use CSS variable: top: var(--header-height)
 * 
 * Stacking context:
 * - z-index not needed within the section
 * - Sticky creates its own stacking context
 * - Ensures image stays above text but below modals
 * 
 * 2. IMAGE TRANSITION APPROACH
 * =============================
 * Crossfade (Primary):
 * - opacity: 0.2 → 1 (300-700ms)
 * - Most noticeable, feels premium
 * - Pairs well with subtle scale
 * 
 * Subtle Scale (Secondary):
 * - scale(0.95) → scale(1) (same duration)
 * - Combined with fade = entrance animation
 * - Inactive projects feel slightly "pulled back"
 * - Prevents image from feeling static
 * 
 * Duration: 700ms
 * - Fast enough to feel responsive (not sluggish)
 * - Slow enough to feel intentional (not jarring)
 * - Matches fade duration of text content
 * 
 * Easing: ease-in-out
 * - Eases in when starting fade-in
 * - Eases out when ending fade-out
 * - Prevents linear, robotic feel
 * 
 * 3. PERFORMANCE CONSIDERATIONS
 * ==============================
 * GPU Acceleration:
 * - Only animate opacity and transform properties
 * - These are GPU-accelerated in all modern browsers
 * - Avoid animating width, height, top, left, etc.
 * 
 * will-change directive:
 * - Tells browser to expect animation
 * - Browser pre-optimizes paint layer
 * - Removes after animation completes (CSS does this)
 * 
 * translateZ(0):
 * - Forces GPU layer creation
 * - Smooth on high-refresh displays
 * - Minimal memory cost on modern devices
 * 
 * Scroll performance:
 * - Scroll handler only changes isActive boolean
 * - CSS transitions handle the animation
 * - No JavaScript repaints during scroll
 * - Passive scroll listener for best performance
 * 
 * Layout shift prevention:
 * - Fixed aspect ratio container (aspect-square/aspect-auto)
 * - Image always fills its container
 * - Border, padding consistent across states
 * - No content reflow when image changes
 * 
 * Sticky positioning performance:
 * - Modern browsers optimize sticky well
 * - Used throughout modern web (Instagram, Medium, etc.)
 * - Preferred over JavaScript position tracking
 * - Better accessibility and keyboard support
 * 
 * 4. BROWSER COMPATIBILITY
 * =========================
 * Position sticky: 96%+ coverage (all modern browsers)
 * Transform opacity: 99%+ coverage
 * backdrop-filter: 89%+ coverage (graceful degradation)
 * 
 * Fallbacks:
 * - backdrop-filter: removes blur if unsupported
 * - sticky: falls back to normal flow (not ideal but works)
 * - transform: never needs fallback
 */
