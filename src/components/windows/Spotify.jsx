import React from 'react'
import Macwindows from './Macwindows'
import "./spotify.scss"

const Spotify = ({windowName, setWindowState}) => {
    return (
        <Macwindows windowName={windowName} setWindowState={setWindowState} width='25vw' >
            <div className="spotify">
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/3Q4aOiLNCpyHxGySuhOjLD?utm_source=generator&theme=0"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </Macwindows>
    )
}

export default Spotify
