import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="bg-[#FD7E14] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          Начните подготовку сегодня
        </h2>
        <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Каждый месяц без подготовки — это месяц нарастающей тревоги.
          Первый шаг занимает 2 минуты.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="#quiz" size="lg" variant="white" label="final_primary" className="font-bold"
          >
            Рассчитать стоимость
          </Button>
          <Button
            href="tel:88007072562" size="lg" variant="ghost" label="final_phone"
            className="border-2 border-white/60 !text-white hover:bg-white/10"
          >
            Позвонить бесплатно
          </Button>
        </div>
      </div>
    </section>
  )
}
