'use client'
import { motion } from 'framer-motion'
import { GraduationCap, MessageCircle, Users } from 'lucide-react'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Учителя, которых отбирают как пилотов',
    body: 'Только 3% кандидатов получают право проводить занятия. Каждый проходит многоэтапный отбор и интенсивную подготовку: экзамен по предмету, пробный урок, работа над методикой подачи материала и умением удерживать внимание класса. И даже после найма — регулярные разборы уроков с обратной связью. К ученикам попадают только лучшие.',
    badge: '3% кандидатов проходят отбор',
  },
  {
    icon: MessageCircle,
    title: 'Преподаватель замечает каждого',
    body: 'Если ученик молчит, не задаёт вопросов или теряет темп — преподаватель видит это сам и сразу реагирует. Небольшие группы и живой формат урока позволяют не терять никого из виду.',
    badge: 'Внимание к каждому',
  },
  {
    icon: Users,
    title: 'Небольшие группы — преподаватель знает каждого',
    body: 'Небольшая группа — это не про уют. Это про результат. Преподаватель видит, где у вашего ребёнка пробел, где нужно притормозить, а где уже можно двигаться быстрее. Прогресс заметен с первого месяца.',
    badge: 'Небольшие группы',
  },
]

export default function Mechanism() {
  return (
    <section id="mechanism" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
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
                className="bg-light rounded-[20px] p-5 md:p-7 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-orange/10 rounded-2xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-orange" />
                </div>
                <span className="inline-flex self-start bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
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
