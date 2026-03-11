'use client'

import useEmblaCarousel from 'embla-carousel-react'
import TeacherCard from '@/components/ui/TeacherCard'
import Button from '@/components/ui/Button'

const teachers = [
  {
    photo: '/teachers/placeholder-1.jpg',
    name: 'Александра М.',
    subject: 'Математика',
    achievement1: 'Ученики: среднее +27 баллов за год',
    achievement2: '10 лет в подготовке к ЕГЭ',
    quote: 'Математика — это не страшно. Страшно не знать, с чего начать. Я помогаю найти эту точку.',
  },
  {
    photo: '/teachers/placeholder-2.jpg',
    name: 'Дмитрий В.',
    subject: 'Русский язык',
    achievement1: 'Средний балл учеников — 82 из 100',
    achievement2: 'Дипломированный лингвист, 8 лет практики',
    quote: 'Сочинение — это не набор правил. Это история. Я учу рассказывать её убедительно.',
  },
  {
    photo: '/teachers/placeholder-3.jpg',
    name: 'Екатерина С.',
    subject: 'Обществознание',
    achievement1: '95% учеников сдают на 70+',
    achievement2: 'Автор авторского курса по обществу',
    quote: 'Знание структуры задания стоит дороже любого репетитора без методики.',
  },
]

export default function Teachers() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' })

  return (
    <section id="teachers" className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Наши преподаватели — не случайные люди
          </h2>
          <p className="mt-3 text-lg text-mid">
            Они прошли отбор. И продолжают учиться каждый день.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {teachers.map((t, i) => <TeacherCard key={i} {...t} />)}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {teachers.map((t, i) => (
              <div key={i} className="flex-[0_0_85%]">
                <TeacherCard {...t} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-mid text-base mb-4">
            + ещё <span className="font-semibold text-dark">1994 преподавателя</span> в 65 городах
          </p>
          <Button href="#quiz" variant="outline" label="teachers_cta">
            Подобрать преподавателя
          </Button>
        </div>
      </div>
    </section>
  )
}
