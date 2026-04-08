'use client'
import { motion } from 'framer-motion'
import { Clock, TrendingUp, Users, Flame, ArrowRight } from 'lucide-react'

const items = [
  {
    icon: Clock,
    title: 'Время уходит',
    desc: 'До ЕГЭ осталось меньше, чем кажется. Каждая неделя — это тема, которую можно успеть пройти и закрепить.',
    accent: 'bg-orange/10',
    iconColor: 'text-orange',
  },
  {
    icon: TrendingUp,
    title: 'Пробелы копятся',
    desc: 'Чем дольше ждёте, тем больше материала придётся наверстать в авральном режиме.',
    accent: 'bg-orange/10',
    iconColor: 'text-orange',
  },
  {
    icon: Users,
    title: 'Конкуренты уже готовятся',
    desc: '40% высокобалльников начали подготовку за 1,5+ года. Каждый день промедления — это их преимущество.',
    accent: 'bg-orange/10',
    iconColor: 'text-orange',
  },
  {
    icon: Flame,
    title: 'Лето за 1 рубль',
    desc: 'Начните прямо сейчас по специальной цене — и войдите в 11 класс подготовленными.',
    accent: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
]

export default function EgeProblemSolution() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Каждый день без подготовки — потерянные баллы
          </h2>
          <p className="mt-3 text-muted text-lg max-w-xl mx-auto">
            Не откладывайте — начните сейчас, где бы вы ни были
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => {
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
                <div className={`w-10 h-10 ${item.accent} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

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
