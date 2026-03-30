const universities = [
  'МГУ',
  'МФТИ',
  'НИУ ВШЭ',
  'СПбГУ',
  'МГТУ им. Баумана',
  'МГИМО',
  'ИТМО',
  'РАНХиГС',
]

export default function UniversityLogos() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark text-center mb-10">
          Наши выпускники поступают в топовые вузы страны
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {universities.map(uni => (
            <div
              key={uni}
              className="bg-light border border-border rounded-xl px-6 py-3 text-dark font-semibold text-sm hover:border-orange/40 transition-colors"
            >
              {uni}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
