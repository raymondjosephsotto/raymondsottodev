/**
 * RelatedComponents.tsx — Displays component showcase cards related to the current project.
 * Rendered below the main two-column grid on ProjectDetail when related components exist.
 */

import type { ComponentItem } from '../../data/types'
// ComponentCard lives in features/projects — intentionally shared with the Components tab
import ComponentCard from '../projects/ComponentCard'
import styles from './RelatedComponents.module.css'

interface Props {
  components: ComponentItem[]
}

const RelatedComponents = ({ components }: Props) => {
  return (
    <section className={styles.section}>
      {/* sec-label is a global class from globals.css — small uppercase accent with a trailing line */}
      <p className="sec-label">Related Components</p>

      <div className={styles.grid}>
        {components.map((component, i) => (
          <ComponentCard key={component.id} component={component} delay={i} />
        ))}
      </div>
    </section>
  )
}

export default RelatedComponents
