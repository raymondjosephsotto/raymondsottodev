/**
 * ProjectDetail.tsx — Single project detail page.
 * Reads the :slug param from the URL and renders a two-column layout:
 *   left  → ProjectDetailContent (article: description, skills, links)
 *   right → ProjectGallery (Swiper thumbs carousel)
 * On mobile the columns collapse into a single stack.
 * Route: /projects/:slug
 */

import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import Footer from '../components/Footer/Footer'
import ProjectDetailContent from '../features/project-detail/ProjectDetailContent'
import ProjectGallery from '../features/project-detail/ProjectGallery'
import styles from '../features/project-detail/ProjectDetailLayout.module.css'

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  /* 404 fallback */
  if (!project) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Project not found</h1>
          <p className={styles.notFoundBody}>
            <Link to="/" className={styles.notFoundLink}>← Back to home</Link>
          </p>
        </div>
        <Footer />
      </div>
    )
  }

  const hasScreenshots = !!project.screenshots?.length

  return (
    <div className={styles.page}>

      <div className={styles.wrapper}>
        <div className={`${styles.grid} ${!hasScreenshots ? styles.gridSingle : ''}`}>
          {/* Left column — article content */}
          <ProjectDetailContent project={project} solo={!hasScreenshots} />

          {/* Right column — screenshot carousel (only when screenshots exist) */}
          {hasScreenshots && (
            <ProjectGallery screenshots={project.screenshots!} title={project.title} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetail
