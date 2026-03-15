'use client'
import { motion } from 'framer-motion'
import LeadForm from '@/components/ui/LeadForm'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FD7E14 0%, #e06000 55%, #c04a00 100%)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-white/5 rounded-full translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-5">
              Гарантия результата в договоре
            </div>

            <h1 className="text-[32px] sm:text-[38px] lg:text-[52px] font-bold text-white leading-[1.15] mb-5">
              Школа, которая доводит до результата.{' '}
              <span className="underline decoration-white/50 decoration-4 underline-offset-4">
                Гарантированно.
              </span>
            </h1>

            <p className="text-white/90 text-base md:text-xl leading-relaxed mb-3 max-w-xl">
              Берём на себя ответственность: ваш ребёнок изучит все темы
              и сдаст экзамен на <strong>80+ баллов или оценку 5</strong>.
            </p>
            <p className="text-white/75 text-sm md:text-base mb-7 max-w-lg">
              Подготовка становится понятным планом, а не хаосом и источником тревоги.
            </p>

            <LeadForm variant="dark" label="hero_form" />

            <div className="mt-7 flex flex-wrap gap-2">
              {['13 лет готовим', '450 000 учеников', '65 городов', 'Одобрено ФИПИ'].map(b => (
                <span key={b} className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full px-3 py-1.5">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 bg-white/15 backdrop-blur-sm rounded-[24px] p-7 border border-white/20 min-w-[260px] max-w-[280px]"
          >
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-sm font-semibold">4.7 / 5</span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed italic">
              «Сын набрал 89 баллов по математике. Куратор держала нас в курсе каждую неделю — ни разу не почувствовали себя брошенными»
            </p>
            <div className="flex items-center gap-3 pt-1 border-t border-white/20">
              <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center text-white font-bold text-sm">Е</div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">Елена К.</p>
                <p className="text-white/60 text-xs mt-0.5">мама ученика, ЕГЭ 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
              <span className="text-lg">🏆</span>
              <span className="text-white text-xs font-medium">1 200+ отзывов на сайтах-агрегаторах</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
