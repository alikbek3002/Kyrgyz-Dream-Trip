import Reveal from './Reveal'

export default function Footer({ lang }) {
  return (
    <footer>
      <div className="wrap">
        <Reveal direction="up">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="logo">Kyrgyz <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Dream</span> Trip</div>
              <p>{lang === 'en'
                ? 'A small tour outfit from Bishkek. We build journeys we would take ourselves, with people we would invite home.'
                : 'Небольшое турагентство из Бишкека. Мы делаем маршруты, в которые сами бы поехали, с людьми, которых пригласили бы домой.'}</p>
              <span className="mono" style={{ color: 'var(--muted)' }}>Бишкек · Каракол · Ош</span>
            </div>
            <div>
              <h5>{lang === 'en' ? 'Journeys' : 'Маршруты'}</h5>
              <a href="#">Song-Kul</a>
              <a href="#">Ala-Archa & Karakol</a>
              <a href="#">Eagle winter</a>
              <a href="#">Custom itinerary</a>
            </div>
            <div>
              <h5>{lang === 'en' ? 'Company' : 'О нас'}</h5>
              <a href="#">{lang === 'en' ? 'Our approach' : 'Подход'}</a>
              <a href="#">{lang === 'en' ? 'Guides' : 'Гиды'}</a>
              <a href="#">{lang === 'en' ? 'Journal' : 'Журнал'}</a>
              <a href="#">{lang === 'en' ? 'Press' : 'Пресса'}</a>
            </div>
            <div>
              <h5>{lang === 'en' ? 'Contact' : 'Контакты'}</h5>
              <a href="#">hello@kyrgyzdream.trip</a>
              <a href="#">+996 312 88 44 20</a>
              <a href="#">{lang === 'en' ? 'Ibraimova 24, Bishkek' : 'ул. Ибраимова 24, Бишкек'}</a>
              <a href="#">Instagram · Telegram</a>
            </div>
          </div>
        </Reveal>
        <div className="foot-bottom mono">
          <span>© 2026 KDT LLC · Kyrgyz Tourism Assn. member</span>
          <span>{lang === 'en' ? 'Crafted in Bishkek · Сделано с любовью' : 'Сделано в Бишкеке · Crafted with love'}</span>
        </div>
      </div>
    </footer>
  )
}
