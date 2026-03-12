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
  { emoji: '🏫', title: 'Можно прийти и посмотреть',      sub: 'Запишитесь на пробный урок в ближайшем центре' },
  { emoji: '🌐', title: 'Онлайн — для любого города',     sub: 'Те же преподаватели, та же система, те же результаты' },
  { emoji: '📍', title: 'Франшиза с 2017 года',            sub: 'Единый стандарт качества во всех городах' },
]

export default function OfflineCities() {
  return (
    <section className="bg-white py-16 md:py-24" id="cities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* A — шапка */}
        <div className="flex flex-col md:flex-row md:items-start gap-10">

          {/* Левая колонка */}
          <div className="max-w-[520px]">
            <span className="inline-flex bg-[#FD7E14]/10 text-[#FD7E14] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Офлайн и онлайн
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] leading-tight">
              Мы не стартап.<br />
              Нас можно найти в 65 городах.
            </h2>
            <p className="text-base text-[#8F96A1] leading-relaxed mt-4">
              13 лет работы — это не слова на сайте. Это реальные адреса,
              реальные преподаватели и родители, которые могут прийти
              на занятие и посмотреть своими глазами.
            </p>
          </div>

          {/* Правая колонка — три цифры */}
          <div className="flex flex-wrap gap-3 md:ml-auto">
            {stats.map(s => (
              <div key={s.n} className="bg-[#F5F5F5] rounded-2xl p-6 text-center min-w-[110px] flex-1">
                <div className="text-4xl md:text-5xl font-bold text-[#FD7E14] leading-none">{s.n}</div>
                <div className="text-xs text-[#8F96A1] mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* B — сетка городов */}
        <div className="flex flex-wrap gap-2.5 mt-10">
          {CITIES.map(city => (
            <div
              key={city.name}
              className="bg-[#F5F5F5] border border-[#E8E8E8] rounded-xl px-4 py-3 flex items-center gap-2.5"
            >
              <div className="w-2 h-2 rounded-full bg-[#FD7E14] flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-[#2E2E2E]">{city.name}</div>
                <div className="text-xs text-[#8F96A1] mt-0.5">{city.since}</div>
              </div>
            </div>
          ))}
          <div className="bg-[#FD7E14] rounded-xl px-4 py-3 flex items-center">
            <span className="text-sm font-semibold text-white">+ ещё 53 города →</span>
          </div>
        </div>

        {/* C — нижняя полоска */}
        <div className="mt-10 bg-[#F5F5F5] rounded-2xl p-6 flex flex-wrap gap-8 items-center">
          {perks.map((p, i) => (
            <>
              <div key={p.title} className="flex items-start gap-3 flex-1 min-w-[200px]">
                <div className="w-10 h-10 bg-[#FD7E14]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  {p.emoji}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2E2E2E]">{p.title}</div>
                  <div className="text-xs text-[#8F96A1] mt-1">{p.sub}</div>
                </div>
              </div>
              {i < perks.length - 1 && (
                <div className="w-px h-10 bg-[#E8E8E8] hidden md:block flex-shrink-0" />
              )}
            </>
          ))}
        </div>

      </div>
    </section>
  )
}
