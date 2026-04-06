// src/components/SocialLinks.jsx
import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import styles from '../styles/SocialLinks.module.css'

// ── UPDATE THESE with your real links ────────────────────
const SOCIALS = [
  {
    id:     'github',
    emoji:  '🐙',
    name:   'GitHub',
    handle: '@sayanabha',           // 👈 your GitHub username
    desc:   'Code, projects & half-finished repos',
    href:   'https://github.com/sayanabha', // 👈 your GitHub URL
  },
  {
    id:     'twitter',
    emoji:  '🐦',
    name:   'Twitter / X',
    handle: '@sayanabha',           // 👈 your Twitter handle
    desc:   'Thoughts, takes & occasional nonsense',
    href:   'https://twitter.com/sayanabha9', // 👈 your Twitter URL
  },
  {
    id:     'linkedin',
    emoji:  '💼',
    name:   'LinkedIn',
    handle: 'Sayanabha',
    desc:   'Professional me. Slightly less chaotic.',
    href:   'https://linkedin.com/in/sayanabha', // 👈 your LinkedIn URL
  },
  {
    id:     'email',
    emoji:  '📬',
    name:   'Email',
    handle: 'Say hello',
    desc:   'For collabs, chaos & conversations',
    href:   'mailto:sayanabhachandraitsme@gmail.com', // 👈 your email
  },
  
]

export default function SocialLinks() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="socials" className={styles.section} ref={sectionRef}>
      <div className="container">

        {/* ── Header ── */}
        <div className={styles.header + ' reveal'}>
          <span className="section-label">🔗 Stalk Me Professionally</span>
          <h2 className="section-title">Find Me on the Internet</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            I exist in multiple corners of the internet simultaneously.
            Quantum superposition, Heinsenberg would be proud.
          </p>
        </div>

        {/* ── Social cards grid ── */}
        <div className={styles.grid}>
          {SOCIALS.map(function(social, index) {
            const cardClass = [
              styles.card,
              styles[social.id],
              'reveal',
              'delay-' + Math.min(index + 1, 5),
            ].join(' ')

            return (
              <a
                key={social.id}
                href={social.href}
                className={cardClass}
                target={social.id === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
              >
                <div className={styles.iconCircle}>
                  {social.emoji}
                </div>
                <span className={styles.cardName}>{social.name}</span>
                <span className={styles.cardHandle}>{social.handle}</span>
                <span className={styles.cardDesc}>{social.desc}</span>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}