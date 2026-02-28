import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Starfield from './components/Starfield'
import Scene3D from './components/Scene3D'
import AnimatedDivider from './components/AnimatedDivider'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      {/* z-0: Background effects */}
      <Starfield />
      <div className="hidden lg:block">
        <Scene3D />
      </div>

      {/* z-50: Navigation chrome */}
      <Navbar />

      {/* z-10: Page content */}
      <main className="relative" style={{ zIndex: 10 }}>
        <Hero />
        <AboutSection />
        <AnimatedDivider />
        <Skills />
        <AnimatedDivider />
        <Experience />
        <AnimatedDivider />
        <Projects />
        <AnimatedDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}