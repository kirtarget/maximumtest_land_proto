import LeadForm from '@/components/ui/LeadForm'
import { CheckCircle2 } from 'lucide-react'

const badges = ['Гарантия в договоре', 'Ответ за 15 минут', 'Первый урок бесплатно']

export default function EgeFinalCTA() {
  return (
    <section id="final-form" className="relative bg-dark overflow-hidden py-16 md:py-24">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-orange/5 blur-2xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          Запишитесь на бесплатный пробный урок
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Познакомьтесь с преподавателем и оцените формат — без обязательств
        </p>

        <LeadForm variant="dark" label="ege_final_form" />

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {badges.map(b => (
            <div key={b} className="flex items-center gap-1.5 text-white/60 text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
