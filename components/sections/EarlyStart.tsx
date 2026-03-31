'use client'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Target, ArrowRight } from 'lucide-react'

const timelineItems = [
  {
    icon: TrendingUp,
    grade: '10 класс',
    period: '2 года до экзамена',
    score: '85–100 баллов',
    desc: 'Максимум времени — спокойный темп, глубокое понимание, уверенность на экзамене',
    highlight: true,
  },
  {
    icon: Clock,
    grade: '11 класс, сентябрь',
    period: '9 месяцев до экзамена',
    score: '70–90 баллов',
    desc: 'Оптимальный старт — успеваем пройти всю программу и закрепить',
    highlight: false,
  },
  {
    icon: Target,
    grade: '11 класс, январь',
    period: '5 месяцев до экзамена',
    score: '60–80 баллов',
    desc: 'Интенсивный режим — фокус на самых «дорогих» заданиях',
    highlight: false,
  },
]

export default function EarlyStart() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Чем раньше старт — тем выше балл
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            Раннее начало подготовки даёт больше времени на отработку сложных тем и снижает стресс перед экзаменом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {timelineItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-[20px] p-7 border ${
                  item.highlight
                    ? 'bg-orange/5 border-orange/30 shadow-[0_4px_24px_rgba(253,126,20,0.1)]'
                    : 'bg-light border-border'
                }`}
              >
                {item.highlight && (
                  <span className="absolute -top-3 left-6 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    Лучший результат
                  </span>
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  item.highlight ? 'bg-orange/15' : 'bg-dark/5'
                }`}>
                  <Icon className={`w-5 h-5 ${item.highlight ? 'text-orange' : 'text-dark/60'}`} />
                </div>
                <p className="text-sm font-semibold text-muted mb-1">{item.period}</p>
                <h3 className="text-xl font-bold text-dark mb-2">{item.grade}</h3>
                <div className={`text-2xl font-bold mb-3 ${item.highlight ? 'text-orange' : 'text-dark'}`}>
                  {item.score}
                </div>
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
