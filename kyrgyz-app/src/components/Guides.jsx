import Placeholder from './Placeholder'
import Reveal from './Reveal'
import { GUIDES } from '../data'

export default function Guides({ lang }) {
  return (
    <section className="guides" id="guides">
      <div className="wrap">
        <Reveal direction="up">
          <div className="section-head">
            <span className="num">§ 03</span>
            <h2>{lang === 'en' ? <>The <span className="italic">people</span> you travel with</> : <><span className="italic">Люди</span>, с которыми вы едете</>}</h2>
            <span className="mono right">{lang === 'en' ? 'Four hosts on the All Colors loop' : 'Четыре человека в команде тура'}</span>
            <div className="line" />
          </div>
        </Reveal>
        <div className="guides-grid">
          {GUIDES.map((g, i) => (
            <Reveal key={i} direction="up" delay={i * 90}>
              <div className="guide">
                <div className="portrait"><Placeholder src={g.photo_url} alt={g.en} label={g.photo} /></div>
                <h4>{lang === 'en' ? g.en : g.ru}</h4>
                <div className="cyr-name">{lang === 'en' ? g.ru : g.en}</div>
                <span className="role">{g.role}</span>
                <p>{lang === 'en' ? g.p_en : g.p_ru}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
