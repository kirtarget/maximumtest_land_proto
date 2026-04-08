'use client'
import { motion } from 'framer-motion'
import { Layers, Brain, BookOpen, ArrowRight } from 'lucide-react'

const proofs = [
  {
    icon: Layers,
    title: 'Материал за 7 лет обучения',
    desc: 'ЕГЭ охватывает программу 5–11 классов. Чтобы глубоко разобраться в каждой теме, понадобится минимум 2 года.',
  },
  {
    icon: Brain,
    title: 'Без пробелов после ОГЭ',
    desc: 'Подготовка с 10 класса — возможность сохранить знания после ОГЭ. Без практики материал легко забыть.',
  },
  {
    icon: BookOpen,
    title: 'Уверенность в 11 классе',
    desc: 'В 10 классе создаём прочный фундамент знаний. А в следующем году углубляемся в детали без стресса и спешки.',
  },
]

export default function EarlyStart() {
  return (
    <section className="bg-dark overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-dark2 via-dark to-dark" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
          Подготовка к ЕГЭ с 10 класса —{' '}
          <span className="text-orange">больше шансов поступить на бюджет</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-white/60 text-center mt-3 text-lg"
        >
          +12 баллов к результату на экзамене
        </motion.p>

        {/* Карточки-доказательства */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {proofs.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-orange/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="text-white font-bold text-lg leading-snug mb-2">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-orange text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-orangeh transition-colors"
          >
            Начать подготовку сейчас
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
