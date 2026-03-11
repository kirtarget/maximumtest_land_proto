import { Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="font-bold text-xl text-white mb-2">
              MAXIMUM <span className="text-accent">Education</span>
            </div>
            <a
              href="tel:88007072562"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              8 (800) 707-25-62
            </a>
            <div className="text-xs mt-1">(звонок бесплатный)</div>
          </div>

          {/* Links */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">Документы</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="/offer.pdf" className="hover:text-white transition-colors">Договор оферты</a></li>
              <li><a href="/contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">Мы в соцсетях</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">ВКонтакте</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">Юридическая информация</div>
            <p className="text-xs leading-relaxed">
              ООО «Юмакс»<br />
              ИНН 7730681080
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} MAXIMUM Education. Все права защищены.</span>
          <span>Реклама: ООО «Юмакс», ИНН 7730681080</span>
        </div>
      </div>
    </footer>
  )
}
