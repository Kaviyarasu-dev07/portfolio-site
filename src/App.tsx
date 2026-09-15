import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
