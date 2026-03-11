import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(6),
  examType: z.string(),
  classYear: z.string(),
  subjects: z.array(z.string()),
  format: z.string(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const webhookUrl = process.env.CRM_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('quiz-lead error:', err)
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
