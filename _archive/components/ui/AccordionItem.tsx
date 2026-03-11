'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  value: string
  question: string
  answer: string
}

export default function AccordionItem({ value, question, answer }: AccordionItemProps) {
  return (
    <Accordion.Item
      value={value}
      className="border-b border-border last:border-0"
    >
      <Accordion.Header>
        <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left font-semibold text-dark text-base md:text-lg hover:text-accent transition-colors group">
          {question}
          <ChevronDown
            className="h-5 w-5 text-mid transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0 ml-4"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <div className="pb-5 text-mid leading-relaxed">{answer}</div>
      </Accordion.Content>
    </Accordion.Item>
  )
}
