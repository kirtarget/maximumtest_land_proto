import type { WithContext, Organization, FAQPage } from 'schema-dts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import StatStrip from '@/components/sections/StatStrip'
import ProblemBlock from '@/components/sections/ProblemBlock'
import Mechanism from '@/components/sections/Mechanism'
import Teachers from '@/components/sections/Teachers'
import Results from '@/components/sections/Results'
import ComparisonTable from '@/components/sections/ComparisonTable'
import Guarantee from '@/components/sections/Guarantee'
import Quiz from '@/components/sections/Quiz'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

const orgSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MAXIMUM Education',
  url: 'https://maximumtest.ru',
  telephone: '+78007072562',
  address: { '@type': 'PostalAddress', addressCountry: 'RU' },
}

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Как работает гарантия возврата денег?', acceptedAnswer: { '@type': 'Answer', text: 'Если по итогам обучения ваш ребёнок не сдаёт экзамен — мы возвращаем стоимость курса при условии прохождения полной программы.' } },
    { '@type': 'Question', name: 'Что значит «93% доходимость»?', acceptedAnswer: { '@type': 'Answer', text: '93% учеников, начавших обучение, доходят до дня экзамена и сдают его. Средний показатель по рынку — около 30%.' } },
    { '@type': 'Question', name: 'Есть ли офлайн-занятия?', acceptedAnswer: { '@type': 'Answer', text: 'Да, у нас 65 городов присутствия в России, Беларуси и Казахстане.' } },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <StatStrip />
        <ProblemBlock />
        <Mechanism />
        <Teachers />
        <Results />
        <ComparisonTable />
        <Guarantee />
        <Quiz />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
