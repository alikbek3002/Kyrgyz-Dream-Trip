import Reveal from './Reveal'

const PHONE_RAW = '996990569369'
const TG_USER = 'Airrrro'

export default function CustomTour({ lang }) {
  const msg = lang === 'en'
    ? "Hi! I'd like a custom tour in Kyrgyzstan. Here is what we have in mind: "
    : 'Здравствуйте! Хочу индивидуальный тур по Кыргызстану. Вот, что у нас в планах: '
  const waHref = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(msg)}`
  const tgHref = `https://t.me/${TG_USER}`

  return (
    <section className="custom-tour" id="custom-tour">
      <div className="wrap">
        <Reveal direction="up">
          <div className="section-head">
            <span className="num">§ 02</span>
            <h2>
              {lang === 'en'
                ? <>A <span className="italic">custom</span> route</>
                : <><span className="italic">Индивидуальный</span> маршрут</>}
            </h2>
            <span className="mono right">
              {lang === 'en' ? 'For you or your group' : 'Под вас или вашу компанию'}
            </span>
            <div className="line" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={120}>
          <div className="custom-tour-grid">
            <p className="custom-tour-lede">
              {lang === 'en'
                ? <>None of the three routes fits exactly? We can plan a tour around your dates, group size, pace and interests — from a long weekend in the mountains to a two-week loop across the country. Tell us what you want to see and how you want to travel, and we will put a programme together.</>
                : <>Ни один из трёх маршрутов не подходит точно? Соберём тур под ваши даты, состав группы, темп и интересы — от длинного выходного в горах до двухнедельной петли по стране. Напишите, что хотите увидеть и как путешествовать, — пришлём программу.</>}
            </p>
            <div className="custom-tour-actions">
              <a className="custom-cta custom-cta-primary" href={waHref} target="_blank" rel="noreferrer">
                <span>{lang === 'en' ? 'Write us on WhatsApp' : 'Написать в WhatsApp'}</span>
                <span className="arr">→</span>
              </a>
              <a className="custom-cta custom-cta-secondary" href={tgHref} target="_blank" rel="noreferrer">
                <span>Telegram · @{TG_USER}</span>
                <span className="arr">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
