'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

const links = [
  { label: 'Как мы готовим', href: '#mechanism' },
  { label: 'Преподаватели', href: '#teachers' },
  { label: 'Результаты', href: '#results' },
  { label: 'Цены', href: '#quiz' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 font-bold text-xl text-dark">
          MAXIMUM <span className="text-accent">Education</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-mid hover:text-accent transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:88007072562"
            className="flex items-center gap-1.5 text-sm text-mid hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            8 (800) 707-25-62
          </a>
          <Button href="#quiz" size="sm" label="navbar_cta">
            Начать подготовку
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-dark font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:88007072562"
            className="flex items-center gap-2 text-mid"
          >
            <Phone className="w-4 h-4" /> 8 (800) 707-25-62
          </a>
          <Button href="#quiz" size="sm" label="navbar_mobile_cta" className="w-full justify-center">
            Начать подготовку
          </Button>
        </div>
      )}
    </header>
  )
}
