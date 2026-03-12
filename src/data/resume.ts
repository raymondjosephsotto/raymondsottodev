/**
 * resume.ts — Resume data: experience, education, skills, and references.
 * Adding or editing entries here is all that's needed — no component changes required.
 */

import type { ResumeData } from './types'

export const resumeData: ResumeData = {
  experience: [
    {
      date: '2023.01 - Present',
      company: 'Penn Foster Group — Front-End Developer',
      description: [
        'Architect and implement reusable front-end components and templates that power a Sitecore-driven educational platform.',
        'Translate product and design requirements into modular UI components, determining whether to extend existing components or introduce new ones to support evolving features.',
        'Contribute to a shared component library and template system used across multiple Sitecore pages to accelerate feature delivery and maintain UI consistency.',
        'Implement front-end components using a templating and build pipeline (Nunjucks, SCSS/SASS, Vanilla JavaScript) compiled into production-ready assets via Gulp.',
        'Provide structured HTML, CSS, and JavaScript implementations that serve as the reference layer for back-end engineers integrating features into Sitecore using C# and MVC architecture.',
        'Collaborate with cross‑functional teams through Agile ceremonies including Sprint Planning, Backlog Refinement, Story Pointing, and Daily Standups to estimate and deliver front-end work.',
        'Maintain development quality through Git workflows including feature branching, pull requests, and peer code reviews.',
        'Optimize platform performance through semantic markup, asset optimization, accessibility standards, and Core Web Vitals best practices to improve page load speed and user experience.'
      ],
    },
    {
      date: '2021.10 - 2022.11',
      company: 'Blennd — Web Developer',
      description: [
        'Build and deliver responsive web applications and CMS-driven websites by translating complex design systems into production-ready user interfaces.',
        'Collaborate with project managers, designers, and SEO specialists to review project scope and implement technical solutions.',
        'Participate in daily standups and coordinate development tasks within the project team.',
        'Implement features across both front-end and back-end layers using JavaScript, PHP, and modern build tooling.',
        'Deploy and maintain client websites and domains using managed hosting platforms including Kinsta and Flywheel.'
      ],
    },
    {
      date: '2020.09 - 2021.10',
      company: 'Majority Strategies — Web Developer',
      description: [
        'Build and maintain client websites, landing pages, and campaign platforms using modern HTML, CSS, and JavaScript for high-traffic campaign and organizational sites.',
        'Work from Jira-based tickets created by project managers to implement website builds, updates, and bug fixes.',
        'Implement new features and updates across multiple production sites while ensuring responsive design and cross-browser compatibility.',
        'Troubleshoot and debug front-end and back-end issues to resolve production bugs and improve site reliability.',
        'Deploy and maintain client websites using hosting platforms including WP Engine, Hostinger, and Flywheel.'
      ],
    },
  ],

  education: [
    {
      date: '2017-2019',
      institution: 'Florida State College at Jacksonville',
      degree: 'Computer Information Technology [A.S.] <br /> Web Development Specialist [T.C.]',
    },
  ],

  skills: {
    'Programming Languages': ['JavaScript (ES6+)', 'TypeScript', 'C#', 'PHP'],
    'Frontend Engineering': ['React.js', 'HTML5', 'CSS3', 'SCSS / SASS'],
    'Backend & APIs': ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    'State & Data Management': ['TanStack Query', 'Redux'],
    'Build Tools & Tooling': ['Vite', 'Webpack', 'NPM', 'Gulp', 'Nunjucks'],
    'Testing': ['Vitest', 'Jest'],
    'Version Control': ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    'UI & Animation Libraries': ['Tailwind CSS', 'Material UI', 'Bootstrap', 'styled-components', 'GSAP'],
    'CMS Platforms': ['WordPress', 'Sitecore'],
    'Hosting & Infrastructure': ['WP Engine', 'Kinsta', 'Flywheel', 'Hostinger'],
    'Design & Collaboration': ['Figma', 'Adobe XD', 'InVision', 'Jira'],
  },
}
