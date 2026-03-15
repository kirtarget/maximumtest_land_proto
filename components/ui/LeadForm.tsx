'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { sendQuizLead } from '@/lib/api'
import { getUtmParams, trackFormSubmit } from '@/lib/analytics'

const CLASS_OPTIONS = ['5–8 класс', '9 класс', '10 класс', '11 класс']

const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().min(10, 'Введите телефон'),
  classYear: z.string().min(1, 'Выберите класс'),
})
type Form = z.infer<typeof schema>

interface Props {
  /** 'dark' — на тёмном/оранжевом фоне; 'light' — на светлом */
  variant?: 'dark' | 'light'
  label?: string
}

export default function LeadForm({ variant = 'light', label = 'inline_form' }: Props) {
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ resolver: zodResolver(schema) })

  async function onSubmit(data: Form) {
    setLoading(true)
    setServerError('')
    try {
      await sendQuizLead({
        name: data.name,
        phone: data.phone,
        classYear: data.classYear,
        examType: '',
        subjects: [],
        format: '',
        ...getUtmParams(),
      })
      trackFormSubmit(label)
      setDone(true)
    } catch {
      setServerError('Не удалось отправить. Позвоните: 8 (800) 707-25-62')
    } finally {
      setLoading(false)
    }
  }

  const isDark = variant === 'dark'

  const fieldCls = `h-14 px-4 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-orange/50 w-full
    ${isDark
      ? 'bg-white/20 text-white placeholder:text-white/60 focus:bg-white/25'
      : 'bg-[#F2F2F2] text-dark placeholder:text-muted/70'
    }`

  const wrapper = isDark
    ? 'w-full'
    : 'bg-white rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-5 sm:p-6 w-full'

  if (done) {
    return (
      <div className={wrapper}>
        <div className={`flex items-center gap-3 py-2 ${isDark ? 'text-white' : 'text-dark'}`}>
          <CheckCircle2 className="w-7 h-7 shrink-0 text-success" />
          <p className="font-semibold text-base">
            Готово! Специалист позвонит в течение 15 минут.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col sm:flex-row gap-3">

          {/* Имя */}
          <div className="flex-1">
            <input
              {...register('name')}
              placeholder="Имя"
              className={fieldCls}
            />
            {errors.name && (
              <p className={`mt-1 text-xs ${isDark ? 'text-white/80' : 'text-orange'}`}>
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Телефон */}
          <div className="flex-1">
            <input
              {...register('phone')}
              placeholder="Телефон"
              type="tel"
              className={fieldCls}
            />
            {errors.phone && (
              <p className={`mt-1 text-xs ${isDark ? 'text-white/80' : 'text-orange'}`}>
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Класс */}
          <div className="flex-1">
            <select
              {...register('classYear')}
              defaultValue=""
              className={`${fieldCls} appearance-none cursor-pointer ${isDark ? '' : 'pr-10'}`}
              style={isDark
                ? undefined
                : {
                    color: '#2E2E2E',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                  }
              }
            >
              <option value="" disabled style={{ color: '#2E2E2E', background: '#fff' }}>Выберите класс</option>
              {CLASS_OPTIONS.map(c => (
                <option key={c} value={c} style={{ color: '#2E2E2E', background: '#fff' }}>{c}</option>
              ))}
            </select>
            {errors.classYear && (
              <p className={`mt-1 text-xs ${isDark ? 'text-white/80' : 'text-orange'}`}>
                {errors.classYear.message}
              </p>
            )}
          </div>

          {/* Кнопка */}
          <button
            type="submit"
            disabled={loading}
            className={`h-14 px-6 rounded-xl font-bold text-base whitespace-nowrap transition-all duration-200 disabled:opacity-60 shrink-0
              ${isDark ? 'bg-white text-orange hover:bg-white/90' : 'bg-orange text-white hover:bg-orangeh'}`}
          >
            {loading
              ? <Loader2 className="w-5 h-5 animate-spin mx-auto" />
              : 'Записаться на курс'
            }
          </button>
        </div>

        {serverError && (
          <p className={`mt-2 text-sm ${isDark ? 'text-white/80' : 'text-red-500'}`}>{serverError}</p>
        )}

        <p className={`mt-3 text-sm ${isDark ? 'text-white/50' : 'text-muted/60'}`}>
          Оставляя заявку, вы даёте согласие на{' '}
          <a href="/privacy" className={`underline underline-offset-2 ${isDark ? 'text-white/70' : ''}`}>
            обработку персональных данных
          </a>
        </p>
      </form>
    </div>
  )
}
