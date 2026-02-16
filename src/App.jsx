import react from 'react'
import "./app.scss"
import Dock from './components/dock'
import Nav from './components/Nav'
import Macwindows from './components/windows/Macwindows'
import Github from './components/windows/Github'

function App() {


  return (
    <main>
      <Nav   />
      <Dock />
       <Github /> 
    </main>
  )
}

export default App
