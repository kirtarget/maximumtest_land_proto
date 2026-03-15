const CITIES = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Казань',
  'Екатеринбург', 'Краснодар', 'Нижний Новгород', 'Ростов-на-Дону',
  'Воронеж', 'Уфа', 'Пермь', 'Самара',
]

const perks = [
  { emoji: '🏫', title: 'Можно прийти и посмотреть',  sub: 'Запишитесь на пробный урок в ближайшем центре' },
  { emoji: '🌐', title: 'Онлайн — для любого города', sub: 'Те же преподаватели, та же система, те же результаты' },
  { emoji: '📍', title: 'Единый стандарт качества',   sub: 'Все центры работают по одной программе и методике' },
]

export default function OfflineCities() {
  return (
    <section className="bg-white py-16 md:py-24" id="cities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Шапка */}
        <div className="max-w-2xl mb-10">
          <span className="inline-flex bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Офлайн и онлайн
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark leading-tight">
            Нас можно найти в 65 городах
          </h2>
          <p className="text-base text-muted leading-relaxed mt-3">
            13 лет работы — это не слова на сайте. Реальные адреса, реальные преподаватели,
            и родители могут прийти на занятие и убедиться сами.
          </p>
        </div>

        {/* Города */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CITIES.map(city => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 bg-light border border-border rounded-full px-4 py-2 text-sm font-medium text-dark"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
              {city}
            </span>
          ))}
          <span className="inline-flex items-center bg-orange text-white rounded-full px-4 py-2 text-sm font-semibold">
            + ещё 53 города
          </span>
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {perks.map(p => (
            <div key={p.title} className="flex items-start gap-3 bg-light rounded-2xl p-5">
              <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center shrink-0 text-xl">
                {p.emoji}
              </div>
              <div>
                <div className="text-sm font-bold text-dark">{p.title}</div>
                <div className="text-xs text-muted mt-1 leading-relaxed">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
