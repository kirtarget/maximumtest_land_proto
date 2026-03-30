'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const subjects = [
  { name: 'Математика', slug: 'matematika', note: 'профиль' },
  { name: 'Математика', slug: 'matematika-baza', note: 'база' },
  { name: 'Русский язык', slug: 'russkiy-yazyk' },
  { name: 'Обществознание', slug: 'obschestvoznanie' },
  { name: 'Физика', slug: 'fizika' },
  { name: 'Химия', slug: 'himiya' },
  { name: 'Биология', slug: 'biologiya' },
  { name: 'Информатика', slug: 'informatika' },
  { name: 'История', slug: 'istoriya' },
  { name: 'Английский', slug: 'anglijskij-yazyk' },
  { name: 'География', slug: 'geografiya' },
  { name: 'Литература', slug: 'literatura' },
]

export default function SubjectsGrid() {
  return (
    <section id="predmety" className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Выберите предмет ЕГЭ
          </h2>
          <p className="mt-3 text-muted text-lg">Программа соответствует кодификатору ФИПИ 2026</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((s, i) => (
            <motion.a
              key={`${s.slug}-${i}`}
              href={`/ege/${s.slug}/`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-white rounded-[16px] p-5 border border-border hover:border-orange hover:shadow-md transition-all group flex items-center justify-between gap-2"
            >
              <div>
                <p className="font-semibold text-dark group-hover:text-orange transition-colors">{s.name}</p>
                {s.note && <p className="text-sm text-muted mt-0.5">{s.note}</p>}
              </div>
              <ChevronRight className="w-4 h-4 text-muted group-hover:text-orange transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
