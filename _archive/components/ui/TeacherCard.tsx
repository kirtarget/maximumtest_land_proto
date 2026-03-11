import Image from 'next/image'

interface TeacherCardProps {
  photo: string
  name: string
  subject: string
  achievement1: string
  achievement2: string
  quote: string
}

export default function TeacherCard({ photo, name, subject, achievement1, achievement2, quote }: TeacherCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border flex flex-col gap-4 min-w-[260px]">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-light">
          <Image src={photo} alt={name} fill className="object-cover" sizes="64px" />
        </div>
        <div>
          <div className="font-semibold text-dark">{name}</div>
          <div className="text-sm text-mid">{subject}</div>
        </div>
      </div>
      <ul className="space-y-1">
        <li className="text-sm text-mid flex items-start gap-2">
          <span className="text-accent mt-0.5">✓</span> {achievement1}
        </li>
        <li className="text-sm text-mid flex items-start gap-2">
          <span className="text-accent mt-0.5">✓</span> {achievement2}
        </li>
      </ul>
      <blockquote className="text-sm italic text-mid border-l-2 border-accent pl-3 leading-relaxed">
        &laquo;{quote}&raquo;
      </blockquote>
    </div>
  )
}
