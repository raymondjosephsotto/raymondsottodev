/**
 * ProjectDetailContent.tsx — Left-column article for the project detail page.
 * Renders the back link, status badge, title, description, skill tags, and CTAs.
 */

import { Link } from 'react-router-dom'
import { skills as allSkills } from '../../data/skills'
import type { Project } from '../../data/types'
import styles from './ProjectDetailContent.module.css'

interface Props {
  project: Project
  solo?: boolean
}

const ProjectDetailContent = ({ project, solo }: Props) => {
  return (
    <article className={`${styles.content}${solo ? ` ${styles.contentSolo}` : ''}`}>
      {/* Back link */}
      <Link to="/#projects" className="btn-back">
        ← Home
      </Link>

      {/* Status badge */}
      <div className={styles.statusBadge}>
        <div
          className={`${styles.statusDot} ${
            project.status === 'live' ? styles.live : styles.wip
          }`}
        />
        <span className={styles.statusText}>
          {project.status === 'live' ? 'Live in production' : 'Work in progress'}
        </span>
      </div>

      {/* Title */}
      <h1 className={styles.title}>{project.title}</h1>

      {/* Short description */}
      <p className={styles.description}>{project.description}</p>

      {/* Long-form detail content */}
      {project.detailContent && (
        <div className={styles.detailContent}>{project.detailContent}</div>
      )}

      {/* Skill tags */}
      <div className={styles.tags}>
        {project.skills.map((skillId) => {
          const skill = allSkills.find((s) => s.id === skillId)
          return (
            <span key={skillId} className="tag">
              {skill?.label ?? skillId}
            </span>
          )
        })}
      </div>

      {/* External links */}
      <div className={styles.links}>
        {project.siteUrl && (
          <a
            className="btn-fill"
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site →
          </a>
        )}
        {project.repoUrl && (
          <a
            className="btn-ghost"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectDetailContent
