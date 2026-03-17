/**
 * FeaturedCard.tsx — Full-width project card with browser mockup illustration.
 * Includes private sub-components: BrowserMockup, ProjectLinks.
 */

import { Link } from 'react-router-dom'
import type { Project } from '../../data/types'
import { skills } from '../../data/skills'
import StatusBadge from './StatusBadge'
import styles from './ProjectsSection.module.css'

interface Props {
  project: Project
}

const FeaturedCard = ({ project }: Props) => {
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

          {/* Link to project detail page */}
          <Link to={`/projects/${project.slug}`} className={styles.detailLink}>
            See more details →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard

/* ── Private sub-components ── */

/* External link icons (site URL, repo URL) — only used by FeaturedCard */
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

/* Browser mockup illustration — only used by FeaturedCard */
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
