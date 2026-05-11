import Placeholder from './Placeholder'
import Reveal from './Reveal'
import { ARTICLES } from '../data'

export default function Journal({ lang }) {
  return (
    <section className="journal" id="journal">
      <div className="wrap">
        <Reveal direction="up">
          <div className="section-head">
            <span className="num">§ 04</span>
            <h2>{lang === 'en' ? <>From the <span className="italic">journal</span></> : <>Из <span className="italic">журнала</span></>}</h2>
            <span className="mono right">{lang === 'en' ? 'Updated weekly' : 'Обновляется еженедельно'}</span>
            <div className="line" />
          </div>
        </Reveal>
        <div className="journal-grid">
          {ARTICLES.map((a, i) => (
            <Reveal key={i} direction="up" delay={i * 110}>
              <article className="article">
                <div className="photo"><Placeholder src={a.photo_url} alt={lang === 'en' ? a.h_en : a.h_ru} label={a.photo} /></div>
                <span className="kicker">{lang === 'en' ? a.kicker_en : a.kicker_ru}</span>
                <h3>{lang === 'en' ? a.h_en : a.h_ru}</h3>
                <span className="byline">{lang === 'en' ? a.by_en : a.by_ru}</span>
                <p>{lang === 'en' ? a.p_en : a.p_ru}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
