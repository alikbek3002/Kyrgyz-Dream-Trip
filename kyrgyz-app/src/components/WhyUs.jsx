import Reveal from './Reveal'
import { PILLARS } from '../data'

export default function WhyUs({ lang }) {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="why-grid">
          <Reveal direction="left">
            <div>
              <span className="mono" style={{ color: 'var(--muted)' }}>§ 02 — OUR APPROACH</span>
              <h2 style={{ marginTop: 12 }}>
                {lang === 'en'
                  ? <>Four promises we <span className="italic">refuse</span> to break.</>
                  : <>Четыре обещания, которые <span className="italic">мы не нарушаем</span>.</>}
              </h2>
            </div>
          </Reveal>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} direction="up" delay={i * 100}>
                <div className="pillar">
                  <span className="n">§ {p.n}</span>
                  <h4>{lang === 'en' ? p.en_h : p.ru_h}</h4>
                  <span className="cyr-sub">{lang === 'en' ? p.ru_h : p.en_h}</span>
                  <p>{lang === 'en' ? p.en_p : p.ru_p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
