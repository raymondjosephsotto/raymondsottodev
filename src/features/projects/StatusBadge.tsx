/**
 * StatusBadge.tsx — Colored dot + label indicating project status.
 * Used by both FeaturedCard and CompactCard.
 */

import type { ProjectStatus } from '../../data/types'
import styles from './ProjectsSection.module.css'

interface Props {
  status: ProjectStatus
}

const StatusBadge = ({ status }: Props) => {
  const label = status === 'live' ? 'Live in production' : 'Work in progress'
  const dotClass = status === 'live' ? styles.dotLive : styles.dotWip

  return (
    <div className={styles.status}>
      <div className={`${styles.dot} ${dotClass}`} />
      {label}
    </div>
  )
}

export default StatusBadge
