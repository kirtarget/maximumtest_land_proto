'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendQuizLead } from '@/lib/api'
import { getUtmParams, trackFormSubmit } from '@/lib/analytics'
import { CheckCircle2, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'

// ── Step data ─────────────────────────────────────────────────────────────────
const step1 = {
  question: 'Какой экзамен сдаёт ваш ребёнок?',
  options: ['ЕГЭ', 'ОГЭ', 'Хочу повысить оценки в школе'],
}
const step2 = {
  question: 'В каком классе учится ребёнок?',
  options: ['9 класс', '10 класс', '11 класс', '5–8 класс'],
}
const step3 = {
  question: 'Какие предметы нужны?',
  options: ['Математика', 'Русский', 'Физика', 'Химия', 'Биология', 'История', 'Обществознание', 'Английский', 'Информатика'],
  multiple: true,
}
const step4 = {
  question: 'Где удобнее заниматься?',
  options: ['Онлайн', 'Офлайн (в одном из 65 городов)', 'Не важно'],
}

// ── Final form schema ─────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().min(10, 'Введите корректный телефон'),
  agree: z.boolean().refine(v => v, 'Необходимо согласие'),
})
type FormData = z.infer<typeof schema>

// ── ProgressBar ───────────────────────────────────────────────────────────────
function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-mid mb-2">
        <span>Шаг {step} из {total}</span>
        <span>{Math.round((step / total) * 100)}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
    </div>
  )
}

// ── Main Quiz component ────────────────────────────────────────────────────────
export default function Quiz() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function selectSingle(key: string, val: string) {
    setAnswers(prev => ({ ...prev, [key]: val }))
    setStep(s => s + 1)
  }

  function toggleMultiple(val: string) {
    setAnswers(prev => {
      const current = (prev.subjects as string[]) || []
      return {
        ...prev,
        subjects: current.includes(val) ? current.filter(v => v !== val) : [...current, val],
      }
    })
  }

  async function onSubmit(data: FormData) {
    setLoading(true)
    setError('')
    try {
      await sendQuizLead({
        name: data.name,
        phone: data.phone,
        examType: answers.examType as string,
        classYear: answers.classYear as string,
        subjects: (answers.subjects as string[]) || [],
        format: answers.format as string,
        ...getUtmParams(),
      })
      const subject = ((answers.subjects as string[]) || []).join(', ')
      trackFormSubmit(subject)
      setSubmitted(true)
    } catch {
      setError('Не удалось отправить заявку. Попробуйте позвонить нам.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quiz" className="bg-accent/5 py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Узнайте стоимость подготовки именно для вашего ребёнка
          </h2>
          <p className="mt-3 text-mid">4 вопроса — 2 минуты — персональная программа</p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-border">
          {submitted ? (
            // Thank You screen
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-3">Готово!</h3>
              <p className="text-mid leading-relaxed">
                Ваша персональная программа подготовки рассчитана.<br />
                Наш специалист позвонит в течение 15 минут в рабочее время.
              </p>
            </div>
          ) : (
            <>
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <ProgressBar step={1} total={4} />
                  <p className="text-lg font-semibold text-dark mb-5">{step1.question}</p>
                  <div className="flex flex-col gap-3">
                    {step1.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => selectSingle('examType', opt)}
                        className="w-full text-left px-5 py-3 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all text-dark font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <ProgressBar step={2} total={4} />
                  <p className="text-lg font-semibold text-dark mb-5">{step2.question}</p>
                  <div className="flex flex-col gap-3">
                    {step2.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => selectSingle('classYear', opt)}
                        className="w-full text-left px-5 py-3 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all text-dark font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 — multi select */}
              {step === 3 && (
                <div>
                  <ProgressBar step={3} total={4} />
                  <p className="text-lg font-semibold text-dark mb-5">{step3.question}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {step3.options.map(opt => {
                      const selected = ((answers.subjects as string[]) || []).includes(opt)
                      return (
                        <button
                          key={opt}
                          onClick={() => toggleMultiple(opt)}
                          className={`px-4 py-2 rounded-xl border font-medium text-sm transition-all ${
                            selected
                              ? 'bg-accent text-white border-accent'
                              : 'border-border text-dark hover:border-accent hover:bg-accent/5'
                          }`}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>
                  <Button
                    onClick={() => setStep(4)}
                    disabled={!((answers.subjects as string[])?.length > 0)}
                    label="quiz_step3_next"
                  >
                    Далее →
                  </Button>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div>
                  <ProgressBar step={4} total={4} />
                  <p className="text-lg font-semibold text-dark mb-5">{step4.question}</p>
                  <div className="flex flex-col gap-3 mb-6">
                    {step4.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => { setAnswers(prev => ({ ...prev, format: opt })); setStep(5) }}
                        className="w-full text-left px-5 py-3 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all text-dark font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Final form */}
              {step === 5 && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <ProgressBar step={4} total={4} />
                  <p className="text-lg font-semibold text-dark mb-1">Последний шаг — и программа готова</p>

                  <div>
                    <input
                      {...register('name')}
                      placeholder="Имя ребёнка"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:outline-none text-dark placeholder:text-mid/60"
                    />
                    {errors.name && <p className="text-accent text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('phone')}
                      placeholder="Телефон родителя"
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:outline-none text-dark placeholder:text-mid/60"
                    />
                    {errors.phone && <p className="text-accent text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input {...register('agree')} type="checkbox" className="mt-1 accent-accent" />
                    <span className="text-sm text-mid">
                      Согласен с{' '}
                      <a href="/privacy" className="text-accent underline">обработкой персональных данных</a>
                    </span>
                  </label>
                  {errors.agree && <p className="text-accent text-sm">{errors.agree.message}</p>}

                  {error && <p className="text-accent text-sm">{error}</p>}

                  <Button type="submit" disabled={loading} label="quiz_submit" className="w-full justify-center">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Узнать стоимость'}
                  </Button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
