/**
 * useScrollReveal.ts — IntersectionObserver hook for scroll-triggered animations.
 * Adds the '.in' class to elements with '.reveal' when they enter the viewport.
 * Unobserves after triggering so the animation only plays once.
 */

import { useEffect } from 'react'

/**
 * Observe all .reveal elements in the DOM and add .in when visible.
 * Call this once in the top-level page component (Home.tsx).
 */
export function useScrollReveal(): void {
  useEffect(() => {
    /* Create observer that triggers at 7% visibility */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            /* Add .in class to trigger the CSS transition */
            entry.target.classList.add('in')
            /* Stop watching — animation should only fire once */
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07 }
    )

    /* Observe all elements marked with the .reveal class */
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    /* Cleanup: disconnect observer when component unmounts */
    return () => observer.disconnect()
  }, [])
}
