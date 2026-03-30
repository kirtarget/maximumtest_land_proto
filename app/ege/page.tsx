import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import EgeHero from '@/components/sections/ege/EgeHero'
import EgeStatStrip from '@/components/sections/ege/EgeStatStrip'
import EarlyStart from '@/components/sections/ege/EarlyStart'
import TenthGradeOptions from '@/components/sections/ege/TenthGradeOptions'
import EgeProblemSolution from '@/components/sections/ege/EgeProblemSolution'
import EgeMechanism from '@/components/sections/ege/EgeMechanism'
import SubjectsGrid from '@/components/sections/ege/SubjectsGrid'
import EgePricing from '@/components/sections/ege/EgePricing'
import UniversityLogos from '@/components/sections/ege/UniversityLogos'
import SystemFeatures from '@/components/sections/ege/SystemFeatures'
import EgeFAQ from '@/components/sections/ege/EgeFAQ'
import EgeFinalCTA from '@/components/sections/ege/EgeFinalCTA'
import { faqs } from '@/components/sections/ege/egeFaqData'

export const metadata: Metadata = {
  title: 'Подготовка к ЕГЭ онлайн — курсы с гарантией 80+ баллов | Maximum',
  description: 'Курсы подготовки к ЕГЭ от Maximum Education. 93% учеников доходят до конца. Гарантия результата в договоре. Онлайн и в классе, 65 городов. Для 10 и 11 класса.',
  alternates: { canonical: 'https://maximumtest.ru/ege/' },
  openGraph: {
    title: 'Подготовка к ЕГЭ онлайн — курсы с гарантией 80+ | Maximum',
    description: '93% учеников доходят до конца. Гарантия результата в договоре. Онлайн и в классе.',
    url: 'https://maximumtest.ru/ege/',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://maximumtest.ru/' },
    { '@type': 'ListItem', position: 2, name: 'Подготовка к ЕГЭ', item: 'https://maximumtest.ru/ege/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function EgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Подготовка к ЕГЭ' }]} />
        <EgeHero />
        <EgeStatStrip />
        <EarlyStart />
        <TenthGradeOptions />
        <EgeProblemSolution />
        <EgeMechanism />
        <SubjectsGrid />
        <EgePricing />
        <UniversityLogos />
        <SystemFeatures />
        <EgeFAQ />
        <EgeFinalCTA />
      </main>
      <Footer />
    </>
  )
}
