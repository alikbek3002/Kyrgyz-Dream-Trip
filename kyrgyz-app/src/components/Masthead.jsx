export default function Masthead({ lang, setLang }) {
  return (
    <header className="masthead">
      <div className="wrap">
        <div className="masthead-row">
          <nav className="masthead-left">
            <a className="nav-link" href="#journeys">{lang === 'en' ? 'Tours' : 'Туры'}</a>
            <a className="nav-link" href="#contact">{lang === 'en' ? 'Contact' : 'Контакты'}</a>
          </nav>
          <div className="brand">Nomad <span className="amp">Travel</span></div>
          <div className="masthead-right">
            <span className="mono est-label" style={{ color: 'var(--muted)' }}>
              {lang === 'en' ? 'BISHKEK · KYRGYZSTAN' : 'БИШКЕК · КЫРГЫЗСТАН'}
            </span>
            <div className="lang-toggle" role="tablist">
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
              <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>РУ</button>
            </div>
          </div>
          {/* mobile nav row */}
          <nav className="mob-nav">
            <a className="nav-link" href="#journeys">{lang === 'en' ? 'Tours' : 'Туры'}</a>
            <a className="nav-link" href="#contact">{lang === 'en' ? 'Contact' : 'Контакты'}</a>
          </nav>
        </div>
        <div className="issue-line">
          <span className="mono">
            {lang === 'en' ? 'Spring / Summer 2026' : 'Весна / Лето 2026'}
          </span>
          <span className="mono">
            {lang === 'en' ? '42.87° N / 74.60° E — Bishkek' : '42.87° с.ш. / 74.60° в.д. — Бишкек'}
          </span>
        </div>
      </div>
    </header>
  )
}
