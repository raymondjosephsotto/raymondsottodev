/**
 * SkillsSection.tsx — Skills section with List/Grid toggle.
 * List view shows skills as rows with dot indicators per category.
 * Grid view shows skills as clickable pills.
 * Data is sourced from the skills data layer for easy maintenance.
 */

import { useState } from 'react'
import { getSkillsByCategory, skillPillsByCategory } from '../../data/skills'
import styles from './SkillsSection.module.css'

/* View modes for the toggle */
type SkillView = 'list' | 'grid'

export default function SkillsSection() {
  /* Active view state */
  const [view, setView] = useState<SkillView>('list')

  /* Get skills grouped by category from the data layer */
  const daily = getSkillsByCategory('daily')
  const familiar = getSkillsByCategory('familiar')
  const learning = getSkillsByCategory('learning')

  return (
    <section className={`sec ${styles.skills}`} id="skills">
      <p className="sec-label reveal">Skills</p>

      <div className={styles.layout}>
        {/* Left column: heading + description */}
        <div className="reveal">
          <h2 className={styles.head}>
            What I know.<br /><span>What I'm mastering.</span>
          </h2>
          <p className={styles.sub}>
            No inflated bars. No filler. Daily drivers are what I ship every sprint.
            Everything else is real, practiced experience with honest room to grow.
          </p>
        </div>

        {/* Right column: toggle + skill views */}
        <div className="reveal d1">
          {/* List / Grid toggle */}
          <div className={styles.toggle}>
            {(['list', 'grid'] as SkillView[]).map((v) => (
              <button
                key={v}
                className={`${styles.toggleBtn} ${view === v ? styles.toggleBtnActive : ''}`}
                onClick={() => setView(v)}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>

          {/* ── List view ── */}
          <div className={`${styles.view} ${view === 'list' ? styles.viewShow : ''}`}>
            {/* Daily drivers — solid sand dot */}
            <div className={styles.group}>
              <div className={styles.ghead}>Daily drivers</div>
              <div className={styles.rows}>
                {daily.map((skill) => (
                  <div key={skill.id} className={styles.row}>
                    <div className={styles.skd} />
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Familiar — dimmed dot */}
            <div className={styles.group}>
              <div className={styles.ghead}>Familiar with</div>
              <div className={styles.rows}>
                {familiar.map((skill) => (
                  <div key={skill.id} className={styles.row}>
                    <div className={`${styles.skd} ${styles.skdDim}`} />
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Currently learning — ring dot */}
            <div className={styles.group}>
              <div className={styles.ghead}>Currently learning</div>
              <div className={styles.rows}>
                {learning.map((skill) => (
                  <div key={skill.id} className={styles.row}>
                    <div className={`${styles.skd} ${styles.skdRing}`} />
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Grid / pill view ── */}
          <div className={`${styles.view} ${view === 'grid' ? styles.viewShow : ''}`}>
            {/* Daily drivers — highlighted pills */}
            <div className={styles.group}>
              <div className={styles.ghead}>Daily drivers</div>
              <div className={styles.pills}>
                {skillPillsByCategory.daily.map((label) => (
                  <span key={label} className={`${styles.pill} ${styles.pillCore}`}>{label}</span>
                ))}
              </div>
            </div>

            {/* Familiar — standard pills */}
            <div className={`${styles.group} ${styles.pillGroup}`}>
              <div className={styles.ghead}>Familiar with</div>
              <div className={styles.pills}>
                {skillPillsByCategory.familiar.map((label) => (
                  <span key={label} className={styles.pill}>{label}</span>
                ))}
              </div>
            </div>

            {/* Learning — dashed-border pills */}
            <div className={`${styles.group} ${styles.pillGroup}`}>
              <div className={styles.ghead}>Currently learning</div>
              <div className={styles.pills}>
                {skillPillsByCategory.learning.map((label) => (
                  <span key={label} className={`${styles.pill} ${styles.pillLearn}`}>{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
