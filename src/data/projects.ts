/**
 * projects.ts — All project data for the portfolio.
 * Adding a new project is just adding an entry here — no component changes needed.
 * The `skills` array links each project to skill pills for cross-filtering.
 */

import type { Project } from './types'

/* Master list of all projects, ordered by display priority */
export const projects: Project[] = [
  /* ── Professional projects ── */
  {
    id: 'penn-foster',
    slug: 'penn-foster',
    title: 'Penn Foster Web Platform',
    status: 'live',
    type: 'professional',
    layout: 'featured',
    description:
      "Front-end development for Penn Foster's student-facing platform. Built reusable UI components, maintained the design system, improved Core Web Vitals, and contributed SEO enhancements across a Sitecore CMS environment.",
    skills: ['javascript', 'scss', 'nunjucks', 'gulp', 'sitecore', 'csharp'],
    siteUrl: 'https://pennfoster.edu',
    mockupUrl: 'pennfoster.edu',
  },
  {
    id: 'blennd',
    slug: 'blennd',
    title: 'Blennd — Client Sites',
    status: 'live',
    type: 'professional',
    layout: 'card',
    description:
      'Custom responsive builds for agency clients in Denver. Led development on larger engagements, handled code reviews, and managed deployments.',
    skills: ['wordpress', 'react', 'scss', 'nodejs'],
  },
  {
    id: 'majority-strategies',
    slug: 'majority-strategies',
    title: 'Majority Strategies — Campaign Sites',
    status: 'live',
    type: 'professional',
    layout: 'card',
    description:
      'CMS-driven sites and landing pages for political clients. Managed concurrent projects in an Agile/Scrum environment with tight deadlines.',
    skills: ['wordpress', 'javascript', 'css'],
  },

  /* ── Personal projects ── */
  {
    id: 'fullstack-app',
    slug: 'fullstack-app',
    title: 'Full-Stack App — In Progress',
    status: 'wip',
    type: 'personal',
    layout: 'featured',
    description:
      'A personal project built to close the gap between front-end specialist and full-stack engineer. React front-end, Node/Express API, MongoDB. Going end-to-end.',
    skills: ['react', 'typescript', 'nodejs', 'mongodb', 'express'],
    mockupUrl: 'localhost:5173',
  },
  {
    id: 'project-b',
    slug: 'project-b',
    title: 'Project B — In Progress',
    status: 'wip',
    type: 'personal',
    layout: 'card',
    description:
      'Another personal build pushing toward full-stack competency. Focused on clean architecture and real-world patterns.',
    skills: ['firebase', 'javascript', 'rest-api'],
  },
]

/* Helper: filter projects by type (used by project tabs) */
export const getProjectsByType = (type: Project['type']): Project[] =>
  projects.filter((p) => p.type === type)

/* Helper: filter projects that use a specific skill (used by skill pill linking) */
export const getProjectsBySkill = (skillId: Project['skills'][number]): Project[] =>
  projects.filter((p) => p.skills.includes(skillId))

/* Helper: find a single project by its URL slug (used by project detail page) */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)
