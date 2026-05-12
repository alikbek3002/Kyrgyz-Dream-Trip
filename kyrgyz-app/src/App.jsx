import { useState, useEffect } from 'react'
import Masthead from './components/Masthead'
import Hero from './components/Hero'
import Tours from './components/Tours'
import CustomTour from './components/CustomTour'
import Footer from './components/Footer'
import Shield from './components/Shield'

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

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  return (
    <>
      <Shield />
      <Masthead lang={lang} setLang={setLang} />
      <Hero
        lang={lang}
        query={query} setQuery={setQuery}
        filter={filter} setFilter={setFilter}
        duration={duration} setDuration={setDuration}
        season={season} setSeason={setSeason}
      />
      <Tours lang={lang} query={query} filter={filter} duration={duration} season={season} />
      <CustomTour lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
