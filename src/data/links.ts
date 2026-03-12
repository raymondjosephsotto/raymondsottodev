/**
 * links.ts — Personal external and internal links for the portfolio.
 * Update URLs here and changes will reflect across all pages and components.
 */

import type { SiteLink } from './types'

export const links: Record<string, SiteLink> = {
  email: {
    label: 'raymondjosephsotto@gmail.com',
    href:  'mailto:raymondjosephsotto@gmail.com',
  },
  github: {
    label: 'GitHub',
    href:  'https://github.com/raymondjosephsotto',
  },
  linkedin: {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/raymondjsotto/',
  },
  resume: {
    label: 'Résumé',
    href:  '/resume/',
  },
}
