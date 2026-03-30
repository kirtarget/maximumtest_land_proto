'use client'
import { motion } from 'framer-motion'

const cards = [
  { number: '+5,8', text: 'баллов при старте за 18+ месяцев', bg: 'bg-[#F3E8FF]', accent: 'text-purple-700' },
  { number: '+12,7', text: 'баллов при комбинированном формате', bg: 'bg-[#ECFDF5]', accent: 'text-green-700' },
  { number: '+9,3', text: 'баллов при системной диагностике', bg: 'bg-[#EFF6FF]', accent: 'text-blue-700' },
]

export default function EarlyStart() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Высокие баллы начинаются задолго до экзамена
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            Данные ЕГЭ показывают устойчивую закономерность: чем раньше начинается системная подготовка, тем выше итоговый балл.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${c.bg} rounded-[20px] p-7 flex flex-col gap-2`}
            >
              <span className={`text-[44px] font-bold leading-none ${c.accent}`}>{c.number}</span>
              <p className="text-dark text-base font-medium">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <blockquote className="mt-10 border-l-4 border-orange pl-5 max-w-3xl mx-auto">
          <p className="text-dark text-lg leading-relaxed italic">
            «Десятый класс — оптимальное время для старта. Закрыть пробелы, выстроить базу
            и подойти к 11 классу с прочным фундаментом.»
          </p>
        </blockquote>

        <p className="text-sm text-muted mt-4 text-center">
          Данные: анализ результатов ЕГЭ 2024
        </p>
      </div>
    </section>
  )
}
