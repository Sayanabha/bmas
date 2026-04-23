// src/components/About.jsx
import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import styles from '../styles/About.module.css'

// Trait cards — the chaotic genius breakdown
const CARDS = [
  {
    emoji: '🌪️',
    title: 'Chaotic by Design',
    desc: 'Has 14 half-finished projects, 3 grand theories, and exactly 0 regrets.',
    full: true,
    chips: [
      { label: 'Multipotentialite', color: 'orange' },
      { label: 'Professional Overthinker', color: 'teal'   },
      { label: 'Tab Hoarder', color: 'gold'   },
    ],
  },
  {
    emoji: '💻',
    title: 'Builds Stuff',
    desc: 'Code, ideas, side projects — if it can be built, it will be started (finishing is optional).',
    chips: [
      { label: 'React', color: 'teal'   },
      { label: 'Vite',  color: 'orange' },
    ],
  },
  {
    emoji: '🍵',
    title: 'Adda Connoisseur',
    desc: 'Best ideas happen over a shorbot and 3 hours of pointless but profound conversation.',
    chips: [
      { label: 'Shorbot > Coffee', color: 'gold' },
    ],
  },
  {
    emoji: '🎭',
    title: 'Bengali at Heart',
    desc: 'Feels everything deeply, argues passionately, and quotes Tagore accidentally.',
    chips: [
      { label: 'রবীন্দ্রনাথ fan', color: 'orange' },
      { label: 'Watching সোনার কেল্লা', color: 'teal' },
    ],
  },
  {
    emoji: '🚀',
    title: 'Ships Anyway',
    desc: '"Done is better than perfect" — said while adding one more feature at 2am.',
    chips: [
      { label: '2am coder', color: 'gold'   },
      { label: 'Ship it!', color: 'orange' },
    ],
  },
]

// Chip color → CSS module class mapping
function getChipClass(color, styles) {
  if (color === 'orange') return styles.chipOrange
  if (color === 'teal')   return styles.chipTeal
  return styles.chipGold
}

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className="container">
        <div className={styles.inner}>

          {/* ── Left: text content ── */}
          <div className={styles.textSide}>

            <div className="reveal">
              <span className="section-label">🧑‍💻 The Human Behind the Shorbot</span>
              <h2 className="section-title">Who is Sayanabha, and why should you care?</h2>
            </div>

            <p className={'reveal delay-1 ' + styles.intro}>
              Great question. Honestly, <strong>nobody asked</strong> — but here we are.
              I'm Sayanabha, a <em>chaotic multipotentialite</em> from Bengal who wears
              too many hats (and loses most of them). I build things on the internet,
              have strong opinions about shorbot vs coffee, and occasionally ship projects
              that more than three people use.
            </p>

            <p className={'reveal delay-2 ' + styles.intro}>
              I made this site because <strong>Buy Me a Coffeecino</strong> was not for me, and frankly — <em>I don't drink coffee</em>{' '}. I drink shorbot. And fishfry. 🥤
            </p>

            {/* Quote block */}
            <div className={'reveal delay-3 ' + styles.quote}>
              <p className={styles.quoteText}>
                "ভালোবাসি পর্বত, সাথে একটু শরবত"
              </p>
              <p className={styles.quoteAuthor}>
                — Sayanabha, probably, during on a random weekend at 11pm
              </p>
            </div>

          </div>

          {/* ── Right: trait cards ── */}
          <div className={styles.cardsSide}>
            {CARDS.map(function(card, index) {
              const cardClass = [
                styles.card,
                card.full ? styles.cardFull : '',
                'reveal',
                'delay-' + Math.min(index + 1, 5),
              ].join(' ')

              return (
                <div key={card.title} className={cardClass}>
                  <span className={styles.cardEmoji}>{card.emoji}</span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <div className={styles.chips}>
                    {card.chips.map(function(chip) {
                      return (
                        <span
                          key={chip.label}
                          className={
                            styles.chip + ' ' + getChipClass(chip.color, styles)
                          }
                        >
                          {chip.label}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}