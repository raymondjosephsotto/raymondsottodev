/**
 * NotFound.tsx — 404 page for unmatched routes.
 * Simple centered message with a link back to home.
 */

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: 'var(--px)',
      textAlign: 'center',
    }}>
      {/* 404 heading */}
      <h1 style={{
        fontSize: 'clamp(48px, 10vw, 96px)',
        fontWeight: 800,
        letterSpacing: '-0.04em',
        color: 'var(--heading)',
        lineHeight: 1,
      }}>
        404
      </h1>

      {/* Message */}
      <p style={{ color: 'var(--t2)', fontSize: '15px', marginTop: '12px', marginBottom: '24px' }}>
        Page not found.
      </p>

      {/* Back to home link */}
      <Link to="/" className="btn-ghost">
        ← Back to Home
      </Link>
    </div>
  )
}

export default NotFound
