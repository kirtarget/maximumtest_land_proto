'use client'
import { motion } from 'framer-motion'
import { Clock, BarChart3, Target } from 'lucide-react'

const cards = [
  {
    icon: Clock,
    number: '+12',
    suffix: 'баллов',
    text: 'у учеников, начавших за 1,5 года, по сравнению с теми, кто готовился 3–4 месяца',
    detail: 'Равномерная подготовка с 10 класса позволяет закрыть пробелы и пройти программу дважды',
    bg: 'bg-[#F3E8FF]',
    accent: 'text-purple-700',
    iconBg: 'bg-purple-100',
  },
  {
    icon: BarChart3,
    number: '10',
    suffix: 'пробных экзаменов',
    text: 'за курс — каждый с полным разбором ошибок и корректировкой плана',
    detail: 'Ученики, регулярно пишущие пробники, набирают в среднем на 9 баллов выше',
    bg: 'bg-[#ECFDF5]',
    accent: 'text-green-700',
    iconBg: 'bg-green-100',
  },
  {
    icon: Target,
    number: '80+',
    suffix: 'баллов',
    text: 'набирает каждый третий ученик MAXIMUM на ЕГЭ',
    detail: 'При среднем по стране 55–63 балла наши выпускники стабильно превышают этот уровень',
    bg: 'bg-[#EFF6FF]',
    accent: 'text-blue-700',
    iconBg: 'bg-blue-100',
  },
]

const timeline = [
  { months: '18–24 мес', label: '10 класс, осень', desc: 'Закрытие пробелов, сильная база', color: 'bg-green-500' },
  { months: '12 мес', label: '10 класс, весна', desc: 'Полный курс подготовки', color: 'bg-orange' },
  { months: '6 мес', label: '11 класс, декабрь', desc: 'Интенсив, но без запаса', color: 'bg-amber-500' },
  { months: '3 мес', label: '11 класс, март', desc: 'Только повторение', color: 'bg-red-500' },
]

export default function EarlyStart() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Чем раньше старт — тем выше балл
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            Ученики, начавшие подготовку за 1,5 года, набирают на ЕГЭ в среднем на 12 баллов больше, чем те, кто готовился 3–4 месяца перед экзаменом.
          </p>
        </div>

        {/* Карточки с ключевыми цифрами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${c.bg} rounded-[20px] p-7 flex flex-col gap-3`}
              >
                <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${c.accent}`} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-[44px] font-bold leading-none ${c.accent}`}>{c.number}</span>
                  <span className={`text-base font-semibold ${c.accent}`}>{c.suffix}</span>
                </div>
                <p className="text-dark text-base font-medium">{c.text}</p>
                <p className="text-dark/60 text-sm leading-relaxed">{c.detail}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Таймлайн подготовки */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-[20px] p-7 md:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.06)] max-w-3xl mx-auto"
        >
          <h3 className="text-lg font-bold text-dark mb-6 text-center">
            Когда начинать подготовку к ЕГЭ?
          </h3>

          {/* Desktop: горизонтальный */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className={`w-3.5 h-3.5 rounded-full ${t.color}`} />
                <span className="font-bold text-dark text-lg">{t.months}</span>
                <span className="text-muted text-sm">({t.label})</span>
                <p className="text-muted text-sm mt-1">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: вертикальный */}
          <div className="md:hidden space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${t.color} shrink-0 mt-1.5`} />
                  {i < timeline.length - 1 && <div className="w-px h-8 bg-border" />}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-dark">{t.months}</span>
                    <span className="text-muted text-sm">({t.label})</span>
                  </div>
                  <p className="text-muted text-sm mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <blockquote className="mt-10 border-l-4 border-orange pl-5 max-w-3xl mx-auto">
          <p className="text-dark text-lg leading-relaxed italic">
            «Десятый класс — оптимальное время для старта. Ученик проходит программу без спешки,
            пишет пробные экзамены и подходит к 11 классу с уверенностью, а не с паникой.»
          </p>
        </blockquote>

        <p className="text-sm text-muted mt-4 text-center">
          На основе результатов выпускников MAXIMUM Education 2023–2025 и данных Рособрнадзора
        </p>
      </div>
    </section>
  )
}
