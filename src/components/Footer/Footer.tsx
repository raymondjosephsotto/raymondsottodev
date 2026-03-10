/**
 * Footer.tsx — Minimal site footer with attribution and year.
 */

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Attribution */}
      <p>Designed &amp; built by <a href="/">Raymond Sotto</a></p>
      {/* Current year */}
      <p>{new Date().getFullYear()}</p>
    </footer>
  )
}
