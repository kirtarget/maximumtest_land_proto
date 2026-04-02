'use client'
import { motion } from 'framer-motion'
import { Clock, AlertTriangle, Users, Flame, ArrowRight } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Время уходит',
    desc: 'До ЕГЭ осталось меньше, чем кажется. Каждая неделя — это тема, которую можно успеть пройти и закрепить.',
  },
  {
    icon: AlertTriangle,
    title: 'Пробелы копятся',
    desc: 'Чем дольше ждёте, тем больше материала придётся наверстывать в авральном режиме.',
  },
  {
    icon: Users,
    title: 'Конкуренты уже готовятся',
    desc: '40% высокобалльников начали подготовку за 1,5+ года. Каждый день промедления — это их преимущество.',
  },
  {
    icon: Flame,
    title: 'Лето за 1 рубль',
    desc: 'Начните прямо сейчас по специальной цене — и войдите в 11 класс подготовленными.',
  },
]

export default function Grade10Advantage() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Каждый день без подготовки — потерянные баллы
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            Не откладывайте — начните сейчас, где бы вы ни были
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((item, i) => {
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
