import Reveal from './Reveal'

const PHONE_RAW = '996990569369'
const PHONE_DISPLAY = '+996 990 569 369'
const TG_USER = 'Airrrro'

export default function Footer({ lang }) {
  return (
    <footer id="contact">
      <div className="wrap">
        <Reveal direction="up">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="logo">Nomad <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Travel</span></div>
              <p>{lang === 'en'
                ? 'A small tour outfit from Bishkek. One careful six-day route around Issyk-Kul, run by people who live here.'
                : 'Небольшое турагентство из Бишкека. Один тщательно собранный шестидневный маршрут по Иссык-Кулю, который ведут местные.'}</p>
              <span className="mono" style={{ color: 'var(--muted)' }}>
                {lang === 'en' ? 'Bishkek · Karakol · Issyk-Kul' : 'Бишкек · Каракол · Иссык-Куль'}
              </span>
            </div>
            <div>
              <h5>{lang === 'en' ? 'Tour' : 'Тур'}</h5>
              <a href="#journeys">{lang === 'en' ? 'All Colors of Kyrgyzstan' : 'Все краски Кыргызстана'}</a>
              <a href="#journeys">{lang === 'en' ? 'Programme · 6 days' : 'Программа · 6 дней'}</a>
              <a href="#journeys">{lang === 'en' ? 'From 80 000 ₽ per person' : 'От 80 000 ₽ за человека'}</a>
            </div>
            <div>
              <h5>{lang === 'en' ? 'Contact' : 'Связаться'}</h5>
              <a href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noreferrer">
                {lang === 'en' ? `WhatsApp / Phone · ${PHONE_DISPLAY}` : `WhatsApp / Телефон · ${PHONE_DISPLAY}`}
              </a>
              <a href={`https://t.me/${TG_USER}`} target="_blank" rel="noreferrer">Telegram · @{TG_USER}</a>
            </div>
            <div>
              <h5>{lang === 'en' ? 'When to go' : 'Когда ехать'}</h5>
              <a href="#journeys">{lang === 'en' ? 'June — October' : 'Июнь — октябрь'}</a>
              <a href="#journeys">{lang === 'en' ? 'Best: Jun, Jul, Sep' : 'Лучше: июнь, июль, сентябрь'}</a>
              <a href="#journeys">{lang === 'en' ? '15% prepayment' : 'Предоплата 15%'}</a>
            </div>
          </div>
        </Reveal>
        <div className="foot-bottom mono">
          <span>© 2026 Nomad Travel · {lang === 'en' ? 'Bishkek, Kyrgyzstan' : 'Бишкек, Кыргызстан'}</span>
          <span>{lang === 'en' ? 'Made in Bishkek' : 'Сделано в Бишкеке'}</span>
        </div>
      </div>
    </footer>
  )
}
