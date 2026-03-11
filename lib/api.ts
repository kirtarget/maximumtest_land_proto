export interface QuizLeadPayload {
  name: string
  phone: string
  classYear: string
  examType: string
  subjects: string[]
  format: string
  [key: string]: string | string[]
}

export async function sendQuizLead(data: QuizLeadPayload): Promise<void> {
  const res = await fetch('/api/quiz-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to send lead')
}
