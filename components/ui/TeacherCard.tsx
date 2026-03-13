import Image from 'next/image'

interface Props {
  photo: string; name: string; subject: string
  achievement1: string; achievement2: string; quote: string
}
export default function TeacherCard({ photo, name, subject, achievement1, achievement2, quote }: Props) {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-light">
          <Image src={photo} alt={name} fill className="object-cover" sizes="64px" />
        </div>
        <div>
          <div className="font-semibold text-dark">{name}</div>
          <div className="text-sm text-orange font-medium">{subject}</div>
        </div>
      </div>
      <ul className="space-y-1.5">
        <li className="text-sm text-muted flex items-start gap-2">
          <span className="text-orange mt-0.5 font-bold">✓</span>{achievement1}
        </li>
        <li className="text-sm text-muted flex items-start gap-2">
          <span className="text-orange mt-0.5 font-bold">✓</span>{achievement2}
        </li>
      </ul>
      <blockquote className="text-sm italic text-muted border-l-2 border-orange pl-3 leading-relaxed">
        &laquo;{quote}&raquo;
      </blockquote>
    </div>
  )
}
