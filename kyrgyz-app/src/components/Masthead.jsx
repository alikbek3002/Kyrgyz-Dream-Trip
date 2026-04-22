export default function Masthead({ lang, setLang }) {
  return (
    <header className="masthead">
      <div className="wrap">
        <div className="masthead-row">
          <nav className="masthead-left">
            <a className="nav-link" href="#journeys">{lang === 'en' ? 'Journeys' : 'Маршруты'}</a>
            <a className="nav-link" href="#why">{lang === 'en' ? 'Our approach' : 'Подход'}</a>
            <a className="nav-link" href="#guides">{lang === 'en' ? 'Guides' : 'Гиды'}</a>
            <a className="nav-link" href="#journal">{lang === 'en' ? 'Journal' : 'Журнал'}</a>
          </nav>
          <div className="brand">Kyrgyz <span className="amp">Dream</span> Trip</div>
          <div className="masthead-right">
            <span className="mono" style={{ color: 'var(--muted)' }}>EST. 2016 · BISHKEK</span>
            <div className="lang-toggle" role="tablist">
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
              <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>РУ</button>
            </div>
          </div>
        </div>
        <div className="issue-line">
          <span className="mono">Vol. IX · Issue 02 · Spring / Summer 2026</span>
          <span className="mono">
            {lang === 'en' ? '42.87° N / 74.60° E — Bishkek' : '42.87° с.ш. / 74.60° в.д. — Бишкек'}
          </span>
        </div>
      </div>
    </header>
  )
}
