'use client'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Flame } from 'lucide-react'

const benefits = [
  'Живые уроки уже на этой неделе',
  'Диагностика уровня и личный план подготовки',
  'Проверка домашних заданий от педагога',
  'Удобная платформа со всеми материалами',
]

export default function TenthGradeOptions() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Начните подготовку сейчас
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            3 формата на выбор: онлайн, гибрид или очно в 65 городах
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto bg-white rounded-[20px] p-8 md:p-10 ring-2 ring-orange shadow-[0_8px_40px_rgba(253,126,20,0.15)]"
        >
          <ul className="space-y-4 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base text-dark">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-orange/15 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-orange" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <a
            href="#quiz"
            className="flex items-center justify-center gap-2 w-full bg-orange text-white font-bold text-base py-4 rounded-xl hover:bg-orangeh transition-colors"
          >
            Начать подготовку сейчас
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Доп-оффер */}
          <div className="mt-6 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
            <Flame className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <p className="text-dark font-bold text-sm">Лето за 1 рубль</p>
              <p className="text-muted text-sm">Начните подготовку сейчас по специальной цене — и войдите в 11 класс готовыми</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
