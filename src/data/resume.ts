/**
 * resume.ts — Resume data: experience, education, skills, and references.
 * Adding or editing entries here is all that's needed — no component changes required.
 */

import type { ResumeData } from './types'

export const resumeData: ResumeData = {
  experience: [
    {
      date: '2023.01 - Present',
      company: 'Penn Foster Group',
      description:
        'Developed scalable front-end code, created and modified components, and maintained websites and user interfaces. Collaborated with designers and marketing to enhance the design system. Worked with analysts and project managers on project reviews and task estimations. Ensured multi-platform accessibility and optimized page loading times.',
    },
    {
      date: '2021.10 - 2022.11',
      company: 'Blennd',
      description:
        'Translate custom designs into functional web experiences within WordPress and other CMS platforms, leading large-scale projects and facilitating team growth. Manage version control and deployments, staying updated on development trends for efficient collaboration. Multitask effectively, implementing best practices for SEO and performance across projects.',
    },
    {
      date: '2020.09 - 2021.10',
      company: 'Majority Strategies',
      description:
        'Managed client website development and maintenance, overseeing applications, sites, and redesigns. Implemented Agile/Scrum for streamlined workflows, swiftly troubleshooting and debugging. Demonstrated efficient multitasking, ensuring quality across projects.',
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
    'Languages & Core Technologies': ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'C#', 'SASS', 'CSS3', 'HTML5'],
    'Front-End':                      ['React.js', 'Material UI (MUI)', 'GSAP', 'Bootstrap', 'jQuery'],
    'Back-End & Tooling':             ['Node.js', 'NPM', 'Webpack', 'Gulp'],
    'Version Control':                ['Git', 'GitHub', 'Gitlab', 'BitBucket'],
    'Design & Prototyping':           ['Figma', 'Adobe XD', 'InVision'],
    'CMS':                            ['WordPress', 'Sitecore', 'Shopify', 'SquareSpace'],
    'Hosting':                        ['Kinsta', 'WPEngine', 'Flywheel', 'Hostinger'],
    'Project Management':             ['Jira', 'Asana', 'Trello'],
  },
}
