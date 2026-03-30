import { Phone } from 'lucide-react'

const col1 = [
  { label: 'Подготовка к ЕГЭ', href: '/ege/' },
  { label: 'Подготовка к ОГЭ', href: '#mechanism' },
  { label: 'Преподаватели', href: '#teachers' },
  { label: 'Результаты', href: '#results' },
]
const col2 = [
  { label: 'Политика конфиденциальности', href: '/privacy' },
  { label: 'Договор оферты', href: '/offer.pdf' },
  { label: 'Контакты', href: '/contacts' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange font-bold text-2xl">M</span>
              <span className="font-bold text-white text-lg">MAXIMUM</span>
            </div>
            <a href="tel:88007072562" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm mb-1">
              <Phone className="w-4 h-4" /> 8 (800) 707-25-62
            </a>
            <p className="text-xs text-white/40">Звонок бесплатный</p>
          </div>

          {/* Курсы */}
          <div>
            <p className="font-semibold text-white text-sm mb-4">Курсы</p>
            <ul className="space-y-2.5">
              {col1.map(l => <li key={l.label}><a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a></li>)}
            </ul>
          </div>

          {/* Документы */}
          <div>
            <p className="font-semibold text-white text-sm mb-4">Документы</p>
            <ul className="space-y-2.5">
              {col2.map(l => <li key={l.label}><a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a></li>)}
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <p className="font-semibold text-white text-sm mb-4">Мы в соцсетях</p>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm hover:text-white transition-colors">ВКонтакте</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} MAXIMUM Education. Все права защищены.</span>
          <span>ООО «Юмакс», ИНН 7730681080 · Реклама: ООО «Юмакс»</span>
        </div>
      </div>
    </footer>
  )
}
