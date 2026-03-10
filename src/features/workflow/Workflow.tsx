/**
 * Workflow.tsx — "How I work" section showing the sprint-to-deploy process.
 * Five steps displayed as a vertical timeline (mobile) or horizontal (desktop).
 * Each step has a numbered node, description, and tool tags.
 */

import styles from './Workflow.module.css'

/* Workflow steps data — editable array, no component changes needed */
const steps = [
  {
    num: '01',
    title: 'Sprint Planning',
    desc: 'Break down designs into components, assess new vs. existing, and estimate effort before writing a line of code.',
    tags: ['Jira', 'Agile', 'Scrum'],
  },
  {
    num: '02',
    title: 'Component Markup',
    desc: 'Build HTML structure using Nunjucks templating in a custom boilerplate. Semantic and accessible from the start.',
    tags: ['Nunjucks', 'HTML5'],
  },
  {
    num: '03',
    title: 'Style & Script',
    desc: 'Write structured SCSS and Vanilla JS, compiled to production-ready assets via Gulp.',
    tags: ['SCSS', 'JavaScript', 'Gulp'],
  },
  {
    num: '04',
    title: 'PR & Review',
    desc: 'Push to a task branch, open a Pull Request, and merge after peer review. Clean history, traceable changes.',
    tags: ['Git', 'GitHub'],
  },
  {
    num: '05',
    title: 'Back-End Handoff',
    desc: 'BED converts compiled markup to C# Razor views wired into Sitecore MVC templates and placeholders.',
    tags: ['C#', 'Sitecore', 'MVC'],
  },
]

export default function Workflow() {
  return (
    <section className="sec" id="workflow">
      <p className="sec-label reveal">How I work</p>

      {/* Section heading */}
      <h2 className={`${styles.head} reveal`}>
        Sprint to deploy.<br /><span>Every two weeks.</span>
      </h2>

      {/* Timeline steps */}
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={step.num} className={`${styles.step} reveal ${i > 0 ? `d${i}` : ''}`}>
            {/* Left: numbered node + connecting line */}
            <div className={styles.left}>
              <div className={styles.node}>{step.num}</div>
              <div className={styles.line} />
            </div>

            {/* Right: step content */}
            <div className={styles.right}>
              <div className={styles.title}>{step.title}</div>
              <p className={styles.desc}>{step.desc}</p>
              <div className={styles.tags}>
                {step.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
