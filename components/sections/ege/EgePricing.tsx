'use client'
import { useState } from 'react'
import { Check, Plus } from 'lucide-react'

const BASE_FEATURES = [
  { label: 'Уроки', rest: ': 3 ак. часа в неделю, 12 часов в месяц' },
  { label: 'Домашка', rest: ': проверка преподавателя и обратная связь' },
  { label: 'Пробные экзамены', rest: ': 10 полных экзаменов с разбором' },
  { label: 'Личный кабинет и платформа', rest: ': все материалы в одном месте' },
  { label: 'Рабочие тетради и конспекты', rest: '' },
]

const PLANS = [
  {
    tag: '«Живые» вебинары',
    name: 'ИЗИ+',
    desc: 'Для самостоятельных учеников, которым нужен вектор в обучении и обратная связь',
    extras: [] as string[],
    price: 'от 3 000 ₽',
    featured: false,
  },
  {
    tag: 'Онлайн или в классе · от 15 до 25 человек',
    name: 'Оптимум',
    desc: 'Для учёбы в дружной группе с постоянным вниманием преподавателя и обратной связью',
    extras: [
      '1 индивидуальный урок в месяц',
      '1 личная беседа для поддержки и мотивации в месяц',
    ],
    price: 'от 5 300 ₽',
    featured: true,
  },
  {
    tag: 'Онлайн · до 7 человек',
    name: 'Максимум',
    desc: 'Для тех, кто ценит персональный подход и максимальную вовлечённость на уроке',
    extras: [
      '3 индивидуальных урока в месяц',
      '3 личных встречи-сопровождения при поступлении',
      'Личные беседы для поддержки и мотивации',
      'Персональная подборка вузов и колледжей',
    ],
    price: 'от 7 500 ₽',
    featured: false,
  },
]

const TABS = ['11 класс', '10 класс'] as const

export default function EgePricing() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0])

  return (
    <section className="bg-[#F0F2F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-[42px] font-bold text-dark leading-tight">
            Тарифы подготовки к ЕГЭ
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-orange text-white shadow-sm'
                  : 'bg-white text-dark border border-border hover:border-orange/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-[20px] flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1
                ${plan.featured
                  ? 'shadow-[0_8px_40px_rgba(253,126,20,0.18)] ring-2 ring-orange'
                  : 'shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
                }`}
            >
              <div className={`h-1.5 w-full ${plan.featured ? 'bg-orange' : 'bg-orange/30'}`} />

              {plan.featured && (
                <div className="absolute top-4 right-4 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  Популярный
                </div>
              )}

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-muted text-xs font-medium uppercase tracking-wide mb-3">{plan.tag}</p>
                <h3 className="text-[28px] font-bold text-dark mb-2 leading-none">{plan.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 pb-6 border-b border-border">{plan.desc}</p>

                <ul className="space-y-3 mb-4">
                  {BASE_FEATURES.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5 text-sm text-dark">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-orange/15 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-orange" />
                      </span>
                      <span><strong>{f.label}</strong>{f.rest}</span>
                    </li>
                  ))}
                </ul>

                {plan.extras.length > 0 && (
                  <ul className="space-y-2.5 pt-4 border-t border-dashed border-border">
                    {plan.extras.map((e) => (
                      <li key={e} className="flex items-start gap-2.5 text-sm text-dark font-medium">
                        <Plus className="w-4 h-4 mt-0.5 shrink-0 text-orange" />
                        {e}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex-1" />

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="inline-flex items-center gap-1.5 bg-orange/10 text-orange text-xs font-bold rounded-full px-3 py-1 mb-3">
                    <span>🎁</span> 3 курса по цене 2
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-dark">{plan.price}</span>
                    <span className="text-muted text-sm">/ мес.</span>
                  </div>
                </div>

                <a
                  href="#final-form"
                  className="mt-4 flex items-center justify-center h-13 rounded-xl text-white font-bold text-base transition-all duration-200 py-3.5 bg-orange hover:bg-orangeh"
                >
                  Забронировать место
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {['Гарантия результата в договоре', '3 курса по цене 2'].map(badge => (
            <div key={badge} className="flex items-center gap-2 text-dark text-sm font-medium">
              <Check className="w-4 h-4 text-orange shrink-0" />
              {badge}
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-4">
          Точная стоимость зависит от предмета и города. Специалист рассчитает за 15 минут.
        </p>
      </div>
    </section>
  )
}
