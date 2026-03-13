const CITIES = [
  { name: 'Москва',          since: 'с 2013' },
  { name: 'Санкт-Петербург', since: 'с 2014' },
  { name: 'Новосибирск',     since: 'с 2017' },
  { name: 'Казань',          since: 'с 2017' },
  { name: 'Екатеринбург',    since: 'с 2017' },
  { name: 'Краснодар',       since: 'с 2018' },
  { name: 'Нижний Новгород', since: 'с 2018' },
  { name: 'Ростов-на-Дону',  since: 'с 2019' },
  { name: 'Воронеж',         since: 'с 2019' },
  { name: 'Уфа',             since: 'с 2019' },
  { name: 'Пермь',           since: 'с 2020' },
  { name: 'Самара',          since: 'с 2020' },
]

const stats = [
  { n: '65', label: 'городов присутствия' },
  { n: '13', label: 'лет на рынке' },
  { n: '3',  label: 'страны: RU · BY · KZ' },
]

const perks = [
  { emoji: '🏫', title: 'Можно прийти и посмотреть',  sub: 'Запишитесь на пробный урок в ближайшем центре' },
  { emoji: '🌐', title: 'Онлайн — для любого города', sub: 'Те же преподаватели, та же система, те же результаты' },
  { emoji: '📍', title: 'Франшиза с 2017 года',        sub: 'Единый стандарт качества во всех городах' },
]

export default function OfflineCities() {
  return (
    <section className="bg-white py-16 md:py-24" id="cities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* A — шапка */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10">

          {/* Левая колонка */}
          <div className="flex-1">
            <span className="inline-flex bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Офлайн и онлайн
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark leading-tight">
              Мы не стартап. Нас можно найти в 65 городах.
            </h2>
            <p className="text-base text-muted leading-relaxed mt-4">
              13 лет работы — это не слова на сайте. Это реальные адреса,
              реальные преподаватели и родители, которые могут прийти
              на занятие и посмотреть своими глазами.
            </p>
          </div>

          {/* Три цифры */}
          <div className="grid grid-cols-3 gap-3 md:flex md:flex-col md:gap-3 md:min-w-[160px]">
            {stats.map(s => (
              <div key={s.n} className="bg-light rounded-2xl p-4 md:p-5 text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange leading-none">{s.n}</div>
                <div className="text-[11px] md:text-xs text-muted mt-1.5 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* B — сетка городов */}
        <div className="flex flex-wrap gap-2 mt-10">
          {CITIES.map(city => (
            <div
              key={city.name}
              className="bg-light border border-border rounded-xl px-3 py-2.5 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-dark leading-none">{city.name}</div>
                <div className="text-[11px] text-muted mt-0.5">{city.since}</div>
              </div>
            </div>
          ))}
          <div className="bg-orange rounded-xl px-3 py-2.5 flex items-center">
            <span className="text-sm font-semibold text-white">+ ещё 53 города →</span>
          </div>
        </div>

        {/* C — нижняя полоска */}
        <div className="mt-8 bg-light rounded-2xl p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
            {perks.map((p, i) => (
              <div key={p.title} className="flex items-start gap-3 md:px-6 first:pl-0 last:pr-0">
                {/* vertical divider between items on desktop */}
                {i > 0 && <div className="hidden md:block absolute left-0 top-2 w-px h-10 bg-border" />}
                <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
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

      </div>
    </section>
  )
}
