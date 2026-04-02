'use client'
import { motion } from 'framer-motion'
import { Layers, Brain, BookOpen, ArrowRight } from 'lucide-react'

const proofs = [
  {
    icon: Layers,
    title: 'ЕГЭ = программа 5–11 класс',
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Подготовка к ЕГЭ с 10 класса повышает шансы поступления на бюджет
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            ФИПИ рекомендуют начинать подготовку за 2 года до экзамена
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {proofs.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-light rounded-[20px] p-7 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-orange text-white font-bold px-8 py-4 rounded-xl hover:bg-orangeh transition-colors text-base"
          >
            Начать подготовку сейчас
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
