'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendQuizLead } from '@/lib/api'
import { getUtmParams, trackFormSubmit } from '@/lib/analytics'
import { CheckCircle2, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const STEPS = [
  { q: 'Какой экзамен сдаёт ваш ребёнок?', key: 'examType', opts: ['ЕГЭ', 'ОГЭ', 'Хочу повысить оценки в школе'] },
  { q: 'В каком классе учится ребёнок?', key: 'classYear', opts: ['9 класс', '10 класс', '11 класс', '5–8 класс'] },
  { q: 'Где удобнее заниматься?', key: 'format', opts: ['Онлайн', 'Офлайн (в одном из 65 городов)', 'Не важно'] },
]

const SUBJECTS = ['Математика', 'Русский', 'Физика', 'Химия', 'Биология', 'История', 'Обществознание', 'Английский', 'Информатика']

const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().min(10, 'Введите телефон'),
  agree: z.boolean().refine(v => v, 'Необходимо согласие'),
})
type Form = z.infer<typeof schema>

function Progress({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-muted mb-2">
        <span>Шаг {step} из {total}</span><span>{Math.round(step / total * 100)}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full">
        <div className="h-full bg-orange rounded-full transition-all duration-300" style={{ width: `${step / total * 100}%` }} />
      </div>
    </div>
  )
}

export default function Quiz() {
  const [step, setStep] = useState(0) // 0-2 = single choice, 3 = multi subjects, 4 = form, 5 = done
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ resolver: zodResolver(schema) })

  const totalSteps = 5

  function pickSingle(key: string, val: string) {
    setAnswers(p => ({ ...p, [key]: val }))
    setStep(s => s + 1)
  }

  function toggleSubject(val: string) {
    setAnswers(p => {
      const cur = (p.subjects as string[]) || []
      return { ...p, subjects: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] }
    })
  }

  async function onSubmit(data: Form) {
    setLoading(true); setError('')
    try {
      await sendQuizLead({
        name: data.name, phone: data.phone,
        examType: answers.examType as string,
        classYear: answers.classYear as string || '',
        subjects: (answers.subjects as string[]) || [],
        format: answers.format as string || '',
        ...getUtmParams(),
      })
      trackFormSubmit(((answers.subjects as string[]) || []).join(', '))
      setStep(5)
    } catch { setError('Не удалось отправить заявку. Попробуйте позвонить.') }
    finally { setLoading(false) }
  }

  return (
    <section id="quiz" className="bg-light py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Узнайте стоимость подготовки для вашего ребёнка
          </h2>
          <p className="mt-3 text-muted">4 вопроса · 2 минуты · персональная программа</p>
        </div>

        <div className="bg-white rounded-[20px] p-5 sm:p-7 md:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.08)]">

          {step === 5 ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-3">Готово!</h3>
              <p className="text-muted leading-relaxed">
                Ваша персональная программа рассчитана.<br />
                Специалист позвонит в течение 15 минут в рабочее время.
              </p>
            </div>
          ) : step < 3 ? (
            // Single-choice steps
            <div>
              <Progress step={step + 1} total={totalSteps} />
              <p className="text-lg font-semibold text-dark mb-5">{STEPS[step].q}</p>
              <div className="flex flex-col gap-3">
                {STEPS[step].opts.map(opt => (
                  <button key={opt} onClick={() => pickSingle(STEPS[step].key, opt)}
                    className="w-full text-left px-5 py-3.5 rounded-xl border border-border hover:border-orange hover:bg-orange/5 transition-all text-dark font-medium text-base">
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : step === 3 ? (
            // Multi-subject
            <div>
              <Progress step={4} total={totalSteps} />
              <p className="text-lg font-semibold text-dark mb-5">Какие предметы нужны?</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {SUBJECTS.map(s => {
                  const sel = ((answers.subjects as string[]) || []).includes(s)
                  return (
                    <button key={s} onClick={() => toggleSubject(s)}
                      className={`px-4 py-2 rounded-xl border font-medium text-sm transition-all ${sel ? 'bg-orange text-white border-orange' : 'border-border text-dark hover:border-orange hover:bg-orange/5'}`}>
                      {s}
                    </button>
                  )
                })}
              </div>
              <Button onClick={() => setStep(4)} disabled={!((answers.subjects as string[])?.length > 0)} label="quiz_subjects_next">
                Далее →
              </Button>
            </div>
          ) : (
            // Final form
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Progress step={5} total={totalSteps} />
              <p className="text-lg font-semibold text-dark">Последний шаг — и программа готова</p>
              <input {...register('name')} placeholder="Имя ребёнка"
                className="w-full h-12 px-4 rounded-xl border border-border focus:border-orange focus:outline-none text-dark placeholder:text-muted/60 text-base" />
              {errors.name && <p className="text-orange text-sm">{errors.name.message}</p>}
              <input {...register('phone')} placeholder="Телефон родителя" type="tel"
                className="w-full h-12 px-4 rounded-xl border border-border focus:border-orange focus:outline-none text-dark placeholder:text-muted/60 text-base" />
              {errors.phone && <p className="text-orange text-sm">{errors.phone.message}</p>}
              <label className="flex items-start gap-3 cursor-pointer">
                <input {...register('agree')} type="checkbox" className="mt-1 accent-orange w-4 h-4" />
                <span className="text-sm text-muted">Согласен с <a href="/privacy" className="text-orange underline">обработкой персональных данных</a></span>
              </label>
              {errors.agree && <p className="text-orange text-sm">{errors.agree.message}</p>}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" disabled={loading} label="quiz_submit" className="w-full justify-center h-14 text-base">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Узнать стоимость'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
