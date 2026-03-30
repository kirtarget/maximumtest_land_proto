'use client'
import * as Accordion from '@radix-ui/react-accordion'
import AccordionItem from '@/components/ui/AccordionItem'
import { faqs } from './egeFaqData'

export default function EgeFAQ() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Частые вопросы о подготовке к ЕГЭ
        </h2>
        <Accordion.Root type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} question={f.q} answer={f.a} />
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
