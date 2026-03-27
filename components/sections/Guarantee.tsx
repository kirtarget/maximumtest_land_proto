'use client'

import { useState, useEffect } from 'react'
import { ShieldCheck, FileText, HeadphonesIcon, Building2, Download, X } from 'lucide-react'

const PDF_URL = 'https://maximumtest-site.storage.yandexcloud.net/main-docs/cb33a86f-47b6-4a4c-b733-f8fc29d6ea19-%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%20%28%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0%29%20%D0%B2%D0%BE%D0%B7%D0%BC%D0%B5%D0%B7%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D1%85%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%D0%BC%20%D0%94%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.pdf'

const points = [
  { icon: ShieldCheck, title: 'Возврат денег прописан в договоре', desc: 'Не маркетинговое обещание — юридическое обязательство. Если ребёнок не сдаёт экзамен после полного курса, мы возвращаем деньги.' },
  { icon: FileText, title: 'Договор публичной оферты', desc: 'Подписывается при поступлении. Вы знаете, за что платите, до первого урока.' },
  { icon: HeadphonesIcon, title: 'Поддержка до дня экзамена', desc: 'Кураторы на связи весь период подготовки: от первого урока до выхода из аудитории.' },
]

export default function Guarantee() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
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
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center h-[52px] px-7 bg-orange text-white text-base font-bold rounded-xl hover:bg-orangeh transition-colors"
              >
                Посмотреть договор
              </button>
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

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70"
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
        >
          <div className="bg-white rounded-2xl overflow-hidden w-full max-w-[900px] h-[90vh] flex flex-col shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E8E8] flex-shrink-0">
              <span className="text-sm font-semibold text-[#2E2E2E]">Договор возмездного оказания платных образовательных услуг</span>
              <div className="flex items-center gap-2">
                <a
                  href={PDF_URL}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 h-9 px-3.5 bg-orange text-white text-[13px] font-semibold rounded-lg hover:bg-orangeh transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Скачать PDF
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Закрыть"
                  className="w-9 h-9 rounded-lg border border-[#E8E8E8] bg-white text-[#8F96A1] flex items-center justify-center hover:bg-[#F5F5F5] hover:text-[#2E2E2E] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe src={PDF_URL} title="Договор оферты" className="w-full h-full border-0 block" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
