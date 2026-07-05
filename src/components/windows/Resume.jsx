import React from 'react'
import MacWindow from './Macwindows'
import "./resume.scss"

const Resume = ({ windowName, setWindowState }) => {
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState} >
            <div className="resume-window">
                <embed src="/rina_resume.pdf" frameborder="0"></embed>
            </div>
        </MacWindow>
    )
}

export default Resume