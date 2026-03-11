'use client'
import { motion } from 'framer-motion'
import { UserX, Eye, BookOpen, LayoutDashboard } from 'lucide-react'

const items = [
  {
    icon: UserX,
    problem: 'Ребёнок не посещает занятия',
    solution: 'Наши преподаватели — не говорящие головы, а помощники в подготовке к экзаменам. Они следят за посещаемостью и успеваемостью каждого ученика.',
  },
  {
    icon: Eye,
    problem: 'Ребёнок постоянно отвлекается',
    solution: 'Наша платформа следит за поведением ребёнка, его активностью на уроке и предупреждает учителя, если нужно уделить кому-то особое внимание.',
  },
  {
    icon: BookOpen,
    problem: 'Ребёнок не понимает конкретные темы',
    solution: 'Наши методисты на постоянной основе корректируют программу обучения так, чтобы все темы, которые есть на экзаменах, отложились в голове ученика.',
  },
  {
    icon: LayoutDashboard,
    problem: 'Ребёнок не будет ходить на занятия, а я не узнаю',
    solution: 'Для родителей у нас доступен отдельный личный кабинет, в котором можно наблюдать весь процесс обучения ученика и его прогресс.',
  },
]

export default function ProblemSolution() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Наша цель — максимальный результат вашего ребёнка
          </h2>
          <p className="mt-3 text-muted text-lg max-w-xl mx-auto">
            Мы решаем реальные проблемы, с которыми сталкиваются родители
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
                {/* Problem */}
                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-border">
                  <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="font-semibold text-dark leading-snug pt-1">{item.problem}</p>
                </div>
                {/* Solution */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FD7E14]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FD7E14] font-bold text-base">✓</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
