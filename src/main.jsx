import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'motion/react'
import '@fontsource-variable/rubik';
import './index.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import Achivement from './Achivement';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Achivement />
      <Contact />
      <Footer />
    </MotionConfig>
  </StrictMode>,
)
