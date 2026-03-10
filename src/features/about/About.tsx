/**
 * About.tsx — About section with three value pillars.
 * Each paragraph leads with a bolded principle: intention, quality, delivery.
 */

import styles from './About.module.css'

export default function About() {
  return (
    <section className="sec" id="about">
      {/* Section label with decorative line */}
      <p className="sec-label reveal">About</p>

      {/* About body — three paragraphs, each with a bolded lead-in */}
      <div className={`${styles.body} reveal`}>
        <p>
          <strong>Code with intention.</strong> Every line has a reason. I plan
          before I type — mapping components, naming things clearly, and writing
          markup that the next engineer can read without a decoder ring.
          Intentional code doesn't just work today, it holds up under next
          sprint's requirements.
        </p>
        <p>
          <strong>Build it right.</strong> Fast and fragile isn't shipping — it's
          debt. I build to standard: semantic HTML, structured SCSS, accessible
          interactions, and clean Git history. At Penn Foster, my compiled markup
          becomes the blueprint back-end engineers wire into Sitecore MVC.
          Quality downstream depends entirely on what I write.
        </p>
        <p>
          <strong>Always deliver.</strong> Six years across agencies and ed-tech
          platforms. Agile sprints, hard deadlines, multi-project workloads — I
          show up, communicate early, and close tickets. I'm actively expanding
          into full-stack, learning TypeScript and C#, and looking for a role
          where I can grow across the whole stack without starting over.
        </p>
      </div>
    </section>
  )
}
