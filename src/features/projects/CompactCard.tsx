/**
 * CompactCard.tsx — Compact project card used in the card grid below featured projects.
 */

import { Link } from 'react-router-dom'
import type { Project } from '../../data/types'
import { skills } from '../../data/skills'
import StatusBadge from './StatusBadge'
import styles from './ProjectsSection.module.css'

interface Props {
  project: Project
  delay: number
}

const CompactCard = ({ project, delay }: Props) => {
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

export default CompactCard
