'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Eye, BarChart3 } from 'lucide-react'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Учителя, которых отбирают как пилотов',
    body: 'Только 3% кандидатов получают право проводить занятия. Каждый проходит многоэтапный отбор и интенсивную подготовку: экзамен по предмету, пробный урок, работа над методикой подачи материала и умением удерживать внимание класса. И даже после найма — регулярные разборы уроков с обратной связью. К ученикам попадают только лучшие.',
    badge: '3% кандидатов проходят отбор',
  },
  {
    icon: Eye,
    title: 'Система, которая видит всё',
    body: 'Платформа отслеживает активность камеры, переключение вкладок и вопросы в чате. Если ученик отвлёкся — преподаватель получает сигнал. Кураторы отсматривают записи каждого урока.',
    badge: 'Контроль каждого урока',
  },
  {
    icon: BarChart3,
    title: 'Пробник каждый месяц + разбор каждой ошибки',
    body: 'Ежемесячный пробный экзамен в условиях, близких к реальным. После — персональный разбор с преподавателем. Ученик видит рост уже с первого месяца.',
    badge: 'Пробники каждый месяц',
  },
]

export default function Mechanism() {
  return (
    <section id="mechanism" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Почему 93% учеников проходят курс до конца?
          </h2>
          <p className="mt-3 text-muted text-lg">Это не случайность — это система.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-light rounded-[20px] p-7 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-[#FD7E14]/10 rounded-2xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#FD7E14]" />
                </div>
                <span className="inline-flex self-start bg-[#FD7E14] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {p.badge}
                </span>
                <h3 className="text-xl font-semibold text-dark leading-snug">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{p.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
