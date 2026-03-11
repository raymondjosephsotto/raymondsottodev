/**
 * About.tsx — About section with three value pillars + journey narrative.
 * Mobile: single-column stack (mantra paragraphs then journey).
 * Desktop: two-column grid (mantra left, journey right).
 */

import styles from './About.module.css'

export default function About() {
  return (
    <section className="sec" id="about">
      {/* Section label with decorative line */}
      <p className="sec-label reveal">About</p>

      <h2 className={`${styles.head} reveal`}>
        The mindset behind the code:<br /><span>Code with intention. Build it right. Always deliver.</span>
      </h2>

      <div className={styles.grid}>

        {/* Left column: three mantra paragraphs */}
        <div className={`${styles.body} reveal`}>
          <p>
            <strong>Code with intention.</strong> Every line of code has a reason.
            I plan before I type, mapping components, naming things clearly, and
            writing markup the next engineer can read without a decoder ring.
            Intentional code doesn't just work today. It holds up tomorrow.
          </p>
          <p>
            <strong>Build it right.</strong> Fast and fragile isn't shipping, it's
            debt. Building it right means thinking past the feature in front of you:
            the user on the other end, the teammate who inherits the code, and the
            version of the product that ships six months from now. The work isn't
            done when it ships. It's done when it holds.
          </p>
          <p>
            <strong>Always deliver.</strong> Deadlines aren't suggestions. Agile
            sprints, shifting requirements, multi-project workloads. I communicate
            early when things change, flag blockers before they compound, and close
            what I commit to. Delivery isn't just about shipping on time. It's
            about being someone a team can count on to do it right.
          </p>
        </div>

        {/* Right column: journey narrative */}
        <div className={`${styles.aside} reveal d1`}>
          <p>
            I started in agency work, building client sites from scratch on tight
            timelines. New client, new platform, new deadline every few weeks. That
            pace forced adaptability fast and gave me a broad foundation across
            platforms, design systems, and front-end workflows.
          </p>
          <p>
            From there I moved into a production environment with real scale and real
            users depending on the platform every day. The problems shifted from "ship
            it fast" to "make it last." I learned what it means to contribute to a
            codebase other engineers depend on, and to think past the feature you're
            building to the one after it.
          </p>
          <p>
            Every project adds a layer. Every gap is just the next thing worth
            learning. That curiosity hasn't slowed down and it's not going to.
          </p>
        </div>

      </div>
    </section>
  )
}
