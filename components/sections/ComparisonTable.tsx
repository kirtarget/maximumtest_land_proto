import { Check, X } from 'lucide-react'

const rows = [
  { label: 'Доходимость до конца курса', tutor: '~50%', course: '~30%', max: '93%' },
  { label: 'Контроль посещаемости', tutor: null, course: null, max: true },
  { label: 'Мониторинг внимания', tutor: null, course: null, max: true },
  { label: 'Гарантия результата в договоре', tutor: null, course: 'редко', max: true },
  { label: 'Одобрение ФИПИ', tutor: null, course: null, max: true },
  { label: 'Пробные экзамены', tutor: 'иногда', course: 'иногда', max: 'каждый месяц' },
  { label: 'Личный кабинет для родителей', tutor: null, course: null, max: true },
  { label: 'Психологическая поддержка', tutor: null, course: null, max: 'вебинары' },
  { label: 'Отбор преподавателей', tutor: 'ваша удача', course: '—', max: 'буткемп, 3%' },
  { label: 'Присутствие в городах', tutor: '1 город', course: 'онлайн', max: '65 городов' },
]

function Cell({ v, hi }: { v: string | boolean | null; hi?: boolean }) {
  if (v === null || v === false)
    return <td className="px-4 py-3 text-center"><X className="w-4 h-4 text-border mx-auto" /></td>
  if (v === true)
    return <td className={`px-4 py-3 text-center ${hi ? 'bg-[#FD7E14]/5' : ''}`}><Check className="w-5 h-5 mx-auto text-[#FD7E14]" /></td>
  return <td className={`px-4 py-3 text-center text-sm ${hi ? 'text-[#FD7E14] font-semibold bg-[#FD7E14]/5' : 'text-muted'}`}>{v}</td>
}

export default function ComparisonTable() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">MAXIMUM vs репетитор vs другие курсы</h2>
          <p className="mt-3 text-muted text-lg">Честное сравнение. Решайте сами.</p>
        </div>

        <div className="overflow-x-auto rounded-[20px] border border-border shadow-sm">
          <table className="w-full min-w-[560px] bg-white">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-4 text-left text-sm font-semibold text-muted">Критерий</th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-muted">Репетитор</th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-muted">Другие курсы</th>
                <th className="px-4 py-4 text-center text-sm font-bold text-[#FD7E14] bg-[#FD7E14]/5">MAXIMUM ✓</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-light/60 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-dark">{r.label}</td>
                  <Cell v={r.tutor} />
                  <Cell v={r.course} />
                  <Cell v={r.max} hi />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
