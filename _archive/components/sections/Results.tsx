'use client'

import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ResultCard from '@/components/ui/ResultCard'
import { Star } from 'lucide-react'

const reviews = [
  {
    before: 'Сын жутко нервничал, места себе не находил. Мы не знали, что делать',
    after: 'Пошёл на экзамены с чистой и светлой головой. Тревога прошла.',
    name: 'Анна, мама ученика',
    subject: 'Математика',
    source: '2ГИС Москва',
  },
  {
    before: 'Все родители и ученики вспоминают ЕГЭ с ужасом',
    after: 'Нам как ни странно далось это легко. Дочь сдала 4 предмета.',
    name: 'Родитель',
    subject: 'Русский, История',
    source: 'Zoon Москва',
  },
  {
    before: 'Дочь пришла с нулевой уверенностью в своих силах',
    after: 'К ОГЭ она подошла спокойная, без паники, и сдала выше, чем пробники.',
    name: 'Виктория, мама ученицы',
    subject: 'ОГЭ',
    source: 'Zoon Москва',
  },
  {
    before: 'Решили попробовать, чтобы хотя бы сдать без нервов',
    after: 'Преподаватель снял страх перед предметом. На ОГЭ получила «четвёрку», очень уверенную.',
    name: 'Родитель',
    subject: 'ОГЭ',
    source: '2ГИС Новосибирск',
  },
  {
    before: 'Тревожность по поводу экзаменов зашкаливала',
    after: 'Нашли вебинары MAXIMUM с психологической поддержкой. ЕГЭ по русскому сдан на 97 баллов.',
    name: 'Родитель',
    subject: 'Русский язык',
    source: 'maximumtest.ru',
  },
]

export default function Results() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!emblaApi) return
    const play = () => { timer.current = setTimeout(() => { emblaApi.scrollNext(); play() }, 4000) }
    const stop = () => { if (timer.current) clearTimeout(timer.current) }
    play()
    emblaApi.on('pointerDown', stop)
    return () => stop()
  }, [emblaApi])

  return (
    <section id="results" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Они тоже боялись. Посмотрите, что получилось.
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="flex-[0_0_90%] sm:flex-[0_0_60%] lg:flex-[0_0_40%]">
                <ResultCard {...r} />
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mt-8 flex justify-center items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-mid text-sm">4.7 из 5 на основе 1200+ отзывов</span>
        </div>
      </div>
    </section>
  )
}
