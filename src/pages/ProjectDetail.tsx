/**
 * ProjectDetail.tsx — Single project detail page.
 * Reads the :slug param from the URL and renders a two-column layout:
 *   left  → ProjectDetailContent (article: description, skills, links)
 *   right → ProjectGallery (Swiper thumbs carousel)
 * On mobile the columns collapse into a single stack.
 * Route: /projects/:slug
 */

import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import Footer from '../components/Footer/Footer'
import ProjectDetailContent from '../features/project-detail/ProjectDetailContent'
import ProjectGallery from '../features/project-detail/ProjectGallery'
import styles from '../features/project-detail/ProjectDetailLayout.module.css'

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  /* 404 fallback */
  if (!project) {
    return (
      <div className={styles.page}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 'var(--px)' }}>
          <h1 style={{ color: 'var(--heading)', fontSize: '32px', fontWeight: 800 }}>
            Project not found
          </h1>
          <p style={{ color: 'var(--t2)', marginTop: '12px' }}>
            <Link to="/" style={{ color: 'var(--sand)' }}>← Back to home</Link>
          </p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className={styles.page}>

      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {/* Left column — article content */}
          <ProjectDetailContent project={project} />

          {/* Right column — screenshot carousel */}
          <ProjectGallery screenshots={project.screenshots} title={project.title} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetail
