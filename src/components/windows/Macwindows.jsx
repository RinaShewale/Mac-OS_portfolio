import React from 'react'
import { Rnd } from 'react-rnd'
import "./windows.scss"

const Macwindows = ({children ,width = "40vw", height = "40vh"}) => {
    return (
        <div>
           <Rnd
            default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}
        >
              <div className="window">
                 <div className="nav">
                <div className="Mac-dots">
                    <div className="dot red"></div>
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
