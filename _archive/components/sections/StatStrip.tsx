import StatCard from '@/components/ui/StatCard'

const stats = [
  { number: '93%', label: 'доходимость до экзамена', note: 'vs ~30% по рынку' },
  { number: '2000', label: 'преподавателей в сети', note: 'прошли месячный буткемп' },
  { number: '65', label: 'городов присутствия', note: 'Россия, Беларусь, Казахстан' },
  { number: '260000+', label: 'учеников за всё время', note: 'данные сайта' },
  { number: 'каждый 3-й', label: 'сдаёт на 80+ баллов', note: 'из тех, кто дошёл до конца' },
]

export default function StatStrip() {
  return (
    <section className="bg-white border-b border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide justify-start md:justify-center pb-2">
          {stats.map((s, i) => (
            <div key={i} className="snap-start flex-shrink-0">
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
