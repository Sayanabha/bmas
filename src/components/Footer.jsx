// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='footer-root'>
      <div className="container">
        <div className='footer-inner'>

          <div className='footer-left'>
            <span className='footer-logo'>
              BM<span>A</span>S 🥤
            </span>
            <span className='footer-tagline'>
              Question - Do you want me to open this for all of you?
              <br />
              Note: the color theme might be orange, but you're not donating to any political party. 
            </span>
          </div>

          <div className='footer-right'>
            <p>
              Made with 🥤 & zero VC funding by{' '}
              <a href="#hero">Sayanabha</a>
            </p>
            <p>
              © {year} · No copyright, share freely ·{' '}
              <a
                href="https://upi.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by me
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}