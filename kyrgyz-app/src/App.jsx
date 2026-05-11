import { useState, useEffect } from 'react'
import Masthead from './components/Masthead'
import Hero from './components/Hero'
import Tours from './components/Tours'
import WhyUs from './components/WhyUs'
import Guides from './components/Guides'
import Journal from './components/Journal'
import Footer from './components/Footer'
import TweaksPanel from './components/TweaksPanel'

export default function App() {
  const [lang, setLang] = useState('en')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [duration, setDuration] = useState('any')
  const [season, setSeason] = useState('any')
  const [palette, setPalette] = useState('alpine')
  const [layout, setLayout] = useState('stacked')
  const [tweaksOn, setTweaksOn] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    document.documentElement.setAttribute('data-layout', layout)
  }, [palette, layout])

  return (
    <>
      <Masthead lang={lang} setLang={setLang} />
      <Hero
        lang={lang}
        query={query} setQuery={setQuery}
        filter={filter} setFilter={setFilter}
        duration={duration} setDuration={setDuration}
        season={season} setSeason={setSeason}
      />
      <Tours lang={lang} query={query} filter={filter} duration={duration} season={season} />
      <WhyUs lang={lang} />
      <Guides lang={lang} />
      <Journal lang={lang} />
      <Footer lang={lang} />
      <TweaksPanel
        palette={palette} setPalette={setPalette}
        layout={layout} setLayout={setLayout}
        on={tweaksOn}
      />
      <button
        className="tweaks-toggle"
        style={{ right: tweaksOn ? '292px' : '16px' }}
        onClick={() => setTweaksOn(v => !v)}
      >
        {tweaksOn ? '× Close' : '⊞ Tweaks'}
      </button>
    </>
  )
}
