'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'

type NavLink =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: { label: string; href: string }[] }

const navLinks: NavLink[] = [
  {
    label: 'ОГЭ/ЕГЭ',
    children: [
      { label: 'Подготовка к ЕГЭ', href: '/ege/' },
      { label: 'Как это работает', href: '#mechanism' },
    ],
  },
  { label: 'Преподаватели', href: '#teachers' },
  { label: 'Результаты', href: '#results' },
  { label: 'Цены', href: '#quiz' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  function openDropdown() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setDropdownOpen(true)
  }
  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-300 bg-white ${scrolled ? 'shadow-md' : 'border-b border-border'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-orange font-bold text-2xl leading-none">M</span>
          <span className="font-bold text-dark text-lg leading-none hidden sm:block">MAXIMUM</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l, idx) =>
            l.children ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-dark hover:text-orange transition-colors rounded-lg hover:bg-light"
                  onClick={() => setDropdownOpen(v => !v)}
                >
                  {l.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-border py-1.5 min-w-[200px] z-50">
                    {l.children.map(child => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-dark hover:text-orange hover:bg-light transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={l.href} href={l.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-dark hover:text-orange transition-colors rounded-lg hover:bg-light">
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:88007072562"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-orange transition-colors">
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-border px-4 pb-4 flex flex-col gap-1 overflow-hidden"
          >
            {navLinks.map((l, idx) =>
              l.children ? (
                <div key={idx}>
                  <p className="py-3 font-medium text-muted text-xs uppercase tracking-wide">{l.label}</p>
                  {l.children.map(child => (
                    <a key={child.href} href={child.href}
                      className="block pl-3 py-2.5 font-medium text-dark hover:text-orange transition-colors border-b border-border last:border-0"
                      onClick={() => setOpen(false)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a key={l.href} href={l.href}
                  className="py-3 font-medium text-dark hover:text-orange transition-colors border-b border-border last:border-0"
                  onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              )
            )}
            <div className="pt-3 flex flex-col gap-3">
              <a href="tel:88007072562" className="flex items-center gap-2 text-muted text-sm">
                <Phone className="w-4 h-4" /> 8 (800) 707-25-62
              </a>
              <Button href="#quiz" label="navbar_mobile_cta" className="justify-center">
                Начать подготовку
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
