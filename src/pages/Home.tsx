/**
 * Home.tsx — Main landing page that composes all portfolio sections.
 * This is the "/" route. Each section is a self-contained feature component.
 * Initializes the scroll-reveal IntersectionObserver on mount.
 */

import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../features/hero/Hero'
import NavBar from '../components/NavBar/NavBar'
import About from '../features/about/About'
import Stats from '../features/about/Stats'
import ProjectsSection from '../features/projects/ProjectsSection'
import SkillsSection from '../features/skills/SkillsSection'
import Workflow from '../features/workflow/Workflow'
import Contact from '../features/contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  /* Activate IntersectionObserver for all .reveal elements on this page */
  useScrollReveal()

  return (
    <>
      {/* Hero section — name, role, tagline, social links */}
      <Hero />

      {/* Sticky navigation bar — sits below hero */}
      <NavBar />

      {/* Projects section — tabbed professional/personal cards */}
      <ProjectsSection />

      {/* About section — three value pillars */}
      <About />

      {/* Stats badges — career metrics */}
      <Stats />

      {/* Skills section — list/grid toggle */}
      <SkillsSection />

      {/* Workflow section — sprint-to-deploy timeline */}
      <Workflow />

      {/* Contact CTA — email, résumé, social */}
      <Contact />

      {/* Footer — attribution + year */}
      <Footer />
    </>
  )
}