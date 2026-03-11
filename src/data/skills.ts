/**
 * skills.ts — All skill data for the portfolio.
 * Three tiers ordered by depth: Stack / Tools / Libraries.
 * Adding a new skill is just adding an entry here — no component changes needed.
 */

import type { Skill } from './types'

/* Master list of all skills, ordered by tier then depth */
export const skills: Skill[] = [
  /* ── Stack — core languages and technologies ── */
  { id: 'javascript', label: 'JavaScript (ES6+)',    category: 'stack' },
  { id: 'typescript', label: 'TypeScript',           category: 'stack' },
  { id: 'react',      label: 'React.js',             category: 'stack' },
  { id: 'nodejs',     label: 'Node.js',              category: 'stack' },
  { id: 'express',    label: 'Express.js',           category: 'stack' },
  { id: 'mongodb',    label: 'MongoDB',              category: 'stack' },
  { id: 'rest-api',   label: 'REST API',             category: 'stack' },
  { id: 'csharp',     label: 'C#',                   category: 'stack' },
  { id: 'html',       label: 'HTML5 & CSS3',         category: 'stack' },
  { id: 'scss',       label: 'SCSS / SASS',          category: 'stack' },
  { id: 'git',        label: 'Git / Version Control', category: 'stack' },

  /* ── Tools — build tools, platforms, and workflow ── */
  { id: 'tanstack-query', label: 'TanStack Query', category: 'tools' },
  { id: 'redux',          label: 'Redux',          category: 'tools' },
  { id: 'gsap',           label: 'GSAP',           category: 'tools' },
  { id: 'vite',           label: 'Vite',           category: 'tools' },
  { id: 'webpack',        label: 'Webpack',        category: 'tools' },
  { id: 'npm',            label: 'NPM / Gulp',     category: 'tools' },
  { id: 'nunjucks',       label: 'Nunjucks',       category: 'tools' },
  { id: 'wordpress',      label: 'WordPress',      category: 'tools' },
  { id: 'sitecore',       label: 'Sitecore',       category: 'tools' },
  { id: 'figma',          label: 'Figma',          category: 'tools' },
  { id: 'jira',           label: 'Jira',           category: 'tools' },

  /* ── Libraries — use-case specific, situational ── */
  { id: 'bootstrap',        label: 'Bootstrap',        category: 'libraries' },
  { id: 'styled-components', label: 'styled-components', category: 'libraries' },
  { id: 'materialui',       label: 'Material UI',      category: 'libraries' },
  { id: 'tailwind',         label: 'Tailwind',         category: 'libraries' },
  { id: 'vitest',           label: 'Vitest',           category: 'libraries' },
  { id: 'adobe-xd',         label: 'Adobe XD',         category: 'libraries' },
  { id: 'invision',         label: 'InVision',         category: 'libraries' },
]

/* Helper: get skills filtered by category */
export const getSkillsByCategory = (category: Skill['category']): Skill[] =>
  skills.filter((s) => s.category === category)
