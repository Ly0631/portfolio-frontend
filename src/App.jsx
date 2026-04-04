import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
