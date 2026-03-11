'use client'
import { useEffect, useRef, useState } from 'react'

interface Props { number: string; label: string }

function useCountUp(target: string, active: boolean) {
  const [val, setVal] = useState('0')
  useEffect(() => {
    if (!active) return
    const m = target.match(/^([\d\s]+)(.*?)$/)
    if (!m) { setVal(target); return }
    const num = parseInt(m[1].replace(/\s/g, ''), 10)
    const suf = m[2]
    const dur = 1400
    const t0 = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(e * num).toLocaleString('ru-RU') + suf)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target])
  return val
}

export default function StatCard({ number, label }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const display = useCountUp(number, active)
  return (
    <div ref={ref} className="flex flex-col items-center text-center min-w-[130px] px-4">
      <span className="text-4xl md:text-5xl font-bold text-[#FD7E14] leading-none">{display}</span>
      <span className="mt-2 text-sm md:text-base text-muted leading-snug uppercase tracking-wide font-medium">{label}</span>
    </div>
  )
}
