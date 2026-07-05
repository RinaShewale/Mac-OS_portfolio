import React, { useState, useEffect } from 'react';
import './App.scss';
import HeroClock from './components/Theme/HeroClock';
import Dock from './components/Dock';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Resume from './components/windows/Resume';
import Spotify from './components/windows/Spotify';
import Cli from './components/windows/Cli';
import Nav from './components/Nav';
import ContextMenu from './components/ContextMenu/ContextMenu';
import WallpaperPicker from './components/ContextMenu/WallpaperPicker';
// Import other windows as needed

function App() {
  const [wallpaper, setWallpaper] = useState('')
  const [context, setContext] = useState({ visible: false, x: 0, y: 0 })
  const [wallpaperPickerVisible, setWallpaperPickerVisible] = useState(false)
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setContext({ visible: false, x: 0, y: 0 })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const onContext = (e) => {
    e.preventDefault()
    setContext({ visible: true, x: e.clientX, y: e.clientY })
  }

  const closeContext = () => setContext({ visible: false, x: 0, y: 0 })

  const openWallpaperPicker = () => setWallpaperPickerVisible(true)
  const closeWallpaperPicker = () => setWallpaperPickerVisible(false)

  return (
    <div className="desktop-wrapper" onContextMenu={onContext} onClick={closeContext} style={{ ['--user-wallpaper']: wallpaper ? `url(${wallpaper})` : undefined }}>

      <Nav />
      {/* 1. The Large Center Clock & Media Bar */}
      <HeroClock />

      {/* 2. The Main Windows Layer (GitHub, etc) */}
      <div className="window-layer">
        {windowState.github && <Github windowName="github" setWindowState={setWindowState} />}
        {windowState.note && <Note windowName="note" setWindowState={setWindowState} />}
        {windowState.resume && <Resume windowName="resume" setWindowState={setWindowState} />}
        {windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} />}
        {windowState.cli && <Cli windowName="cli" setWindowState={setWindowState} />}
      </div>

      {context.visible && (
        <ContextMenu x={context.x} y={context.y} onClose={() => setContext({ visible: false, x: 0, y: 0 })} setWallpaper={setWallpaper} openWallpaperPicker={openWallpaperPicker} />
      )}

      {wallpaperPickerVisible && (
        <WallpaperPicker onClose={closeWallpaperPicker} setWallpaper={(url) => { setWallpaper(url); closeWallpaperPicker() }} />
      )}

      {/* 3. The Centered Floating Dock */}
      <div className="dock-container">
        <Dock windowState={windowState} setWindowState={setWindowState} />
      </div>

     
    </div>
  );
}

export default App;