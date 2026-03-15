'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ResultCard from '@/components/ui/ResultCard'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  { before: 'Сын жутко нервничал, места себе не находил. Мы не знали, что делать', after: 'Пошёл на экзамены с чистой и светлой головой. Тревога прошла совсем.', name: 'Анна, мама ученика', subject: 'Математика', source: '2ГИС Москва' },
  { before: 'Все вспоминают ЕГЭ с ужасом — нам казалось, будет так же', after: 'Далось на удивление легко. Дочь сдала 4 предмета без нервов.', name: 'Родитель', subject: 'Русский, История', source: 'Zoon Москва' },
  { before: 'Дочь пришла с нулевой уверенностью в своих силах', after: 'К ОГЭ подошла спокойная, без паники, и сдала выше, чем на пробниках.', name: 'Виктория, мама ученицы', subject: 'ОГЭ', source: 'Zoon Москва' },
  { before: 'Пробовали репетитора — результата почти не было', after: 'Преподаватель снял страх перед предметом. На ОГЭ получила уверенную «четвёрку».', name: 'Родитель', subject: 'ОГЭ', source: '2ГИС Новосибирск' },
  { before: 'Тревожность по поводу экзаменов зашкаливала', after: 'Вебинары по психологической поддержке помогли. ЕГЭ по русскому — 97 баллов.', name: 'Родитель', subject: 'Русский язык', source: 'maximumtest.ru' },
]

export default function Results() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const stopTimer = useCallback(() => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)

    const play = () => { timer.current = setTimeout(() => { emblaApi.scrollNext(); play() }, 4000) }
    play()
    emblaApi.on('pointerDown', stopTimer)
    return () => stopTimer()
  }, [emblaApi, stopTimer])

  return (
    <section id="results" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
              Они тоже боялись.<br className="hidden sm:block" /> Посмотрите, что получилось.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}</div>
            <span className="text-muted text-sm">4.7 из 5 · 1200+ отзывов</span>
          </div>
        </div>

        <div className="overflow-hidden -mx-1 px-1" ref={emblaRef}>
          <div className="flex gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="flex-[0_0_90%] sm:flex-[0_0_55%] lg:flex-[0_0_38%]">
                <ResultCard {...r} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            <button
              onClick={() => { stopTimer(); emblaApi?.scrollPrev() }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-orange hover:border-orange transition-colors"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => { stopTimer(); emblaApi?.scrollNext() }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-orange hover:border-orange transition-colors"
              aria-label="Следующий"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-2 items-center">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopTimer(); emblaApi?.scrollTo(i) }}
                className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? 'w-6 bg-orange' : 'w-2 bg-border hover:bg-muted'}`}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
