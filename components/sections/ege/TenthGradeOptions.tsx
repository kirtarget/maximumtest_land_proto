'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const options = [
  {
    badge: 'Фиксация цены',
    badgeCls: 'bg-amber-100 text-amber-700',
    title: 'Купить сейчас — начать с сентября',
    desc: 'Зафиксируйте цену и место в группе. Всё лето — доступ к материалам прошлого года.',
    checks: [
      'Цена не изменится к сентябрю',
      'Летний доступ к видеоурокам',
      'Место в группе без очереди',
    ],
    ctaText: 'Зафиксировать цену и место',
    ctaCls: 'border-2 border-orange text-orange hover:bg-orange/5',
    featured: false,
  },
  {
    badge: 'Рекомендуем',
    badgeCls: 'bg-blue-100 text-blue-700',
    title: 'Начать подготовку уже сейчас',
    desc: 'Живые вебинары в действующих группах. Закрывайте пробелы, пока есть время.',
    checks: [
      'Вебинары уже на этой неделе',
      'Диагностика уровня на старте',
      'Проверка ДЗ и обратная связь',
    ],
    ctaText: 'Записаться на диагностику',
    ctaCls: 'bg-orange text-white hover:bg-orangeh',
    featured: true,
  },
]

export default function TenthGradeOptions() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Два варианта подготовки для учеников 10 класса
          </h2>
          <p className="mt-3 text-muted text-lg">Выберите темп, который подходит именно вам.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-[20px] p-7 flex flex-col ${
                opt.featured
                  ? 'ring-2 ring-orange shadow-[0_8px_40px_rgba(253,126,20,0.18)]'
                  : 'shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
              }`}
            >
              <span className={`inline-flex self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${opt.badgeCls}`}>
                {opt.badge}
              </span>
              <h3 className="text-xl font-bold text-dark mb-2">{opt.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{opt.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {opt.checks.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-dark">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-orange/15 flex items-center justify-center">
                      <Check className="w-3 h-3 text-orange" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <a
                href="#final-form"
                className={`flex items-center justify-center h-13 rounded-xl font-bold text-base transition-all duration-200 py-3.5 ${opt.ctaCls}`}
              >
                {opt.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
