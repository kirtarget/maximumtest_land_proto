import StatCard from '@/components/ui/StatCard'

const stats = [
  { number: '13', label: 'лет готовим к экзаменам' },
  { number: '93%', label: 'учеников проходят курсы до конца' },
  { number: '450000+', label: 'семей доверили нам подготовку' },
  { number: '80+', label: 'баллов ЕГЭ — каждый 3-й ученик' },
  { number: '90+', label: 'баллов ЕГЭ — каждый 5-й ученик' },
]

export default function StatStrip() {
  return (
    <section className="bg-white border-b border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 [grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8>*:nth-child(5)]:col-start-1 sm:[grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8>*:nth-child(5)]:col-start-auto">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
