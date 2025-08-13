import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import InnovateSection from './components/InnovateSection'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Plans from './components/Plans'
import Stats from './components/Stats'
import LatestUpdates from './components/LatestUpdates'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full bg-cyan-50">
      <Header />
      <Hero />
      <InnovateSection />
      <FAQ />
      <Testimonials />
      <Plans />
      <Stats />
      <LatestUpdates />
      <Partners />
      <Contact />
      <Footer />
    </div>
  )
}

export default App