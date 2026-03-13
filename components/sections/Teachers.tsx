'use client'
import useEmblaCarousel from 'embla-carousel-react'
import TeacherCard from '@/components/ui/TeacherCard'
import Button from '@/components/ui/Button'

const teachers = [
  {
    photo: '/teachers/placeholder-1.svg',
    name: 'Александра М.',
    subject: 'Математика',
    achievement1: 'Ученики: среднее +27 баллов за год',
    achievement2: '10 лет в подготовке к ЕГЭ',
    quote: 'Математика — это не страшно. Страшно не знать, с чего начать. Я помогаю найти эту точку.',
  },
  {
    photo: '/teachers/placeholder-2.svg',
    name: 'Дмитрий В.',
    subject: 'Русский язык',
    achievement1: 'Средний балл учеников — 82 из 100',
    achievement2: 'Дипломированный лингвист, 8 лет практики',
    quote: 'Сочинение — это не набор правил. Это история. Я учу рассказывать её убедительно.',
  },
  {
    photo: '/teachers/placeholder-3.svg',
    name: 'Екатерина С.',
    subject: 'Обществознание',
    achievement1: '95% учеников сдают на 70+ баллов',
    achievement2: 'Автор авторского курса, 7 лет опыта',
    quote: 'Знание структуры задания стоит дороже любого репетитора без методики.',
  },
  {
    photo: '/teachers/placeholder-4.svg',
    name: 'Антон Р.',
    subject: 'Физика',
    achievement1: 'Каждый 2-й ученик — 70+ баллов',
    achievement2: 'Кандидат физико-математических наук',
    quote: 'Физика — это логика. Если научить мыслить задачами, страх уходит.',
  },
]

export default function Teachers() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' })

  return (
    <section id="teachers" className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
              Наши преподаватели
            </h2>
            <p className="mt-3 text-muted text-lg">
              Только 3% кандидатов получают право проводить занятия
            </p>
          </div>
          <div className="text-muted text-sm">
            + ещё <span className="font-semibold text-dark">1994 преподавателя</span> в 65 городах
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {teachers.map((t, i) => <TeacherCard key={i} {...t} />)}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {teachers.map((t, i) => (
              <div key={i} className="flex-[0_0_85%]"><TeacherCard {...t} /></div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="#quiz" variant="outline" label="teachers_cta">
            Подобрать преподавателя
          </Button>
        </div>
      </div>
    </section>
  )
}
