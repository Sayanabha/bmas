// src/hooks/useReveal.js
// Attaches an IntersectionObserver to any container ref.
// When children with class "reveal" scroll into view,
// adds class "visible" → triggers the CSS transition in global.css

import { useEffect } from 'react'

export function useReveal(ref, options = {}) {
  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Once visible, stop observing — animation plays once
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,   // trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px',  // slightly before it fully enters
        ...options,
      }
    )

    // Observe every child with class "reveal"
    const revealEls = container.querySelectorAll('.reveal')
    revealEls.forEach(el => observer.observe(el))

    // Cleanup on unmount
    return () => observer.disconnect()
  }, [ref])
}