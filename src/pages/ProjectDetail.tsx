/**
 * ProjectDetail.tsx — Single project detail page template.
 * Reads the :slug param from the URL and looks up the matching project.
 * This is the foundation for adding richer project pages later.
 * Route: /projects/:slug
 */

import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import { skills } from '../data/skills'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

export default function ProjectDetail() {
  /* Get the slug from the URL params */
  const { slug } = useParams<{ slug: string }>()

  /* Look up the project in the data layer */
  const project = slug ? getProjectBySlug(slug) : undefined

  /* 404 fallback if project not found */
  if (!project) {
    return (
      <div style={{ padding: 'var(--px)', textAlign: 'center', marginTop: '120px' }}>
        <h1 style={{ color: 'var(--heading)', fontSize: '32px', fontWeight: 800 }}>
          Project not found
        </h1>
        <p style={{ color: 'var(--t2)', marginTop: '12px' }}>
          <Link to="/" style={{ color: 'var(--sand)' }}>← Back to home</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Navigation */}
      <NavBar />

      {/* Project detail content */}
      <article style={{ padding: 'clamp(80px, 10vh, 120px) var(--px)', maxWidth: '720px' }}>
        {/* Back link */}
        <Link to="/#projects" style={{ color: 'var(--sand)', fontSize: '13px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
          ← All Projects
        </Link>

        {/* Status badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: project.status === 'live' ? '#7db87d' : '#d4a96a',
            boxShadow: project.status === 'live'
              ? '0 0 0 3px rgba(125,184,125,0.15)'
              : '0 0 0 3px rgba(212,169,106,0.15)',
          }} />
          <span style={{ fontSize: '11px', color: 'var(--t3)', letterSpacing: '0.07em', textTransform: 'uppercase' as const }}>
            {project.status === 'live' ? 'Live in production' : 'Work in progress'}
          </span>
        </div>

        {/* Project title */}
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.035em', color: 'var(--heading)', lineHeight: 1.1, marginBottom: '16px' }}>
          {project.title}
        </h1>

        {/* Description */}
        <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--t2)', lineHeight: 1.88, marginBottom: '24px' }}>
          {project.description}
        </p>

        {/* Detail content — expandable in the future */}
        {project.detailContent && (
          <div style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.85, marginBottom: '24px' }}>
            {project.detailContent}
          </div>
        )}

        {/* Skill tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '5px', marginBottom: '24px' }}>
          {project.skills.map((skillId) => {
            const skill = skills.find((s) => s.id === skillId)
            return <span key={skillId} className="tag">{skill?.label ?? skillId}</span>
          })}
        </div>

        {/* External links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {project.siteUrl && (
            <a className="btn-fill" href={project.siteUrl} target="_blank" rel="noopener noreferrer">
              Visit Site →
            </a>
          )}
          {project.repoUrl && (
            <a className="btn-ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          )}
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </>
  )
}
