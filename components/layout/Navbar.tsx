'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'ОГЭ/ЕГЭ', href: '#mechanism' },
  { label: 'Преподаватели', href: '#teachers' },
  { label: 'Результаты', href: '#results' },
  { label: 'Цены', href: '#quiz' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-300 bg-white ${scrolled ? 'shadow-md' : 'border-b border-border'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[#FD7E14] font-bold text-2xl leading-none">M</span>
          <span className="font-bold text-dark text-lg leading-none hidden sm:block">MAXIMUM</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-dark hover:text-[#FD7E14] transition-colors rounded-lg hover:bg-light">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:88007072562"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-[#FD7E14] transition-colors">
            <Phone className="w-4 h-4" />
            8 (800) 707-25-62
          </a>
          <Button href="#quiz" size="sm" label="navbar_cta">
            Начать подготовку
          </Button>
        </div>

        {/* Mobile burger */}
        <button className="lg:hidden p-2 text-dark" onClick={() => setOpen(!open)} aria-label="Меню">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border px-4 pb-4 flex flex-col gap-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="py-3 font-medium text-dark hover:text-[#FD7E14] transition-colors border-b border-border last:border-0"
              onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a href="tel:88007072562" className="flex items-center gap-2 text-muted text-sm">
              <Phone className="w-4 h-4" /> 8 (800) 707-25-62
            </a>
            <Button href="#quiz" label="navbar_mobile_cta" className="justify-center">
              Начать подготовку
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
