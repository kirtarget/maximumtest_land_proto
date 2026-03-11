'use client'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="bg-[#FD7E14] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-white/5 rounded-full translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-6">
              Гарантия результата в договоре
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] mb-5">
              Школа, которая<br />
              доводит до результата.<br />
              <span className="underline decoration-white/50 decoration-4 underline-offset-4">
                Гарантированно.
              </span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
              Берём на себя ответственность: ваш ребёнок изучит все темы
              и сдаст экзамен на <strong>80+ баллов или оценку 5</strong>.
            </p>
            <p className="text-white/75 text-base mb-8 max-w-lg">
              Подготовка становится понятным планом, а не хаосом и источником тревоги.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="#quiz" size="lg" variant="white" label="hero_primary" className="font-bold"
              >
                Узнать стоимость
              </Button>
              <Button
                href="tel:88007072562" size="lg" label="hero_phone"
                className="border-2 border-white/60 text-white hover:bg-white/10"
              >
                Позвонить бесплатно
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['13 лет готовим к экзаменам', '450 000 учеников', '65 городов', 'Одобрено ФИПИ'].map(b => (
                <span key={b} className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full px-4 py-1.5">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 bg-white/15 backdrop-blur-sm rounded-[24px] p-7 border border-white/20 min-w-[220px]"
          >
            {[
              { n: '93%', l: 'доходят до конца курса' },
              { n: '80+', l: 'баллов — каждый 3-й' },
              { n: '90+', l: 'баллов — каждый 5-й' },
              { n: '100%', l: 'возврат, если не сдал' },
            ].map(s => (
              <div key={s.l} className="flex flex-col">
                <span className="text-white font-bold text-3xl leading-none">{s.n}</span>
                <span className="text-white/75 text-sm mt-1">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
