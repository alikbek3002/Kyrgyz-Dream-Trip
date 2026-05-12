import { useState, useEffect } from 'react'
import Masthead from './components/Masthead'
import Hero from './components/Hero'
import Tours from './components/Tours'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('ru')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [duration, setDuration] = useState('any')
  const [season, setSeason] = useState('any')

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', 'alpine')
    document.documentElement.setAttribute('data-layout', 'stacked')
  }, [])

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
      <Footer lang={lang} />
    </>
  )
}
