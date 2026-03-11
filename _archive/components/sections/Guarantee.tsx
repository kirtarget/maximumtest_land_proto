import { ShieldCheck, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

const points = [
  'Гарантия возврата денег — прописана в договоре',
  'Договор публичной оферты — вы знаете, за что платите',
  'Поддержка на весь период подготовки — от первого урока до дня экзамена',
]

export default function Guarantee() {
  return (
    <section className="bg-dark text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Guarantee block */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-10 h-10 text-accent flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                Мы уверены в результате настолько, что прописали это в договоре
              </h2>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Если по итогам обучения вы не сдадите экзамен — мы вернём деньги.
              Без дополнительных условий. Это не маркетинговое обещание,
              это юридическое обязательство.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <Button href="/offer.pdf" variant="outline" label="guarantee_contract"
              className="border-white/40 text-white hover:bg-white hover:text-dark">
              Посмотреть договор
            </Button>
          </div>

          {/* FIPI block */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold mb-4">
              Одобрено ФИПИ — организацией, которая составляет сами экзамены
            </h3>
            <p className="text-white/70 leading-relaxed">
              Наши материалы проверены Федеральным институтом педагогических
              измерений — тем самым, кто разрабатывает задания ЕГЭ и ОГЭ.
              Это значит: мы готовим именно к тому, что будет на экзамене.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
