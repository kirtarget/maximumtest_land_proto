import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import StatStrip from '@/components/sections/StatStrip'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Mechanism from '@/components/sections/Mechanism'
import Teachers from '@/components/sections/Teachers'
import Results from '@/components/sections/Results'
import ComparisonTable from '@/components/sections/ComparisonTable'
import Guarantee from '@/components/sections/Guarantee'
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
