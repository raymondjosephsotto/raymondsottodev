/**
 * ProjectsSection.tsx — Projects section orchestrator with tab switching.
 * Renders Professional, Personal, and Components tabs.
 * Card rendering is delegated to FeaturedCard, CompactCard, and ComponentCard.
 */

import { useState } from 'react'
import { getProjectsByType } from '../../data/projects'
import { getAllComponents } from '../../data/components'
import FeaturedCard from './FeaturedCard'
import CompactCard from './CompactCard'
import ComponentCard from './ComponentCard'
import styles from './ProjectsSection.module.css'

/* Tab options for the project filter */
type Tab = 'professional' | 'personal' | 'components'

const ProjectsSection = () => {
  /* Active tab state — defaults to professional */
  const [activeTab, setActiveTab] = useState<Tab>('professional')

  /* Get projects for the active tab from the data layer */
  const projectsToShow = getProjectsByType(activeTab === 'components' ? 'professional' : activeTab)

  /* Separate featured projects from compact cards */
  const featured = projectsToShow.filter((p) => p.layout === 'featured')
  const cards = projectsToShow.filter((p) => p.layout === 'card')

  /* Get all components for the components tab */
  const componentItems = getAllComponents()

  /* Only render a tab if it has content */
  const visibleTabs: Tab[] = [
    ...(getProjectsByType('professional').length > 0 ? (['professional'] as Tab[]) : []),
    ...(getProjectsByType('personal').length > 0 ? (['personal'] as Tab[]) : []),
    ...(componentItems.length > 0 ? (['components'] as Tab[]) : []),
  ]

  return (
    <section className="sec" id="projects">
      <p className="sec-label reveal">Projects</p>

      {/* Section heading — active line swaps based on tab */}
      <h2 className={`${styles.head} reveal`}>
        <span className={`${styles.line1} ${activeTab === 'professional' ? styles.lineActive : styles.lineDim}`}>Work I've built.</span><br />
        <span className={`${styles.line2} ${activeTab === 'personal' ? styles.lineActive : styles.lineDim}`}>Things I'm still building.</span><br />
        <span className={`${styles.line3} ${activeTab === 'components' ? styles.lineActive : styles.lineDim}`}>Pieces I've crafted.</span>
      </h2>

      {/* Tab switcher — Professional / Personal / Components */}
      <div className={`${styles.tabs} reveal`}>
        {visibleTabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects tabs — hidden when components tab is active */}
      {activeTab !== 'components' && (
        <>
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
          {cards.length > 0 && (
            <div className={styles.plist}>
              {cards.map((project, i) => (
                <CompactCard key={project.id} project={project} delay={i} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Components tab */}
      {activeTab === 'components' && (
        <div className={styles.plist}>
          {componentItems.map((component, i) => (
            <ComponentCard key={component.id} component={component} delay={i} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
