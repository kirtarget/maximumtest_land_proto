import { TrendingDown, TrendingUp } from 'lucide-react'

interface Props {
  before: string; after: string; name: string; subject: string; source: string
}
export default function ResultCard({ before, after, name, subject, source }: Props) {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col gap-4 min-w-[300px] max-w-[420px]">
      <span className="inline-flex self-start bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full">{subject}</span>
      <div className="bg-light rounded-xl p-4 text-sm text-muted italic leading-relaxed flex items-start gap-2">
        <TrendingDown className="w-4 h-4 text-muted/60 shrink-0 mt-0.5" />
        <span>&laquo;{before}&raquo;</span>
      </div>
      <div className="bg-green-50 rounded-xl p-4 text-sm text-green-700 font-medium leading-relaxed flex items-start gap-2">
        <TrendingUp className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
        <span>{after}</span>
      </div>
      <div className="flex items-center justify-between pt-1">
        <span className="text-sm font-semibold text-dark">{name}</span>
        <span className="text-xs text-muted">{source}</span>
      </div>
    </div>
  )
}
