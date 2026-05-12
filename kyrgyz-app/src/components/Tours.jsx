import { useMemo } from 'react'
import Placeholder, { renderRich } from './Placeholder'
import Reveal from './Reveal'
import { TOURS } from '../data'

const PHONE_RAW = '996990569369'
const TG_USER = 'Airrrro'

function pick(t, base, lang) {
  return t[`${base}_${lang}`] ?? t[base]
}

function TourCard({ t, lang }) {
  const msg = lang === 'en'
    ? `Hi! I'd like to book the "${t.title_ru}" tour.`
    : `Здравствуйте! Хочу забронировать тур «${t.title_ru}».`
  const waHref = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(msg)}`
  const tgHref = `https://t.me/${TG_USER}`
  const region = pick(t, 'region', lang)
  const duration = pick(t, 'duration', lang)
  const season = pick(t, 'season', lang)
  const altitude = pick(t, 'altitude', lang)
  const from = pick(t, 'from', lang)
  const tagLabel = pick(t, 'tag', lang)
  const pull = pick(t, 'pull', lang)
  const attrib = pick(t, 'attrib', lang)
  const itin = pick(t, 'itin', lang)
  const title = pick(t, 'title', lang)
  const sub = pick(t, 'sub', lang)
  const deckText = pick(t, 'deck', lang)
  return (
    <article className="card">
      <div className="card-num">
        <span>{t.num}</span>
        <span>{region}</span>
      </div>
      <div className="card-photo">
        {t.photo_url ? (
          <img src={t.photo_url} alt={t.photo_alt || t.title_ru} loading="lazy" />
        ) : (
          <Placeholder label={t.photo} />
        )}
      </div>
      <h3>{Array.isArray(title) ? renderRich(title) : title}</h3>
      <p className="deck">{deckText}</p>
      <div className="specs">
        <div><span className="k">{lang === 'en' ? 'Duration' : 'Дней'}</span><span className="v">{duration}</span></div>
        <div><span className="k">{lang === 'en' ? 'Season' : 'Сезон'}</span><span className="v">{season}</span></div>
        <div><span className="k">{lang === 'en' ? 'Max altitude' : 'Выс. макс.'}</span><span className="v">{altitude}</span></div>
        <div><span className="k">{lang === 'en' ? 'From' : 'От'}</span><span className="v">{from}</span></div>
      </div>
      <div className="card-reveal">
        <span className="mono">{t.num} — {tagLabel}</span>
        <blockquote className="pull">{renderRich(pull)}</blockquote>
        <div className="attrib">{attrib}</div>
        <div className="itin">
          {itin.map(([d, txt], i) => (
            <div className="row" key={i}>
              <span className="d">{d}</span>
              <span>{txt}</span>
            </div>
          ))}
        </div>
        <div className="book-row">
          <a className="book" href={waHref} target="_blank" rel="noreferrer">
            <span>{lang === 'en' ? 'Book via WhatsApp' : 'Забронировать в WhatsApp'}</span>
            <span className="arr">→</span>
          </a>
          <a className="book book-secondary" href={tgHref} target="_blank" rel="noreferrer">
            <span>Telegram · @{TG_USER}</span>
            <span className="arr">→</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Tours({ lang, query, filter, duration, season }) {
  const filtered = useMemo(() => TOURS.filter(t => {
    const q = query.trim().toLowerCase()
    if (q) {
      const hay = (t.title_ru + ' ' + JSON.stringify(t.title_en) + ' ' + t.deck + ' ' + t.tag + ' ' + t.region).toLowerCase()
      if (!hay.includes(q)) return false
    }
    if (filter !== 'all' && t.tag !== filter) return false
    if (duration !== 'any') {
      const nights = parseInt(t.duration)
      if (duration === 'short' && nights > 5) return false
      if (duration === 'medium' && (nights < 6 || nights > 8)) return false
      if (duration === 'long' && nights < 9) return false
    }
    if (season !== 'any') {
      if (season === 'summer' && !/Jun|Jul|Aug|Sep|May/.test(t.season)) return false
      if (season === 'winter' && !/Dec|Jan|Feb/.test(t.season)) return false
      if (season === 'shoulder' && !/Apr|Oct|Mar|Nov/.test(t.season)) return false
    }
    return true
  }), [query, filter, duration, season])

  return (
    <section className="tours">
      <div className="wrap">
        <Reveal direction="up">
          <div className="section-head">
            <span className="num">§ 01</span>
            <h2>{lang === 'en' ? <>Our <span className="italic">tours</span></> : <>Наши <span className="italic">туры</span></>}</h2>
            <span className="mono right">{filtered.length} / {TOURS.length} {lang === 'en' ? 'shown' : 'показано'}</span>
            <div className="line" />
          </div>
        </Reveal>
        <div className="tours-grid">
          {filtered.length === 0 ? (
            <div className="empty-note">
              {lang === 'en'
                ? 'No journeys match that search. Try clearing a filter — we keep this catalog intentionally small.'
                : 'Ничего не найдено. Попробуйте сбросить фильтры — наш каталог намеренно небольшой.'}
            </div>
          ) : filtered.map((t, i) => (
            <Reveal key={t.id} direction="up" delay={i * 120}>
              <TourCard t={t} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
