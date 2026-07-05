import React from 'react'
import "./dock.scss"
import { resume } from 'react-dom/server'


const Dock = ({ windowState, setWindowState }) => {

    return (
        <div className='Dock'>
            <div className="icon github"> <img src="/doc-icons/github.svg" alt="" onClick={() => setWindowState(state => ({ ...state, github: true }))} /></div>
            <div className="icon note"> <img src="/doc-icons/note.svg" alt="" onClick={() => setWindowState(state => ({ ...state, note: true }))} /></div>
            <div className="icon mail"> <img src="/doc-icons/mail.svg" alt="" onClick={() => window.open("mailto:rinashewale6@mail.com", "_blank", "noopener,noreferrer")} /></div>
            <div className="icon pdf"> <img src="/doc-icons/pdf.svg" alt="" onClick={() => setWindowState(state => ({ ...state, resume: true }))} /></div>
            <div className="icon spotify"> <img src="/doc-icons/spotify.svg" alt="" onClick={() => setWindowState(state => ({ ...state, spotify: true }))} /></div>
            <div className="icon calender"> <img src="/doc-icons/calender.svg" alt="" onClick={() => { window.open("https://calendar.google.com/calendar/u/0/r?pli=1", "_blank") }}/></div>
            <div className="icon link"> <img src="/doc-icons/link.svg" alt="" onClick={() => { window.open("https://www.linkedin.com/in/rina-shewale-652a64327", "_blank") }} /></div>
            <div className="icon cli"> <img src="/doc-icons/cli.svg" alt="" onClick={() => setWindowState(state => ({ ...state, cli: true }))} /></div>




        </div>
    )
}

export default Dock
