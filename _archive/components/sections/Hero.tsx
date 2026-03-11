'use client'

import { motion } from 'framer-motion'
import { Shield, Users, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'

const badges = [
  { icon: Users, text: '2000 преподавателей' },
  { icon: MapPin, text: '65 городов' },
  { icon: Shield, text: 'Одобрено ФИПИ' },
]

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-dark to-dark2 text-white overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Подготовка к ЕГЭ и ОГЭ —<br />
              <span className="text-accent">без паники</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Пока другие вспоминают подготовку к ЕГЭ с ужасом — наши ученики сдают спокойно.
            </p>
            <p className="mt-3 text-base md:text-lg text-white/70">
              93% учеников доходят до экзамена. Каждый третий — 80+ баллов.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button href="#quiz" size="lg" label="hero_primary">
              Узнать стоимость
            </Button>
            <Button href="tel:88007072562" size="lg" variant="outline" label="hero_phone">
              Позвонить бесплатно
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90"
              >
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
