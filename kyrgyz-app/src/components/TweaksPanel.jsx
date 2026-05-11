export default function TweaksPanel({ palette, setPalette, layout, setLayout, on }) {
  if (!on) return null
  return (
    <div className="tweaks-panel">
      <h5>Tweaks</h5>
      <div className="group">
        <div className="label">Palette</div>
        <div className="swatch-row">
          <button className={palette === 'alpine' ? 'active' : ''} onClick={() => setPalette('alpine')} title="Alpine"><span className="sw-alpine" /></button>
          <button className={palette === 'felt' ? 'active' : ''} onClick={() => setPalette('felt')} title="Felt"><span className="sw-felt" /></button>
          <button className={palette === 'midnight' ? 'active' : ''} onClick={() => setPalette('midnight')} title="Midnight"><span className="sw-midnight" /></button>
        </div>
      </div>
      <div className="group">
        <div className="label">Card layout</div>
        <div className="tweak-options">
          <button className={layout === 'stacked' ? 'active' : ''} onClick={() => setLayout('stacked')}>Stacked</button>
          <button className={layout === 'magazine' ? 'active' : ''} onClick={() => setLayout('magazine')}>Magazine</button>
          <button className={layout === 'postcard' ? 'active' : ''} onClick={() => setLayout('postcard')}>Postcard</button>
        </div>
      </div>
    </div>
  )
}
