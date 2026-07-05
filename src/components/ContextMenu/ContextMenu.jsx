import React, { useState } from 'react'
import './contextMenu.scss'

const sampleWallpapers = [
  '/public/mac-os.jpg',

]

const ContextMenu = ({ x, y, onClose, setWallpaper, openWallpaperPicker }) => {
  const [showPicker, setShowPicker] = useState(false)
  const [url, setUrl] = useState('')

  const applyUrl = () => {
    if (url) {
      setWallpaper(url)
      onClose()
    }
  }

  const onFile = (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setWallpaper(ev.target.result)
      onClose()
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="context-menu" style={{ left: x, top: y }} onMouseLeave={onClose}>
      {!showPicker ? (
        <div className="menu-list">
          <div className="menu-item" onClick={() => { onClose(); openWallpaperPicker && openWallpaperPicker() }}>Change Wallpaper</div>
          <div className="menu-item" onClick={() => { navigator.clipboard && navigator.clipboard.writeText('mailto:rinashewale6@mail.com'); onClose() }}>Copy Support Email</div>
          <div className="menu-item" onClick={onClose}>Close</div>
        </div>
      ) : (
        <div className="picker">
          <div className="picker-row">
            <label className="picker-label">Paste image URL</label>
            <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
            <button onClick={applyUrl}>Apply</button>
          </div>
          <div className="picker-row">
            <label className="picker-label">Upload image</label>
            <input type="file" accept="image/*" onChange={onFile} />
          </div>
          <div className="picker-row thumbs">
            {sampleWallpapers.map((s, i) => (
              <img key={i} src={s} alt={`wall-${i}`} onClick={() => { setWallpaper(s); onClose() }} />
            ))}
          </div>
          <div className="picker-row">
            <button onClick={() => setShowPicker(false)}>Back</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContextMenu
