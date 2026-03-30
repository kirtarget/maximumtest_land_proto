'use client'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function EgeHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FD7E14 0%, #e06000 55%, #c04a00 100%)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-white/5 rounded-full translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-5">
            Актуально для ЕГЭ 2026
          </div>

          <h1 className="text-[32px] sm:text-[38px] lg:text-[52px] font-bold text-white leading-[1.15] mb-5">
            Подготовка к ЕГЭ онлайн и в классе —{' '}
            <span className="underline decoration-white/50 decoration-4 underline-offset-4">
              с гарантией результата
            </span>
          </h1>

          <p className="text-white/90 text-base md:text-xl leading-relaxed mb-8 max-w-2xl">
            Берём на себя ответственность: ваш ребёнок изучит все темы
            и сдаст экзамен на <strong>80+ баллов</strong>. Гарантия прописана в договоре.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="#final-form" variant="white" label="ege_hero_cta">
              Записаться на бесплатный урок
            </Button>
            <a
              href="#predmety"
              className="inline-flex items-center justify-center h-[52px] px-7 border-2 border-white/40 text-white text-base font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Выбрать предмет
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {['13 лет готовим', '450 000 учеников', '65 городов', 'Одобрено ФИПИ'].map(b => (
              <span key={b} className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full px-3 py-1.5">
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
