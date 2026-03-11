declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function pushEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

export function trackCtaClick(label: string) {
  pushEvent('cta_click', { label })
}

export function trackFormSubmit(subject: string) {
  pushEvent('form_submit', { subject })
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 90) {
  pushEvent(`scroll_depth_${depth}`)
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const val = params.get(key)
    if (val) utm[key] = val
  }
  return utm
}
