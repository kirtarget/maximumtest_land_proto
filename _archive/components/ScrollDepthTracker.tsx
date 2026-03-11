'use client'

import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

const DEPTHS = [25, 50, 75, 90] as const

export default function ScrollDepthTracker() {
  const fired = useRef(new Set<number>())

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const pct = Math.round((scrolled / total) * 100)

      for (const depth of DEPTHS) {
        if (pct >= depth && !fired.current.has(depth)) {
          fired.current.add(depth)
          trackScrollDepth(depth)
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
