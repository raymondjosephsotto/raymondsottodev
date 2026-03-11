/**
 * NavBar.tsx — Sticky section navigation bar.
 * Uses IntersectionObserver (via useActiveSection hook) to highlight
 * the nav link for whichever section is currently in view.
 * On the home page, renders as anchor links; on other pages, links back to home.
 */

import { useLocation } from 'react-router-dom'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './NavBar.module.css'

/* Section IDs that the nav links point to */
const sections = ['projects', 'about', 'skills', 'workflow', 'contact'] as const

export default function NavBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  /* Track which section is in view (only relevant on home page) */
  const activeId = useActiveSection(isHome ? [...sections] : [])

  return (
    <div className={styles.wrap} id="navWrap">
      <nav className={styles.nav} id="nav">
        {sections.map((id) => {
          /* On home page: smooth-scroll anchors. On other pages: link back to home#section */
          const href = isHome ? `#${id}` : `/#${id}`
          const isActive = isHome && activeId === id

          return (
            <a
              key={id}
              href={href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
            >
              {/* Capitalize first letter for display */}
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
