'use client'

import { trackCtaClick, getUtmParams } from '@/lib/analytics'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  label?: string
  className?: string
  disabled?: boolean
}

function buildHref(href: string): string {
  if (typeof window === 'undefined') return href
  if (href.startsWith('tel:') || href.startsWith('#')) return href
  const utm = getUtmParams()
  if (!Object.keys(utm).length) return href
  const url = new URL(href, window.location.origin)
  Object.entries(utm).forEach(([k, v]) => url.searchParams.set(k, v))
  return url.toString()
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  label,
  className = '',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-accent text-white hover:bg-[#b82424] focus-visible:ring-accent',
    outline:
      'border-2 border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  function handleClick() {
    if (label) trackCtaClick(label)
    onClick?.()
  }

  if (href) {
    const finalHref = href.startsWith('tel:') || href.startsWith('#')
      ? href
      : (typeof window !== 'undefined' ? buildHref(href) : href)

    return (
      <a href={finalHref} className={cls} onClick={handleClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  )
}
