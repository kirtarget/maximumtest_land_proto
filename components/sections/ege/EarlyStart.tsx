'use client'
import { motion } from 'framer-motion'
import { Clock, BarChart3, Target, BookOpen, Brain, Layers, ArrowRight, Quote } from 'lucide-react'

const cards = [
  {
    icon: Clock,
    number: '+12',
    suffix: 'баллов',
    text: 'у учеников, начавших за 1,5 года, по сравнению с теми, кто готовился 3–4 месяца',
    detail: 'Равномерная подготовка с 10 класса позволяет закрыть пробелы и пройти программу дважды',
    gradient: 'from-purple-500/20 to-purple-500/5',
    accent: 'text-purple-400',
    iconBg: 'bg-purple-500/20',
    ring: 'ring-purple-500/20',
  },
  {
    icon: BarChart3,
    number: '10',
    suffix: 'пробных экзаменов',
    text: 'за курс — каждый с полным разбором ошибок и корректировкой плана',
    detail: 'Ученики, регулярно пишущие пробники, набирают в среднем на 9 баллов выше',
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
    detail: 'При среднем по стране 55–63 балла наши выпускники стабильно превышают этот уровень',
    gradient: 'from-blue-500/20 to-blue-500/5',
    accent: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    ring: 'ring-blue-500/20',
  },
]

const proofs = [
  {
    icon: Layers,
    number: '01',
    title: 'ЕГЭ охватывает программу с 5 по 11 класс',
    desc: 'Объём материала огромный — за полгода его невозможно качественно освоить. Два года дают время на глубокое понимание каждой темы.',
  },
  {
    icon: Brain,
    number: '02',
    title: 'Не забыть то, что учил к ОГЭ',
    desc: 'Подготовка в 10 классе сохраняет и укрепляет базу, наработанную к ОГЭ. Без практики знания быстро забываются.',
  },
  {
    icon: BookOpen,
    number: '03',
    title: 'Основа для уверенного старта в 11 классе',
    desc: 'В 10 классе закрываем пробелы и создаём прочный фундамент. В 11 классе — финишный рывок, а не паника с нуля.',
  },
]

export default function EarlyStart() {
  return (
    <section className="overflow-hidden">
      {/* Тёмная зона — заголовок + stat-карточки */}
      <div className="bg-dark relative">
        {/* Декоративный градиент */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark2 via-dark to-dark" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          {/* Бейдж ФИПИ */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 text-orange text-sm font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              Рекомендация ФИПИ — начинать за 2 года до экзамена
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-[44px] md:leading-tight font-bold text-white text-center max-w-3xl mx-auto"
          >
            Подготовка к ЕГЭ с 10 класса повышает шансы{' '}
            <span className="text-orange">поступления на бюджет</span>
          </motion.h2>

          {/* Stat-карточки */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {cards.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className={`relative bg-gradient-to-br ${c.gradient} backdrop-blur-sm rounded-2xl p-6 ring-1 ${c.ring}`}
                >
                  <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${c.accent}`} />
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-[48px] font-bold leading-none text-white`}>{c.number}</span>
                    <span className={`text-base font-semibold ${c.accent}`}>{c.suffix}</span>
                  </div>
                  <p className="text-white/80 text-base font-medium leading-snug">{c.text}</p>
                  <p className="text-white/50 text-sm leading-relaxed mt-2">{c.detail}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Светлая зона — доказательства */}
      <div className="bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-center text-muted font-semibold text-sm uppercase tracking-wider mb-8"
          >
            Почему именно с 10 класса
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofs.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-2xl p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-200 relative"
                >
                  {/* Номер шага */}
                  <span className="absolute top-5 right-5 text-[64px] font-bold leading-none text-dark/[0.04] select-none">
                    {p.number}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/15 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2 leading-snug">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Цитата */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.06)] relative"
          >
            <Quote className="absolute top-6 left-6 w-10 h-10 text-orange/15" />
            <p className="text-dark text-lg leading-relaxed relative z-10 pl-6">
              «Не откладывайте подготовку на потом. Каждый месяц промедления — это темы,
              которые придётся проходить в авральном режиме. Начните сейчас — и к 11 классу
              ваш ребёнок будет готов, пока другие только начнут паниковать.»
            </p>
          </motion.div>

          <p className="text-xs text-muted/60 mt-6 text-center">
            На основе результатов выпускников MAXIMUM Education 2023–2025 и данных Рособрнадзора
          </p>
        </div>
      </div>
    </section>
  )
}
