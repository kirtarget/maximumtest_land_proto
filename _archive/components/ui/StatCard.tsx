'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCardProps {
  number: string
  label: string
  note?: string
}

function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return

    const match = target.match(/^([\d\s]+)(.*?)$/)
    if (!match) { setDisplay(target); return }

    const numeric = parseInt(match[1].replace(/\s/g, ''), 10)
    const suffix = match[2]
    const duration = 1500
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * numeric)
      setDisplay(current.toLocaleString('ru-RU') + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target])

  return display
}

export default function StatCard({ number, label, note }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const display = useCountUp(number, inView)

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4 min-w-[140px]">
      <span className="text-4xl md:text-5xl font-bold text-accent leading-none">{display}</span>
      <span className="mt-2 text-base font-medium text-dark">{label}</span>
      {note && <span className="mt-1 text-sm text-mid">{note}</span>}
    </div>
  )
}
