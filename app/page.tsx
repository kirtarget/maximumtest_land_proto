import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import StatStrip from '@/components/sections/StatStrip'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Mechanism from '@/components/sections/Mechanism'
import PlatformSection from '@/components/sections/PlatformSection'
import Teachers from '@/components/sections/Teachers'
import Results from '@/components/sections/Results'
import ComparisonTable from '@/components/sections/ComparisonTable'
import Pricing from '@/components/sections/Pricing'
import OfflineCities from '@/components/sections/OfflineCities'
import Guarantee from '@/components/sections/Guarantee'
import FreeLesson from '@/components/sections/FreeLesson'
import Quiz from '@/components/sections/Quiz'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatStrip />
        <ProblemSolution />
        <Mechanism />
        <PlatformSection />
        <Teachers />
        <Results />
        <ComparisonTable />
        <FreeLesson />
        <Pricing />
        <Guarantee />
        <OfflineCities />
        <FAQ />
        <Quiz />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
