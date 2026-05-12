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
            <p className="lede hero-lede-anim">
              {lang === 'en'
                ? <>One carefully built six-day tour along Issyk-Kul — Burana Tower, Skazka canyon, Jeti-Ögüz red rocks, an eagle-hunter demo, a horseback ride to Maiden\'s Tears falls, a lake cruise and a felt-weaving masterclass. Small groups, real hosts, transparent price.</>
                : <>Один тщательно собранный шестидневный тур по Иссык-Кулю — Башня Бурана, каньон Сказка, красные скалы Джеты-Огуз, демонстрация беркут-охоты, конная прогулка к водопаду Девичьи слёзы, круиз по озеру и мастер-класс по войлоку. Небольшая группа, настоящие хозяева, прозрачная цена.</>}
            </p>
            <div className="hero-meta hero-meta-anim">
              <div>
                <span className="mono">{lang === 'en' ? 'TOURS' : 'ТУРЫ'}</span>
                <span className="v">1</span>
              </div>
              <div>
                <span className="mono">{lang === 'en' ? 'GROUP CAP' : 'ГРУППА'}</span>
                <span className="v">{lang === 'en' ? '14 max' : 'до 14'}</span>
              </div>
              <div>
                <span className="mono">{lang === 'en' ? 'DURATION' : 'ДЛИТЕЛЬНОСТЬ'}</span>
                <span className="v">{lang === 'en' ? '6 days' : '6 дней'}</span>
              </div>
              <div>
                <span className="mono">{lang === 'en' ? 'RATING' : 'РЕЙТИНГ'}</span>
                <span className="v">4.9 / 5</span>
              </div>
            </div>
          </div>
          <figure style={{ margin: 0 }} className="hero-photo-wrap">
            <div className="hero-photo hero-photo-anim">
              <Placeholder
                src="/tour-all-colors.jpg"
                alt="Kyrgyz mountain meadow with buttercups and a Taigan dog"
              />
            </div>
            <figcaption className="hero-caption mono">
              <span>{lang === 'en' ? 'Issyk-Kul region · summer' : 'Иссык-Куль · лето'}</span>
              <span>{lang === 'en' ? 'All Colors of Kyrgyzstan' : 'Все краски Кыргызстана'}</span>
            </figcaption>
          </figure>
        </div>

        <div className="search-bar" id="journeys">
          <div>
            <label className="mono">{lang === 'en' ? 'Destination or keyword' : 'Место или ключевое слово'}</label>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={lang === 'en' ? 'e.g. Issyk-Kul, eagle, yurt…' : 'напр. Иссык-Куль, беркут, юрта…'}
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
