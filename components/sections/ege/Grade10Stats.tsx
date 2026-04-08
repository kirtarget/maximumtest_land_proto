'use client'
import { motion } from 'framer-motion'
import { Clock, BarChart3, Target } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    number: '+12',
    suffix: 'баллов',
    text: 'получают ученики, которые готовились 1,5 года, а не 3–4 месяца',
    detail: 'Равномерная подготовка с 10 класса позволяет закрыть пробелы и научить решать все типы заданий.',
    gradient: 'from-purple-500/20 to-purple-500/5',
    accent: 'text-purple-400',
    iconBg: 'bg-purple-500/20',
    ring: 'ring-purple-500/20',
  },
  {
    icon: BarChart3,
    number: '10',
    suffix: 'пробных экзаменов',
    text: 'каждый — с разбором ошибок и корректировкой плана подготовки',
    detail: 'Ученики, которые регулярно пишут пробники, получают в среднем на 9 баллов больше.',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20',
    ring: 'ring-emerald-500/20',
  },
  {
    icon: Target,
    number: '80+',
    suffix: 'баллов',
    text: 'набирает каждый третий ученик MAXIMUM на ЕГЭ',
    detail: 'Средний уровень по стране — 55–63 балла. Наши выпускники стабильно получают более высокий результат.',
    gradient: 'from-blue-500/20 to-blue-500/5',
    accent: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    ring: 'ring-blue-500/20',
  },
]

export default function Grade10Stats() {
  return (
    <section className="bg-dark overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-dark2 via-dark to-dark" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-[40px] md:leading-tight font-bold text-white text-center max-w-3xl mx-auto"
        >
          Подготовка к ЕГЭ с 10 класса —{' '}
          <span className="text-orange">больше шансов поступить на бюджет</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`relative bg-gradient-to-br ${s.gradient} backdrop-blur-sm rounded-2xl p-6 ring-1 ${s.ring}`}
              >
                <div className={`w-10 h-10 ${s.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${s.accent}`} />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[48px] font-bold leading-none text-white">{s.number}</span>
                  <span className={`text-base font-semibold ${s.accent}`}>{s.suffix}</span>
                </div>
                <p className="text-white/80 text-base font-medium leading-snug">{s.text}</p>
                <p className="text-white/50 text-sm leading-relaxed mt-2">{s.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
