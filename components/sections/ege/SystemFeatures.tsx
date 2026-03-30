'use client'
import { motion } from 'framer-motion'
import { Video, MapPin, LayoutDashboard, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Эффективные занятия',
    text: 'Живые вебинары, не записи. Преподаватель задаёт вопросы, проверяет понимание, работает с каждым.',
  },
  {
    icon: MapPin,
    title: 'Форматы подготовки',
    text: 'Онлайн из любого города или офлайн в 65 городах. Можно менять формат в процессе.',
  },
  {
    icon: LayoutDashboard,
    title: 'Личный кабинет',
    text: 'Все материалы, ДЗ и конспекты в одном месте. Отдельный кабинет для родителей.',
  },
  {
    icon: TrendingUp,
    title: 'Прогресс ученика',
    text: '10 пробных экзаменов за курс. Результаты в ЛК — виден рост от месяца к месяцу.',
  },
]

export default function SystemFeatures() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Система, которая приводит к цели
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[20px] p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="w-12 h-12 bg-orange/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
