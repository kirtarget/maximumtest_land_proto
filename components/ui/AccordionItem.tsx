'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'

interface Props { value: string; question: string; answer: string }

export default function AccordionItem({ value, question, answer }: Props) {
  return (
    <Accordion.Item value={value} className="border-b border-border last:border-0 group">
      <Accordion.Header>
        <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left font-semibold text-dark text-base md:text-lg hover:text-orange transition-colors gap-4">
          <span>{question}</span>
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-light flex items-center justify-center">
            <Plus className="w-4 h-4 group-data-[state=open]:hidden" />
            <Minus className="w-4 h-4 hidden group-data-[state=open]:block text-orange" />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <p className="pb-5 text-muted leading-relaxed">{answer}</p>
      </Accordion.Content>
    </Accordion.Item>
  )
}
