'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Eye, BarChart3 } from 'lucide-react'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Учителя, которых отбирают как пилотов',
    body: 'Наши 2000 преподавателей прошли месячный буткемп: подача материала, интонация, жестикуляция, удержание внимания класса. Не все доходят до конца — это норма. К ученикам попадают только лучшие.',
  },
  {
    icon: Eye,
    title: 'Система, которая видит потерю внимания',
    body: 'Наша платформа отслеживает: переключение вкладок, активность камеры, вопросы в чате. Если ученик отвлёкся — преподаватель получает сигнал. Кураторы отсматривают записи уроков. Ни одно занятие не проходит мимо.',
  },
  {
    icon: BarChart3,
    title: 'Пробники каждый месяц + разбор каждой ошибки',
    body: 'Каждый месяц — пробный экзамен в условиях, близких к реальным. После — персональный разбор с преподавателем. Ученик видит рост с первого месяца. Это снимает тревогу лучше, чем любые слова.',
  },
]

export default function Mechanism() {
  return (
    <section id="mechanism" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Почему у нас 93% доходимость, а не 30%?
          </h2>
          <p className="mt-3 text-lg text-mid">Это не случайность. Это система.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-light rounded-2xl p-7 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-dark leading-snug">{p.title}</h3>
                <p className="text-mid leading-relaxed text-base">{p.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
