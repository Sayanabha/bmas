// src/components/Hero.jsx
import { useRef } from 'react'
import { Droplets, ArrowDown, Sparkles, Zap } from 'lucide-react'
import styles from '../styles/Hero.module.css'

// Fun facts shown in the stats row
const STATS = [
  { number: '∞',   label: 'Adda sessions' },
  { number: '₹0',  label: 'VC funding'    },
  { number: '1',   label: 'Shorbot needed' },
]

export default function Hero() {
  const sectionRef = useRef(null)

  function handleScrollDown(e) {
    e.preventDefault()
    const target = document.querySelector('#about')
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  function handleDonateClick(e) {
    e.preventDefault()
    const target = document.querySelector('#donate')
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  function handleAboutClick(e) {
    e.preventDefault()
    const target = document.querySelector('#about')
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero} ref={sectionRef}>

      {/* ── Decorative background blobs ── */}
      <div className={styles.blob + ' ' + styles.blob1} />
      <div className={styles.blob + ' ' + styles.blob2} />
      <div className={styles.blob + ' ' + styles.blob3} />

      {/* ── Main content ── */}
      <div className={styles.content}>

        {/* Avatar */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
  <img src="dp.png" alt="Profile" className={styles.avatarImg} />
</div>
          <div className={styles.avatarRing} />
        </div>

        {/* Badge */}
        <div className={styles.badge}>
          <Sparkles size={14} strokeWidth={2.5} />
          Not Buy Me a Coffeecino (or anything). Better. Amar.
        </div>

        {/* Main heading */}
        <h1 className={styles.heading}>
          Ekta{' '}
          <span className={styles.highlight}>Shorbot</span>
          {' '}dao,{' '}
          <br />
          please? 🥤
        </h1>

        {/* Subheading */}
        <p className={styles.sub}>
          Hi, I'm <em>Sayanabha</em>, বাঙালি
          from কলকাতা who builds things, breaks things, and occasionally
          has good ideas (am i a political party?.. nah they don't build & lack good ideas). Buy Me a Coffeecino took me too long to setup (plus I'm not a fan of coffee),
          so built this. Shorbot. <em>Ektai chai.</em>
        </p>

        {/* Stats row */}
        <div className={styles.stats}>
          {STATS.map(function(stat, index) {
            return (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
                {index > 0 && <div className={styles.statDivider} />}
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA buttons */}
        <div className={styles.ctaGroup}>
          <a
            href="#donate"
            className={styles.ctaPrimary}
            onClick={handleDonateClick}
          >
            <Droplets size={20} strokeWidth={2.5} />
            Buy Me a Shorbot
          </a>
          <a
            href="#about"
            className={styles.ctaSecondary}
            onClick={handleAboutClick}
          >
            <Zap size={18} strokeWidth={2} />
            Who even is this guy?
          </a>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <button
        className={styles.scrollIndicator}
        onClick={handleScrollDown}
        aria-label="Scroll down"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <div className={styles.scrollDot} />
        <span>scroll</span>
        <ArrowDown size={14} strokeWidth={2} />
      </button>

    </section>
  )
}