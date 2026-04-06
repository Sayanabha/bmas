// src/components/Donation.jsx
import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { Droplets, Info, Smartphone } from 'lucide-react'
import styles from '../styles/Donation.module.css'

// ── Config — UPDATE THESE with your real details ──────────
const UPI_ID      = 'sayanabhachandraitsme@okaxis'          // 👈 Replace with your UPI ID
const UPI_NAME    = 'Sayanabha'             // 👈 Your name as in UPI
const QR_IMAGE    = '/upi-qr.jpeg'                  // 👈 Set to '/upi-qr.png' after adding QR
const SHORBOT_COST = 50                     // ₹50 = 1 shorbot

// Preset donation tiers
const PRESETS = [
  { amount: 50,  label: '1 Shorbot 🥤'     },
  { amount: 100, label: '2 Shorbots 🥤🥤'  },
  { amount: 200, label: 'Full adda round 🎉' },
]

// Fake supporter wall — replace with real names later
const SUPPORTERS = [
  { emoji: '🥤', name: 'Anonymous Bangali' },
  { emoji: '🎉', name: 'Priya from Kolkata' },
  { emoji: '💫', name: 'Arnab da'           },
  { emoji: '🥤', name: 'Someone from Pune'  },
  { emoji: '🫶', name: 'Didi (not that one)' },
  { emoji: '🥤', name: 'Your name here?'    },
]

export default function Donation() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  // Track selected preset and custom amount
  const [selectedPreset, setSelectedPreset] = useState(50)
  const [customAmount,   setCustomAmount]   = useState('')

  // The "active" amount is custom if typed, else the selected preset
  const activeAmount = customAmount
    ? parseInt(customAmount, 10) || 0
    : selectedPreset

  // How many shorbots does this buy?
  const shorbotsCount = activeAmount > 0
    ? Math.floor(activeAmount / SHORBOT_COST)
    : 0

  // Build the upi:// deep link — opens any UPI app on mobile
  const upiLink = 'upi://pay?pa=' + UPI_ID +
    '&pn=' + encodeURIComponent(UPI_NAME) +
    '&am=' + (activeAmount || '') +
    '&cu=INR' +
    '&tn=' + encodeURIComponent('Buying Sayanabha a shorbot 🥤')

  function handlePresetClick(amount) {
    setSelectedPreset(amount)
    setCustomAmount('')      // clear custom when preset selected
  }

  function handleCustomChange(e) {
    const val = e.target.value.replace(/[^0-9]/g, '')  // digits only
    setCustomAmount(val)
    setSelectedPreset(null)  // deselect preset when typing custom
  }

  return (
    <section id="donate" className={styles.section} ref={sectionRef}>
      <div className="container">

        {/* ── Section header ── */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}
             className="reveal">
          <span className="section-label">💸 Taka-Paisa</span>
          <h2 className="section-title">Buy Me A Shorbot</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            No subscriptions. No tiers. No "exclusive content".
            Just pure, unconditional shorbot funding. Ek-dom simple.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className={styles.inner}>

          {/* ── Left: form side ── */}
          <div className={'reveal delay-1 ' + styles.formSide}>

            {/* Amount selector */}
            <div className={styles.amountSection}>
              <p className={styles.amountLabel}>
                <Droplets size={16} strokeWidth={2.5} />
                Choose your shorbot count:
              </p>

              {/* Preset buttons */}
              <div className={styles.presetRow}>
                {PRESETS.map(function(preset) {
                  const isSelected = selectedPreset === preset.amount && !customAmount

                  return (
                    <button
                      key={preset.amount}
                      className={
                        styles.presetBtn +
                        (isSelected ? ' ' + styles.selected : '')
                      }
                      onClick={function() { handlePresetClick(preset.amount) }}
                    >
                      <span className={styles.presetAmount}>₹{preset.amount}</span>
                      <span className={styles.presetLabel}>{preset.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Custom amount input */}
              <div className={styles.customRow}>
                <span className={styles.currencySymbol}>₹</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Custom amount"
                  className={styles.customInput}
                  value={customAmount}
                  onChange={handleCustomChange}
                  maxLength={6}
                />
              </div>
            </div>

            {/* Shorbot counter */}
            <div className={styles.counter}>
              <span className={styles.counterEmoji} key={shorbotsCount}>🥤</span>
              <p className={styles.counterText}>
                {activeAmount > 0 && shorbotsCount > 0
                  ? 'That buys me '
                  : activeAmount > 0
                  ? 'Hmm, that\'s less than '
                  : 'Pick an amount above — '}
                <strong>
                  {activeAmount > 0 && shorbotsCount > 0
                    ? shorbotsCount + (shorbotsCount === 1 ? ' shorbot' : ' shorbots') + '!'
                    : activeAmount > 0
                    ? '1 shorbot (₹' + SHORBOT_COST + '). Try more!'
                    : 'ekta shorbot = ₹' + SHORBOT_COST}
                </strong>
                {activeAmount >= 500 ? ' 🎉 Legend!' : ''}
              </p>
            </div>

            {/* Info note */}
            <div className={styles.note}>
              <span className={styles.noteIcon}>
                <Info size={16} strokeWidth={2} />
              </span>
              <p>
                This opens your UPI app directly with the amount pre-filled.
                Works with GPay, PhonePe, Paytm, BHIM , anything you want.
                On desktop, scan the QR code on the right instead.
              </p>
            </div>

          </div>

          {/* ── Right: QR side ── */}
          <div className={'reveal delay-2 ' + styles.qrSide}>
            <div className={styles.qrCard}>

              <p className={styles.qrTitle}>
                📱 Scan to pay instantly
              </p>

              {/* QR code image or placeholder */}
              <div className={styles.qrImageWrapper}>
                {QR_IMAGE
                  ? <img src={QR_IMAGE} alt="UPI QR Code" className={styles.qrImage} />
                  : (
                    <div className={styles.qrPlaceholder}>
                      <span>📷</span>
                      <p>Your UPI QR<br />goes here</p>
                    </div>
                  )
                }
              </div>

              <p className={styles.qrUpiId}>
                UPI: {UPI_ID}
              </p>

              {/* UPI deep-link button */}
              <a
                href={upiLink}
                className={styles.upiBtn}
              >
                <Smartphone size={18} strokeWidth={2.5} />
                Pay ₹{activeAmount || '?'} via UPI App
              </a>

              <p className={styles.upiNote}>
                Opens GPay / PhonePe / Paytm automatically 🇮🇳
                <br />
                100% free · Zero platform fees · Instant
              </p>

            </div>
          </div>

        </div>

        {/* ── Supporter wall ── */}
        <div className={'reveal delay-3 ' + styles.supporterWall}>
          <p className={styles.supporterTitle}>
            🏆 Shorbot Hall of Fame
          </p>
          <div className={styles.supporters}>
            {SUPPORTERS.map(function(s) {
              return (
                <div key={s.name} className={styles.supporter}>
                  <span>{s.emoji}</span>
                  <span>{s.name}</span>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}