/**
 * useScrollReveal.ts — IntersectionObserver hook for scroll-triggered animations.
 * Adds the '.in' class to elements with '.reveal' when they enter the viewport.
 * Unobserves after triggering so the animation only plays once.
 */

import { useLayoutEffect } from 'react'

export const useScrollReveal = (): void => {
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (inView) {
        /* Already visible — show immediately, no animation needed */
        el.classList.add('in')
      } else {
        /* Off-screen — hide it and let the observer reveal it on scroll */
        el.setAttribute('data-pending', '')
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])
}
