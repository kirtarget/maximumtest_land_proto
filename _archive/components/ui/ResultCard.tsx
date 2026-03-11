interface ResultCardProps {
  before: string
  after: string
  name: string
  subject: string
  source: string
}

export default function ResultCard({ before, after, name, subject, source }: ResultCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border flex flex-col gap-4 min-w-[300px] max-w-[420px]">
      <div className="inline-flex">
        <span className="bg-[#F5F5F5] text-mid text-xs font-medium px-3 py-1 rounded-full">{subject}</span>
      </div>
      <div className="bg-light rounded-xl p-4 text-sm text-mid italic leading-relaxed">
        <span className="text-xl mr-2">😰</span>
        &laquo;{before}&raquo;
      </div>
      <div className="bg-[#F0FDF4] rounded-xl p-4 text-sm text-[#15803d] font-medium leading-relaxed">
        <span className="text-xl mr-2">✓</span>
        {after}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-dark">{name}</span>
        <span className="text-xs text-mid">{source}</span>
      </div>
    </div>
  )
}
