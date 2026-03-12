/**
 * Workflow.tsx — "How I work" section showing the development process.
 * Five steps displayed as a vertical timeline (mobile) or horizontal (desktop).
 * Each step has a numbered node, description, and tool tags.
 */

import styles from './Workflow.module.css'

/* Workflow steps data — editable array, no component changes needed */
const steps = [
  {
    num: '01',
    title: 'Plan & Scope',
    desc: 'Break down requirements into components, assess scope and effort, identify reuse opportunities, and write clear stories before writing a line of code.',
    tags: ['Sprint Planning', 'Backlog Refinement', 'Daily Standup', 'Jira', 'Figma', 'Adobe XD'],
  },
  {
    num: '02',
    title: 'Build & Structure',
    desc: 'Write semantic, accessible markup using a component-based approach. Readable, maintainable, and ready for any rendering layer from day one.',
    tags: ['HTML5', 'React', 'Nunjucks', 'Accessibility', 'Component-driven'],
  },
  {
    num: '03',
    title: 'Style & Script',
    desc: 'Layer in modular SCSS and JavaScript, structured, compiled, and performance-conscious. Responsive and cross-browser compatible out of the box.',
    tags: ['SCSS', 'JavaScript', 'TypeScript', 'NPM', 'Webpack', 'Vite'],
  },
  {
    num: '04',
    title: 'Review & Test',
    desc: 'Open a PR, get peer feedback, and test across browsers and devices. Clean commit history, traceable changes, and no surprises at merge.',
    tags: ['Git', 'GitHub', 'Vitest', 'Jest', 'Code Review', 'Cross-browser'],
  },
  {
    num: '05',
    title: 'Ship & Integrate',
    desc: 'Validate on staging, integrate with back-end APIs or CMS rendering layers, and deploy to production. The work isn\'t done at merge. It\'s done when it\'s live, stable, and integrated.',
    tags: ['CI/CD', 'REST API', 'Node.js', 'WordPress', 'Sitecore', 'Kinsta', 'WPEngine', 'Hostinger'],
  },
]

const Workflow = () => {
  return (
    <section className="sec" id="workflow">
      <p className="sec-label reveal">How I work</p>

      {/* Section heading */}
      <h2 className={`${styles.head} reveal`}>
        The work before the work.<br /><span>Know the why. Build the what.</span>
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

export default Workflow
