import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="bg-dark text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Начните подготовку сегодня —<br />
          пока другие откладывают
        </h2>
        <p className="mt-4 text-white/70 text-lg leading-relaxed">
          Каждый месяц без подготовки — это месяц нарастающей тревоги.<br />
          Первый шаг занимает 2 минуты.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#quiz" size="lg" label="final_cta_primary">
            Рассчитать стоимость
          </Button>
          <Button
            href="/courses"
            size="lg"
            variant="outline"
            label="final_cta_programs"
            className="border-white/40 text-white hover:bg-white hover:text-dark"
          >
            Посмотреть программы
          </Button>
        </div>
      </div>
    </section>
  )
}
