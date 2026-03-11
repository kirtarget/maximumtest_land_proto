'use client'
import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

const DEPTHS = [25, 50, 75, 90] as const

export default function ScrollDepthTracker() {
  const fired = useRef(new Set<number>())
  useEffect(() => {
    const onScroll = () => {
      const pct = Math.round(((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100)
      for (const d of DEPTHS) {
        if (pct >= d && !fired.current.has(d)) {
          fired.current.add(d)
          trackScrollDepth(d)
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return null
}
