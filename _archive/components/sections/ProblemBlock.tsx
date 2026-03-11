'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const pains = [
  {
    emoji: '😰',
    text: '«Сын жутко нервничал, места себе не находил. Мы не знали, что делать»',
  },
  {
    emoji: '😟',
    text: '«Дочь решила, что ничего не знает — то ли от стресса, то ли от страха»',
  },
  {
    emoji: '😤',
    text: '«В школе только пугают, а что конкретно делать — непонятно. Паника»',
  },
]

export default function ProblemBlock() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Знакомо?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border"
            >
              <div className="text-4xl mb-4">{p.emoji}</div>
              <p className="text-mid italic text-base leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <div className="mt-12 flex flex-col items-center text-center">
          <ArrowDown className="w-6 h-6 text-accent mb-4 animate-bounce" />
          <p className="text-lg md:text-xl text-dark font-semibold max-w-2xl leading-relaxed">
            Именно для этого существует MAXIMUM. Мы готовим не только знания —
            мы убираем тревогу. Методически, шаг за шагом.
          </p>
        </div>
      </div>
    </section>
  )
}
