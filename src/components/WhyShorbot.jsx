// src/components/WhyShorbot.jsx
import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import styles from '../styles/WhyShorbot.module.css'

// Six reasons cards
const REASONS = [
  {
    icon: '🇮🇳',
    title: 'Born for ME',
    desc: 'UPI works on every phone, in every village, at every telebhaja (hehe) stall. No "payment failed" drama.',
  },
  {
    icon: '💸',
    title: 'Zero. Fees.',
    desc: 'Buy Me a Coffeecino takes a cut. UPI takes nothing. Your full ₹50 buys me a full shorbot. Simple math.',
  },
  {
    icon: '🥤',
    title: 'Culturally Accurate',
    desc: 'Nobody in Bengal drinks coffee at 4pm. We drink shorbot. Aamloki, tentul, aampaana whatever. <em>Eki kotha.</em>',
  },
  {
    icon: '⚡',
    title: 'Instant Transfers',
    desc: 'Your donation arrives before I finish typing "thank you". UPI is genuinely faster than thought.',
  },
  {
    icon: '🔓',
    title: 'No Account Needed',
    desc: 'No signup. No profile. No newsletter you\'ll never read. Scan, pay, done. Dhonnobad. Ebar jao.',
  },
  {
    icon: '🎪',
    title: 'More Fun, Obviously',
    desc: 'A site called "Buy Me A Shorbot" is objectively more entertaining than whatever that other site is.',
  },
]

// Comparison table data
const TABLE_ROWS = [
  { feature: '💳 Works in India without crying',  bmas: '✅', bmc: '😅' },
  { feature: '💸 Platform fees',                   bmas: '₹0', bmc: '5%+' },
  { feature: '⚡ Payment method',                  bmas: 'UPI', bmc: 'Card/PayPal' },
  { feature: '🔐 Donor needs an account',          bmas: '❌ Nope', bmc: '✅ Yes' },
  { feature: '🎭 Personality',                     bmas: '📈 Loads', bmc: '📉 Generic' },
  { feature: '🥤 Shorbot availability',             bmas: '✅ Always', bmc: '❌ Never' },
  { feature: '🇮🇳 Bangali Lyadh',                    bmas: '💯', bmc: '🦗' },
  { feature: '😂 Laugh while donating',            bmas: '✅', bmc: '😐' },
]

export default function WhyShorbot() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="why" className={styles.section} ref={sectionRef}>
      <div className="container">

        {/* ── Section header ── */}
        <div className={styles.header + ' reveal'}>
          <span className="section-label">☕ vs 🥤</span>
          <h2 className="section-title">
            Why Shorbot beats Coffee
          </h2>
          <p className={'section-subtitle'} style={{ margin: '0 auto' }}>
            Buy Me a Coffeecino is a great idea. Not for me.
            So I made it. hehe.
          </p>
        </div>

        {/* ── Reason cards ── */}
        <div className={styles.reasonsGrid}>
          {REASONS.map(function(reason, index) {
            const cardClass = [
              styles.reasonCard,
              'reveal',
              'delay-' + Math.min(index + 1, 5),
            ].join(' ')

            return (
              <div key={reason.title} className={cardClass}>
                <div className={styles.reasonIcon}>{reason.icon}</div>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p
                  className={styles.reasonDesc}
                  dangerouslySetInnerHTML={{ __html: reason.desc }}
                />
              </div>
            )
          })}
        </div>

        {/* ── Comparison table ── */}
        <div className={'reveal delay-2'}>
          <div className={styles.tableWrapper}>

            {/* Table header */}
            <div className={styles.tableHead}>
              <div className={styles.tableHeadCell}>Feature</div>
              <div className={styles.tableHeadCell + ' ' + styles.highlight}>
                🥤 BMAS
              </div>
              <div className={styles.tableHeadCell + ' ' + styles.dimmed}>
                ☕ That Other Site
              </div>
            </div>

            {/* Table rows */}
            {TABLE_ROWS.map(function(row) {
              return (
                <div key={row.feature} className={styles.tableRow}>
                  <div className={styles.tableCell + ' ' + styles.featureCell}>
                    {row.feature}
                  </div>
                  <div className={styles.tableCell + ' ' + styles.bmasCell}>
                    {row.bmas}
                  </div>
                  <div className={styles.tableCell + ' ' + styles.bmcCell}>
                    {row.bmc}
                  </div>
                </div>
              )
            })}

          </div>
        </div>

        {/* ── Verdict ── */}
        <div className={'reveal delay-3 ' + styles.verdict}>
          <p className={styles.verdictText}>
            Conclusion: <span>paramount is the goat shop</span> 🏆
          </p>
          <p className={styles.verdictSub}>
            (Translation: Shorbot has won. This was never a fair fight.)
          </p>
        </div>

      </div>
    </section>
  )
}