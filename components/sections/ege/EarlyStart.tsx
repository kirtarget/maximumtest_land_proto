'use client'
import { motion } from 'framer-motion'
import { Clock, BarChart3, Target, BookOpen, Brain, Layers, ArrowRight } from 'lucide-react'

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

const proofs = [
  {
    icon: Layers,
    title: 'ЕГЭ охватывает программу с 5 по 11 класс',
    desc: 'Объём материала огромный — за полгода его невозможно качественно освоить. Два года дают время на глубокое понимание каждой темы.',
  },
  {
    icon: Brain,
    title: 'Не забыть то, что учил к ОГЭ',
    desc: 'Подготовка в 10 классе сохраняет и укрепляет базу, наработанную к ОГЭ. Без практики знания быстро забываются.',
  },
  {
    icon: BookOpen,
    title: 'Основа для уверенного старта в 11 классе',
    desc: 'В 10 классе закрываем пробелы и создаём прочный фундамент. В 11 классе — финишный рывок, а не паника с нуля.',
  },
]

export default function EarlyStart() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Подготовка к ЕГЭ с 10 класса повышает шансы поступления на бюджет
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            ФИПИ рекомендуют начинать подготовку за 2 года до экзамена
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

        {/* Доказательства — почему начинать в 10 классе */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {proofs.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-[20px] p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <blockquote className="mt-10 border-l-4 border-orange pl-5 max-w-3xl mx-auto">
          <p className="text-dark text-lg leading-relaxed italic">
            «Не откладывайте подготовку на потом. Каждый месяц промедления — это темы,
            которые придётся проходить в авральном режиме. Начните сейчас — и к 11 классу
            ваш ребёнок будет готов, пока другие только начнут паниковать.»
          </p>
        </blockquote>

        <p className="text-sm text-muted mt-4 text-center">
          На основе результатов выпускников MAXIMUM Education 2023–2025 и данных Рособрнадзора
        </p>
      </div>
    </section>
  )
}
