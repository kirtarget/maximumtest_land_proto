'use client'
import { motion } from 'framer-motion'
import { BookOpen, Brain, Shield, Calendar } from 'lucide-react'

const advantages = [
  {
    icon: Calendar,
    title: 'Два года вместо одного',
    desc: 'Программа растянута — не нужно зубрить. Темы усваиваются глубоко и без стресса.',
  },
  {
    icon: Brain,
    title: 'Закрываем пробелы за 10 класс',
    desc: 'Многие темы ЕГЭ основаны на программе 10 класса. Разбираем их, пока проходят в школе.',
  },
  {
    icon: BookOpen,
    title: 'Опережаем школьную программу',
    desc: 'К 11 классу ученик уже знает большую часть материала — остаётся только закрепить.',
  },
  {
    icon: Shield,
    title: 'Меньше давления в 11 классе',
    desc: 'Пока одноклассники паникуют — ваш ребёнок спокойно повторяет и решает варианты.',
  },
]

export default function Grade10Advantage() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            В 10 классе у вас есть преимущество
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            Начать на год раньше — значит прийти к экзамену подготовленным и уверенным
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[20px] p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
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
      </div>
    </section>
  )
}
