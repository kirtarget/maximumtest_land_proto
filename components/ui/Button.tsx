'use client'
import { trackCtaClick } from '@/lib/analytics'

interface Props {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  label?: string
  className?: string
  disabled?: boolean
}

export default function Button({
  children, variant = 'primary', size = 'md',
  href, onClick, type = 'button', label, className = '', disabled,
}: Props) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 whitespace-nowrap'

  const sizes = { sm: 'h-10 px-5 text-sm', md: 'h-12 px-7 text-base', lg: 'h-14 px-8 text-lg' }

  const variants = {
    primary: 'bg-orange text-white hover:bg-orangeh disabled:bg-border disabled:text-muted',
    outline: 'border-2 border-orange text-orange hover:bg-orange hover:text-white',
    ghost:   'text-dark hover:bg-light',
    white:   'bg-white text-orange hover:bg-white/90',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const handleClick = () => {
    if (label) trackCtaClick(label)
    onClick?.()
  }

  if (href) {
    return <a href={href} className={cls} onClick={handleClick}>{children}</a>
  }

  return (
    <button type={type} className={cls} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  )
}
