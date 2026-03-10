/**
 * useActiveSection.ts — IntersectionObserver hook that tracks which section
 * is currently in view. Used by NavBar to highlight the active nav link.
 */

import { useState, useEffect } from 'react'

/**
 * Observes sections by their IDs and returns the ID of the currently visible one.
 * Uses a rootMargin that biases toward the top 30–60% of the viewport.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    /* Create one observer per section with viewport margin bias */
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            /* Update active ID when section crosses into the biased zone */
            if (entry.isIntersecting) {
              setActiveId(id)
            }
          })
        },
        { rootMargin: '-30% 0px -60% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    /* Cleanup all observers on unmount */
    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds])

  return activeId
}
