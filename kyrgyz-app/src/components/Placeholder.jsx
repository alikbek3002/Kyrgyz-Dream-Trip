export default function Placeholder({ label }) {
  return (
    <>
      <div className="placeholder-stripes" />
      <div className="placeholder-label">
        <span className="dot" /> {label}
      </div>
    </>
  )
}

export function renderRich(parts) {
  return parts.map((p, i) => {
    if (typeof p === 'string') return <span key={i}>{p}</span>
    if (p.italic) return <span key={i} className="italic">{p.italic}</span>
    if (p.mark) return <span key={i} className="mark">{p.mark}</span>
    return null
  })
}
