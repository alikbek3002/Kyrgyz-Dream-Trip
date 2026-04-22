import Placeholder from './Placeholder'
import { FILTERS } from '../data'

export default function Hero({ lang, query, setQuery, filter, setFilter, duration, setDuration, season, setSeason }) {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1 className="serif-display">
              {lang === 'en' ? (
                <>
                  <span className="break">Slow journeys</span>
                  <span className="break">through the <span className="italic">Tian Shan</span>,</span>
                  <span className="break">told by people</span>
                  <span className="break">who live there.</span>
                </>
              ) : (
                <>
                  <span className="break">Неспешные</span>
                  <span className="break">путешествия</span>
                  <span className="break">по <span className="italic">Тянь-Шаню</span>,</span>
                  <span className="break">глазами местных.</span>
                </>
              )}
            </h1>
            <p className="lede">
              {lang === 'en'
                ? <>We plan fewer trips than we could. Every itinerary is built around a household, a valley, or a craft — and we cap our groups at eight travelers so the family feels like a family, not a stage.</>
                : <>Мы делаем меньше туров, чем могли бы. Каждый маршрут строится вокруг семьи, долины или ремесла — и мы ограничиваем группу восьмью путешественниками, чтобы дом оставался домом, а не сценой.</>}
              <span className="cyr">
                {lang === 'en' ? '— Малые группы. Настоящие люди. Один повар на двоих.' : '— Small groups. Real people. One cook for every two guests.'}
              </span>
            </p>
            <div className="hero-meta">
              <div><span className="mono">JOURNEYS</span><span className="v">23</span></div>
              <div><span className="mono">GUIDES</span><span className="v">14</span></div>
              <div><span className="mono">GROUPS CAP</span><span className="v">8 max</span></div>
              <div><span className="mono">RETURN RATE</span><span className="v">38%</span></div>
            </div>
          </div>
          <figure style={{ margin: 0 }}>
            <div className="hero-photo">
              <Placeholder label="PHOTO — Shepherd & horse, Suusamyr valley, wide shot, golden hour" />
            </div>
            <figcaption className="hero-caption mono">
              <span>Fig. 01 — Suusamyr, late August</span>
              <span>Photographed by A. Osmonaliev</span>
            </figcaption>
          </figure>
        </div>

        <div className="search-bar" id="journeys">
          <div>
            <label className="mono">{lang === 'en' ? 'Destination or keyword' : 'Место или ключевое слово'}</label>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={lang === 'en' ? 'e.g. Song-Kul, eagle, yurt…' : 'напр. Сон-Куль, беркут…'}
            />
          </div>
          <div>
            <label className="mono">{lang === 'en' ? 'Duration' : 'Длительность'}</label>
            <select value={duration} onChange={e => setDuration(e.target.value)}>
              <option value="any">{lang === 'en' ? 'Any length' : 'Любая'}</option>
              <option value="short">{lang === 'en' ? '≤ 5 nights' : 'до 5 ночей'}</option>
              <option value="medium">{lang === 'en' ? '6 – 8 nights' : '6 – 8 ночей'}</option>
              <option value="long">{lang === 'en' ? '9+ nights' : '9+ ночей'}</option>
            </select>
          </div>
          <div>
            <label className="mono">{lang === 'en' ? 'Season' : 'Сезон'}</label>
            <select value={season} onChange={e => setSeason(e.target.value)}>
              <option value="any">{lang === 'en' ? 'Any season' : 'Любой'}</option>
              <option value="summer">{lang === 'en' ? 'Summer' : 'Лето'}</option>
              <option value="winter">{lang === 'en' ? 'Winter' : 'Зима'}</option>
              <option value="shoulder">{lang === 'en' ? 'Shoulder season' : 'Межсезонье'}</option>
            </select>
          </div>
          <button className="search-btn">{lang === 'en' ? 'Find a journey' : 'Найти маршрут'} →</button>
        </div>

        <div className="filter-row">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={'pill ' + (filter === f.id ? 'active' : '')}
              onClick={() => setFilter(f.id)}
            >
              {lang === 'en' ? f.label_en : f.label_ru}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
