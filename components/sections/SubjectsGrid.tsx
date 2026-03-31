'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const subjects = [
  { name: 'Математика', sub: 'профиль' },
  { name: 'Математика', sub: 'база' },
  { name: 'Русский язык' },
  { name: 'Обществознание' },
  { name: 'Физика' },
  { name: 'Химия' },
  { name: 'Биология' },
  { name: 'Информатика' },
  { name: 'История' },
  { name: 'Английский' },
  { name: 'География' },
  { name: 'Литература' },
]

export default function SubjectsGrid() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Выберите предмет ЕГЭ
          </h2>
          <p className="mt-3 text-muted text-lg">
            Программа соответствует кодификатору ФИПИ 2026
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map((s, i) => (
            <motion.a
              key={`${s.name}-${s.sub || i}`}
              href="#quiz"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group flex items-center justify-between bg-white rounded-2xl px-5 py-4 border border-border hover:border-orange/40 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div>
                <span className="text-base font-semibold text-dark">{s.name}</span>
                {s.sub && (
                  <span className="block text-sm text-muted mt-0.5">{s.sub}</span>
                )}
              </div>
              <ChevronRight className="w-5 h-5 text-muted/50 group-hover:text-orange transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
