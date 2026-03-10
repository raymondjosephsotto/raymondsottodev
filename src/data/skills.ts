/**
 * skills.ts — All skill data for the portfolio.
 * Adding a new skill is just adding an entry here.
 * The `category` field determines visual treatment (daily/familiar/learning).
 */

import type { Skill } from './types'

/* Master list of all skills, grouped by category for display */
export const skills: Skill[] = [
  /* ── Daily drivers — tools used every sprint ── */
  { id: 'javascript', label: 'JavaScript (ES6+)', category: 'daily' },
  { id: 'scss', label: 'SASS / SCSS', category: 'daily' },
  { id: 'html', label: 'HTML5 & CSS3', category: 'daily' },
  { id: 'npm', label: 'NPM & Gulp', category: 'daily' },
  { id: 'git', label: 'Git / GitHub', category: 'daily' },
  { id: 'jira', label: 'Jira', category: 'daily' },

  /* ── Familiar — real experience, not daily use ── */
  { id: 'react', label: 'React.js / Redux', category: 'familiar' },
  { id: 'nodejs', label: 'Node.js / ExpressJS / MongoDB', category: 'familiar' },
  { id: 'rest-api', label: 'REST API / Firebase', category: 'familiar' },
  { id: 'webpack', label: 'Webpack / GSAP / jQuery / Bootstrap', category: 'familiar' },
  { id: 'styled-components', label: 'styled-components / MaterialUI', category: 'familiar' },
  { id: 'figma', label: 'Figma / Adobe XD / InVision', category: 'familiar' },
  { id: 'wordpress', label: 'WordPress / Shopify / SquareSpace', category: 'familiar' },
  { id: 'gitlab', label: 'GitLab / BitBucket / Asana / Trello', category: 'familiar' },

  /* ── Currently learning — actively studying ── */
  { id: 'typescript', label: 'TypeScript', category: 'learning' },
  { id: 'csharp', label: 'C#', category: 'learning' },
  { id: 'sitecore', label: 'Sitecore CMS', category: 'learning' },
]

/* Grid-view pills use a flatter mapping for the pill display */
export const skillPillsByCategory = {
  daily: [
    'JavaScript ES6+', 'SASS / SCSS', 'HTML5', 'CSS3',
    'NPM', 'Gulp', 'Git / GitHub', 'Jira',
  ],
  familiar: [
    'React.js', 'Redux', 'Node.js', 'ExpressJS', 'MongoDB',
    'REST API', 'Firebase', 'Webpack', 'GSAP', 'jQuery', 'Bootstrap',
    'styled-components', 'MaterialUI', 'Figma', 'Adobe XD', 'InVision',
    'WordPress', 'Shopify', 'GitLab', 'BitBucket', 'Asana', 'Trello',
  ],
  learning: ['TypeScript', 'C#', 'Sitecore'],
}

/* Helper: get skills filtered by category */
export const getSkillsByCategory = (category: Skill['category']): Skill[] =>
  skills.filter((s) => s.category === category)
