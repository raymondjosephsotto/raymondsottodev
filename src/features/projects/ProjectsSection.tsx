/**
 * ProjectsSection.tsx — Full projects section with tab switching.
 * Renders Professional and Personal tabs, each containing featured
 * and compact project cards sourced from the data layer.
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getProjectsByType } from '../../data/projects'
import { getAllComponents } from '../../data/components'
import type { Project, ProjectStatus, ComponentItem } from '../../data/types'

import { skills } from '../../data/skills'
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

/* ── Featured project card with browser mockup ── */
const FeaturedCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.feat}>
      <div className={styles.featInner}>
        {/* Browser mockup — shows screenshot if available, else renders skeleton */}
        <BrowserMockup url={project.mockupUrl ?? 'localhost'} isWip={project.status === 'wip'} imageUrl={project.imageUrl} />

        {/* Project info body */}
        <div className={styles.pbody}>
          <div className={styles.statusRow}>
            <StatusBadge status={project.status} />
            <ProjectLinks project={project} />
          </div>

          {/* Project title */}
          <h3 className={styles.pname}>{project.title}</h3>

          {/* Project description */}
          <p className={styles.pdesc}>{project.description}</p>

          {/* Skill tags — linked to the skills data layer */}
          <div className={styles.ptags}>
            {project.skills.map((skillId) => {
              const skill = skills.find((s) => s.id === skillId)
              return <span key={skillId} className="tag">{skill?.label ?? skillId}</span>
            })}
          </div>

          {/* Link to project detail page (for future expansion) */}
          <Link to={`/projects/${project.slug}`} className={styles.detailLink}>
            See more details →
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ── Compact project card ── */
const CompactCard = ({ project, delay }: { project: Project; delay: number }) => {
  return (
    <div className={styles.pcard} style={{ animationDelay: `${delay * 0.08}s` }}>
      <div className={styles.pcardTop}>
        {/* Card icon — generic layout icon */}
        <div className={styles.pcardIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </div>
        <StatusBadge status={project.status} />
      </div>

      {/* Card title */}
      <div className={styles.pcardName}>{project.title}</div>

      {/* Card description */}
      <div className={styles.pcardDesc}>{project.description}</div>

      {/* Skill tags */}
      <div className={styles.ptags}>
        {project.skills.map((skillId) => {
          const skill = skills.find((s) => s.id === skillId)
          return <span key={skillId} className="tag">{skill?.label ?? skillId}</span>
        })}
      </div>

      {/* Link to detail page */}
      <Link to={`/projects/${project.slug}`} className={styles.detailLink}>
        See more details →
      </Link>
    </div>
  )
}

/* ── Status badge with colored dot ── */
const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const label = status === 'live' ? 'Live in production' : 'Work in progress'
  const dotClass = status === 'live' ? styles.dotLive : styles.dotWip

  return (
    <div className={styles.status}>
      <div className={`${styles.dot} ${dotClass}`} />
      {label}
    </div>
  )
}

/* ── External link icons (site URL, repo URL) ── */
const ProjectLinks = ({ project }: { project: Project }) => {
  return (
    <div className={styles.plinks}>
      {/* Live site link */}
      {project.siteUrl && (
        <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit site">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      )}
      {/* GitHub repo link */}
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
          </svg>
        </a>
      )}
    </div>
  )
}

/* ── Browser mockup illustration ── */
const BrowserMockup = ({ url, isWip, imageUrl }: { url: string; isWip: boolean; imageUrl?: string }) => {
  return (
    <div className={styles.mockup}>
      <div className={styles.browser}>
        {/* Browser title bar with traffic lights and URL */}
        <div className={styles.bbar}>
          <div className={styles.bdots}>
            <span /><span /><span />
          </div>
          <div className={styles.burl}>{url}</div>
        </div>

        {/* Screenshot if available; otherwise render skeleton placeholder */}
        {imageUrl ? (
          <img
            src={`${import.meta.env.BASE_URL ?? '/'}${imageUrl}`}
            alt={url}
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        ) : (
          <div className={styles.bbody}>
            <div className={styles.ur} style={{ width: '40%' }} />
            <div className={styles.ur} style={{ width: '65%' }} />
            <div className={styles.ur} style={{ width: isWip ? '38%' : '85%' }} />
            {!isWip && <div className={styles.ur} style={{ width: '50%' }} />}
            <div className={styles.ucards} style={isWip ? { gridTemplateColumns: '1fr 1fr', marginTop: '12px' } : undefined}>
              <div className={styles.ucard} style={isWip ? { height: '48px' } : undefined} />
              <div className={styles.ucard} style={isWip ? { height: '48px' } : undefined} />
              {!isWip && <div className={styles.ucard} />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Component showcase card ── */
const ComponentCard = ({ component, delay }: { component: ComponentItem; delay: number }) => {
  return (
    <div className={styles.pcard} style={{ animationDelay: `${delay * 0.08}s` }}>
      {/* Thumbnail preview — only rendered if imageUrl is provided */}
      {component.imageUrl && (
        <div className={styles.pcardImg}>
          <img
            src={`${import.meta.env.BASE_URL ?? '/'}${component.imageUrl}`}
            alt={component.title}
          />
        </div>
      )}

      <div className={styles.pcardTop}>
        {/* Component icon */}
        <div className={styles.pcardIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>

        {/* External link — only rendered if url is provided */}
        {component.url && (
          <a href={component.url} target="_blank" rel="noopener noreferrer" className={styles.ccardLink} aria-label="View component">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>

      {/* Component name */}
      <div className={styles.pcardName}>{component.title}</div>

      {/* Component description */}
      <div className={styles.pcardDesc}>{component.description}</div>

      {/* Skill tags */}
      <div className={styles.ptags}>
        {component.skills.map((skillId) => {
          const skill = skills.find((s) => s.id === skillId)
          return <span key={skillId} className="tag">{skill?.label ?? skillId}</span>
        })}
      </div>
    </div>
  )
}

