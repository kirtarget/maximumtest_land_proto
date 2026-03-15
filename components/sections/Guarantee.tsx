import { ShieldCheck, FileText, HeadphonesIcon, Building2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const points = [
  { icon: ShieldCheck, title: 'Возврат денег прописан в договоре', desc: 'Не маркетинговое обещание — юридическое обязательство. Если ребёнок не сдаёт экзамен после полного курса, мы возвращаем деньги.' },
  { icon: FileText, title: 'Договор публичной оферты', desc: 'Подписывается при поступлении. Вы знаете, за что платите, до первого урока.' },
  { icon: HeadphonesIcon, title: 'Поддержка до дня экзамена', desc: 'Кураторы на связи весь период подготовки: от первого урока до выхода из аудитории.' },
]

export default function Guarantee() {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange/20 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span className="text-orange text-sm font-semibold">Гарантия результата</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
              Мы уверены в результате настолько,
              что прописали это в договоре
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Ваш ребёнок изучит все темы и сдаст экзамен на <strong className="text-white">80+ баллов или оценку 5</strong>.
              Если нет — возвращаем деньги без дополнительных условий.
            </p>
            <Button
              href="/offer.pdf" label="guarantee_contract"
              className="bg-orange text-white hover:bg-orangeh"
            >
              Посмотреть договор
            </Button>
          </div>

          {/* Right — cards */}
          <div className="flex flex-col gap-4">
            {points.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="flex items-start gap-4 bg-white/5 rounded-[20px] p-5 border border-white/10">
                  <div className="w-10 h-10 bg-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{p.title}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )
            })}

            {/* FIPI badge */}
            <div className="bg-white/5 rounded-[20px] p-5 border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 bg-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-orange" />
              </div>
              <div>
                <p className="font-semibold text-white">Одобрено ФИПИ</p>
                <p className="text-white/60 text-sm">Наши материалы соответствуют официальным требованиям к ЕГЭ и ОГЭ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
