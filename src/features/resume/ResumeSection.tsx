import styles from "./ResumeSection.module.css";
import { resumeData } from "../../data/resume";

const ResumeSection = () => {
    const { experience, education, skills } = resumeData;

    return (
        <div className={styles.resume}>
            <div className={styles.resumePage}>

                {/* ── Column 1: Identity + CTAs ── */}
                <div className={styles.column1}>
                    <div className={styles.sectionWrapper}>
                        <h2 className={styles.resumeName}>Raymond Sotto</h2>
                        <p className={styles.resumeRole}>Software Engineer</p>
                        <img src={`${import.meta.env.BASE_URL}images/ray-circle.png`} alt="Resume Headshot" className={styles.resumeImage} />

                        {/* CTA links */}
                        <div className={styles.resumeCta}>
                            <a
                                href="https://linkedin.com/in/raymondsotto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaLink}
                                aria-label="LinkedIn"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/raymondjosephsotto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaLink}
                                aria-label="GitHub"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="mailto:raymondjosephsotto@gmail.com"
                                className={styles.ctaLink}
                                aria-label="Email"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Column 2: Experience + Education ── */}
                <div className={styles.column2}>
                    <div className={styles.sectionWrapper}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionTitle}>experience</div>
                            <div className={styles.sectionNumber}>01</div>
                        </div>
                        <div className={styles.separator} />
                        <div className={styles.experienceList}>
                            {experience.map((exp, index) => (
                                <div className={styles.experienceItem} key={index}>
                                    <div className={styles.experienceDate}>{exp.date}</div>
                                    <div className={styles.experienceCompany}>{exp.company}</div>
                                    <div className={styles.experienceDescription}>
                                        <ul>
                                            {exp.description.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.sectionWrapper}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionTitle}>education</div>
                            <div className={styles.sectionNumber}>02</div>
                        </div>
                        <div className={styles.separator} />
                        <div className={styles.educationList}>
                            {education.map((edu, index) => (
                                <div className={styles.educationItem} key={index}>
                                    <div className={styles.educationInstitution}>{edu.institution}</div>
                                    <div
                                        className={styles.educationDegree}
                                        dangerouslySetInnerHTML={{ __html: edu.degree }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Column 3: Skills ── */}
                <div className={styles.column3}>
                    <div className={styles.sectionWrapper}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionTitle}>skills</div>
                            <div className={styles.sectionNumber}>03</div>
                        </div>
                        <div className={styles.separator} />
                        <div className={styles.skillsList}>
                            {/* Left sub-column */}
                            <div className={styles.skillsColumn}>
                                {Object.entries(skills)
                                    .slice(0, Math.ceil(Object.keys(skills).length / 2))
                                    .map(([category, skillList]) => (
                                        <div className={styles.skillsItem} key={category}>
                                            <div className={styles.skillsCategory}>{category}</div>
                                            <ul className={styles.skillsDetails}>
                                                {skillList.map((skill, idx) => (
                                                    <li key={idx}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                            </div>
                            {/* Right sub-column */}
                            <div className={styles.skillsColumn}>
                                {Object.entries(skills)
                                    .slice(Math.ceil(Object.keys(skills).length / 2))
                                    .map(([category, skillList]) => (
                                        <div className={styles.skillsItem} key={category}>
                                            <div className={styles.skillsCategory}>{category}</div>
                                            <ul className={styles.skillsDetails}>
                                                {skillList.map((skill, idx) => (
                                                    <li key={idx}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResumeSection;
