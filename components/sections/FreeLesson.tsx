'use client'

import { Video, Users, ClipboardList, MessageCircle, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const steps = [
  {
    icon: ClipboardList,
    title: 'Диагностика за 10 минут',
    desc: 'Преподаватель быстро оценивает текущий уровень — без стресса и оценок. Только чтобы понять, с чего начать.',
  },
  {
    icon: Video,
    title: 'Живой урок, не запись',
    desc: 'Это реальный урок с настоящим преподавателем в прямом эфире. Можно задавать вопросы, останавливать, уточнять.',
  },
  {
    icon: Users,
    title: 'Разбор одной темы целиком',
    desc: 'За урок разберём один реальный раздел из ЕГЭ/ОГЭ — ученик уйдёт с конкретными знаниями, а не с ощущением «рассказали всё и ничего».',
  },
  {
    icon: MessageCircle,
    title: 'Обратная связь и план',
    desc: 'В конце — честный разбор пробелов и индивидуальный план подготовки: что учить, сколько времени, каким темпом.',
  },
]

const reassurances = [
  'Никаких продаж «в лоб» — только польза',
  'Преподаватель — не менеджер, а специалист по предмету',
  'Занятие длится 45 минут в удобное для вас время',
  'Подходит для любого уровня — от нуля до уверенного хорошиста',
]

export default function FreeLesson() {
  return (
    <section id="free-lesson" className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D62B2B]/10 rounded-full px-4 py-1.5 mb-5">
            <Video className="w-4 h-4 text-[#D62B2B]" />
            <span className="text-[#D62B2B] text-sm font-semibold">Бесплатный урок</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-snug mb-4">
            Что происходит на пробном уроке
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto leading-relaxed">
            Это не презентация школы и не запись с экрана. Это настоящий урок —
            живой, с преподавателем, с разбором конкретной темы.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="bg-white rounded-[20px] p-6 border border-[#DDDDDD] flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-[#D62B2B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#D62B2B]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A2E] mb-1.5 leading-snug">{step.title}</p>
                  <p className="text-[#555555] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom strip */}
        <div className="bg-[#1A1A2E] rounded-[24px] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <p className="text-white font-semibold text-lg mb-4">Вы можете не переживать:</p>
            <ul className="flex flex-col gap-2.5">
              {reassurances.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Button
              href="#quiz"
              label="free_lesson_cta"
              className="bg-[#D62B2B] text-white hover:bg-[#b52323] w-full md:w-auto text-center justify-center"
            >
              Записаться на бесплатный урок
            </Button>
            <p className="text-white/40 text-xs mt-3 text-center md:text-left">
              Без предоплаты · Отменить можно в любой момент
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
