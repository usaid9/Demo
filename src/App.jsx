import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}