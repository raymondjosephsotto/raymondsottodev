/**
 * Stats.tsx — Statistics row showing key career metrics.
 * Four badges: years of experience, environments, technologies, always building.
 * Staggered reveal animations via delay classes.
 */

import styles from './Stats.module.css'

/* Stat data — easily editable without touching component structure */
const stats = [
  { number: '6', sup: 'yrs', title: 'Professional experience', desc: 'Front-end to full-stack, across agencies and ed-tech.' },
  { number: '3', sup: '+', title: 'Production environments', desc: 'Shipped at Penn Foster, Blennd, and Majority Strategies.' },
  { number: '30', sup: '+', title: 'Technologies across the stack', desc: 'From Gulp pipelines and design systems to REST APIs and Sitecore MVC.' },
  { number: '∞', sup: '', title: 'Always building', desc: 'TypeScript, C#, and side projects pushing well past the browser.' },
]

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.grid}>
        {stats.map((stat, i) => (
          /* Each stat card gets a staggered delay class for reveal */
          <div key={stat.title} className={`${styles.stat} reveal ${i > 0 ? `d${i}` : ''}`}>
            <div className={styles.number}>
              {stat.number}
              {/* Optional superscript suffix (yrs, +, etc.) */}
              {stat.sup && <sup>{stat.sup}</sup>}
            </div>
            <div className={styles.title}>{stat.title}</div>
            <div className={styles.desc}>{stat.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
