import React, { useState } from 'react'
import './wallpaperPicker.scss'

const defaultWallpapers = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
]

const WallpaperPicker = ({ onClose, setWallpaper }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const setSelected = () => {
    if (selectedIndex >= 0) {
      setWallpaper(defaultWallpapers[selectedIndex])
      onClose()
    }
  }

  return (
    <div className="wp-modal-overlay" onClick={onClose}>
      <div className="wp-modal" onClick={(e) => e.stopPropagation()}>
        <div className="wp-header">
          <h3>Choose Wallpaper</h3>
          <button className="close" onClick={onClose}>✕</button>
        </div>
        
        <div className="wp-grid">
          {defaultWallpapers.map((w, i) => (
            <div 
              key={i} 
              className={`wp-thumb ${selectedIndex === i ? 'selected' : ''}`} 
              onClick={() => setSelectedIndex(i)}
              onDoubleClick={setSelected} // Double click to select instantly
            >
              <img src={w} alt={`wp-${i}`} />
            </div>
          ))}
        </div>

        <div className="wp-actions">
          <button 
            className="set-selected" 
            onClick={setSelected} 
            disabled={selectedIndex < 0}
          >
            Set Selected Wallpaper
          </button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default WallpaperPicker