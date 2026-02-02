import { useEffect, useRef, useState } from 'react'

interface UseProjectScrollOptions {
  projectCount: number
  threshold?: number // Percentage (0-1) of segment height to trigger change
}

/**
 * Hook to track scroll position and determine active project
 * 
 * HOW IT WORKS:
 * 1. Gets the section's position on the page
 * 2. Calculates total scrollable height (right column content)
 * 3. Divides into equal segments (one per project)
 * 4. Uses threshold to prevent flickering at boundaries
 * 5. Returns the active project index
 * 
 * SCROLL CALCULATION:
 * - activeIndex = Math.floor(scrollProgress / segmentHeight)
 * - scrollProgress = (window.scrollY - sectionTop) 
 * - Clamped between 0 and projectCount - 1
 */
export function useProjectScroll({ projectCount, threshold = 0.3 }: UseProjectScrollOptions) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !rightColumnRef.current) return

      // Get section's position relative to viewport
      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionTop = window.scrollY + sectionRect.top

      // Get the right column (scrollable content) height
      const rightColumnHeight = rightColumnRef.current.scrollHeight

      // Calculate scroll progress relative to this section only
      const scrollPastSectionStart = Math.max(0, window.scrollY - sectionTop)
      const progress = Math.min(1, scrollPastSectionStart / rightColumnHeight)

      setScrollProgress(progress)

      // ACTIVE PROJECT CALCULATION:
      // Divide scrollable area into equal segments per project
      // Each project gets 1/projectCount of the total height
      const segmentHeight = rightColumnHeight / projectCount
      const scrollPosition = scrollPastSectionStart

      // Calculate raw index
      let rawIndex = Math.floor(scrollPosition / segmentHeight)

      // Apply threshold to prevent flickering
      // If we're within threshold% of the next segment, advance to next project
      const positionInSegment = scrollPosition % segmentHeight
      const thresholdPixels = segmentHeight * threshold

      if (positionInSegment > segmentHeight - thresholdPixels && rawIndex < projectCount - 1) {
        rawIndex += 1
      }

      // Clamp to valid range
      const clampedIndex = Math.max(0, Math.min(projectCount - 1, rawIndex))
      setActiveProjectIndex(clampedIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [projectCount])

  return {
    sectionRef,
    rightColumnRef,
    activeProjectIndex,
    scrollProgress,
  }
}

/**
 * BREAKDOWN OF THE ALGORITHM:
 * 
 * STEP 1: Get Section Position
 * - sectionTop = window.scrollY + sectionRect.top
 * - This gives us the section's absolute position on the page
 * 
 * STEP 2: Calculate Scroll Progress
 * - scrollPastSectionStart = window.scrollY - sectionTop
 * - This is how far we've scrolled INTO this section
 * 
 * STEP 3: Calculate Segment Height
 * - Each project gets equal space: rightColumnHeight / projectCount
 * - For 3 projects with 1200px content: each gets 400px
 * 
 * STEP 4: Determine Active Index
 * - rawIndex = Math.floor(scrollPosition / segmentHeight)
 * - If scrolling at 500px with 400px segments: index = 1 (second project)
 * 
 * STEP 5: Apply Threshold to Avoid Flickering
 * - When scrolling near boundaries (bottom 30% of segment), advance to next
 * - This creates hysteresis - prevents rapid toggling
 * - Example: with threshold=0.3 and segmentHeight=400px
 *   - Need to scroll 120px into next segment before it activates
 *   - This smooths the transition experience
 * 
 * STEP 6: Clamp the Result
 * - Ensure index stays within 0 to projectCount-1
 * - Prevents out-of-bounds errors
 * 
 * SCREEN SIZE HANDLING:
 * - Works automatically because we use rightColumnHeight
 * - On mobile: shorter column = faster project transitions
 * - On desktop: taller column = slower transitions
 * - Both feel natural because scroll distance scales with content
 * 
 * FLICKERING PREVENTION:
 * - Threshold creates a "dead zone" where index doesn't change
 * - Users need to scroll enough to commit to the transition
 * - Think of it like a commit point: once you pass it, the project sticks
 * 
 * OPTIONAL: Adjust threshold parameter
 * - threshold = 0.2 = more sensitive (changes at 80% through segment)
 * - threshold = 0.3 = balanced (changes at 70% through segment)
 * - threshold = 0.5 = less sensitive (changes at 50% through segment)
 */
