import { Check, X, Minus } from 'lucide-react'

const rows = [
  { label: 'Доходимость до экзамена', tutor: '~50%', course: '~30%', maximum: '93%' },
  { label: 'Контроль внимания', tutor: null, course: null, maximum: 'платформа' },
  { label: 'Гарантия результата', tutor: null, course: 'редко', maximum: 'в договоре' },
  { label: 'Одобрение ФИПИ', tutor: null, course: null, maximum: true },
  { label: 'Психологическая подготовка', tutor: null, course: null, maximum: 'вебинары' },
  { label: 'Пробные экзамены', tutor: 'иногда', course: 'иногда', maximum: 'каждый месяц' },
  { label: 'Города присутствия', tutor: '1 город', course: 'онлайн', maximum: '65 городов' },
  { label: 'Отбор преподавателей', tutor: 'ваша удача', course: 'неизвестно', maximum: 'буткемп' },
]

function Cell({ value, highlight }: { value: string | boolean | null; highlight?: boolean }) {
  const base = highlight ? 'text-accent font-semibold' : 'text-mid'
  if (value === null || value === false)
    return <td className="px-4 py-3 text-center"><X className="w-4 h-4 text-gray-300 mx-auto" /></td>
  if (value === true)
    return <td className={`px-4 py-3 text-center ${base}`}><Check className="w-5 h-5 mx-auto text-accent" /></td>
  return <td className={`px-4 py-3 text-center text-sm ${base}`}>{value}</td>
}

export default function ComparisonTable() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            MAXIMUM vs репетитор vs другой курс
          </h2>
          <p className="mt-3 text-lg text-mid">Честное сравнение. Решайте сами.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full min-w-[560px] bg-white">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-4 text-left text-sm font-semibold text-mid">Критерий</th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-mid">Репетитор</th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-mid">Другой курс</th>
                <th className="px-4 py-4 text-center text-sm font-bold text-accent bg-accent/5 rounded-t-lg">
                  MAXIMUM ✓
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-light/50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-dark">{row.label}</td>
                  <Cell value={row.tutor} />
                  <Cell value={row.course} />
                  <Cell value={row.maximum} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
