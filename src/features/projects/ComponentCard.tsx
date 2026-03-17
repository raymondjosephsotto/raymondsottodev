/**
 * ComponentCard.tsx — Reusable card for a single component showcase entry.
 * Used in: ProjectsSection (Components tab) and ProjectDetail (Related Components section).
 */

import type { ComponentItem } from '../../data/types'
import { skills } from '../../data/skills'
import styles from './ProjectsSection.module.css'

interface Props {
  component: ComponentItem
  delay: number
}

const ComponentCard = ({ component, delay }: Props) => {
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

export default ComponentCard
