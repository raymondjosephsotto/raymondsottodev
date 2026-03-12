/**
 * types.ts — Central type definitions for the portfolio data layer.
 * All projects and skills reference these types, enabling type-safe
 * filtering and linking between skill pills and project cards.
 */

/* Union of all recognized skill identifiers used across the site */
export type SkillId =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'redux'
  | 'scss'
  | 'html'
  | 'nodejs'
  | 'express'
  | 'mongodb'
  | 'npm'
  | 'webpack'
  | 'git'
  | 'jira'
  | 'sitecore'
  | 'csharp'
  | 'nunjucks'
  | 'wordpress'
  | 'firebase'
  | 'rest-api'
  | 'gsap'
  | 'bootstrap'
  | 'styled-components'
  | 'materialui'
  | 'figma'
  | 'adobe-xd'
  | 'invision'
  | 'tanstack-query'
  | 'vite'
  | 'vitest'
  | 'tailwind'

/* Skill tier — drives visual treatment of skill pills */
export type SkillCategory = 'stack' | 'tools' | 'libraries'

/* A single skill entry with display label and category */
export interface Skill {
  id: SkillId
  label: string
  category: SkillCategory
}

/* Project status indicator — controls the dot color in project cards */
export type ProjectStatus = 'live' | 'wip'

/* Which tab the project belongs to */
export type ProjectType = 'professional' | 'personal'

/* Whether the project should render as a featured card or a compact card */
export type ProjectLayout = 'featured' | 'card'

/* Full project definition — slug is used for /projects/:slug routing */
export interface Project {
  id: string
  slug: string
  title: string
  status: ProjectStatus
  type: ProjectType
  layout: ProjectLayout
  description: string
  skills: SkillId[]
  siteUrl?: string
  repoUrl?: string
  mockupUrl?: string
  imageUrl?: string     /* optional screenshot shown in the featured card browser mockup */
  detailContent?: string
}

/* ── Resume types ── */

export interface ResumeExperience {
  date: string
  company: string
  description: string[]
}

export interface ResumeEducation {
  date: string
  institution: string
  degree: string
}

export interface ResumeData {
  experience: ResumeExperience[]
  education: ResumeEducation[]
  skills: Record<string, string[]>
}

/* ── Link types ── */

export interface SiteLink {
  label: string
  href: string
}
