/**
 * Home.tsx — Main landing page that composes all portfolio sections.
 * This is the "/" route. Each section is a self-contained feature component.
 * Initializes the scroll-reveal IntersectionObserver on mount.
 */

import { useScrollReveal } from '../hooks/useScrollReveal'
import { GitHubStatsWidget } from '@raymondjosephsotto/github-stats-widget'
import Hero from '../features/hero/Hero'
import NavBar from '../components/NavBar/NavBar'
import About from '../features/about/About'
import ProjectsSection from '../features/projects/ProjectsSection'
import Workflow from '../features/workflow/Workflow'
import Contact from '../features/contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
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

      {/* GitHub Stats */}
      <div className='sec'><GitHubStatsWidget  apiUrl={import.meta.env.VITE_GITHUB_STATS_API_URL} /></div>

      {/* Workflow section — sprint-to-deploy timeline */}
      <Workflow />

      {/* Contact CTA — email, résumé, social */}
      <Contact />

      {/* Footer — attribution + year */}
      <Footer />
    </>
  )
}

export default Home