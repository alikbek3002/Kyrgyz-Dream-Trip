import { useEffect } from 'react'

// Best-effort UX-level deterrent against casual snooping.
// Anyone can still view source via the browser menu, curl, or by disabling JS,
// so do NOT treat this as a security boundary. Real protection (DDoS, WAF,
// security headers) lives at the Vercel/CDN edge — see vercel.json.
export default function Shield() {
  useEffect(() => {
    const stop = (e) => { e.preventDefault(); return false }
    const onKey = (e) => {
      const k = e.key
      if (k === 'F12') return stop(e)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (k === 'I' || k === 'J' || k === 'C')) return stop(e)
      if ((e.ctrlKey || e.metaKey) && (k === 'U' || k === 's' || k === 'S')) return stop(e)
    }
    document.addEventListener('contextmenu', stop)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('contextmenu', stop)
      document.removeEventListener('keydown', onKey)
    }
  }, [])
  return null
}
