import React, { useState, useEffect } from 'react'
import { Rnd } from 'react-rnd'
import "./windows.scss"

const Macwindows = ({ children, width = "40vw", height = "40vw", windowName, windowState, setWindowState }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Update state on resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mobile vs Desktop Rnd settings
    const rndConfig = isMobile ? {
        size: { width: '100%', height: '100%' },
        position: { x: 0, y: 0 },
        disableDragging: true,
        enableResizing: false,
    } : {
        default: {
            width: width,
            height: height,
            x: 300,
            y: 200
        }
    };

    return (
        <div className={isMobile ? "mobile-window-wrapper" : "desktop-window-wrapper"}>
            <Rnd {...rndConfig}>
                <div className="window">
                    <div className="nav">
                        <div className="Mac-dots">
                            <div onClick={() => setWindowState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="title"><p>rinashewale-zsh</p></div>
                    </div>

                    <div className="main-content">
                        {children}
                    </div>
                </div>
            </Rnd>
        </div>
    )
}

export default Macwindows