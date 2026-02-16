import React, { useEffect, useState } from 'react'
import "./nav.scss"

const Nav = () => {

    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            let formatted = now.toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            });

            formatted = formatted.replace(/,/g, ""); // remove commas

 setDateTime(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <nav>
            <div className="left">
                <div className="apple-icon"><img src="./Nav-icons/apple.svg" alt="" /></div>

                <div className="Nav-items">
                    <p>Rina Shewale</p>
                </div>
                <div className="Nav-items">
                    <p>File</p>
                </div>
                <div className="Nav-items">
                    <p>Windows</p>
                </div>
                <div className="Nav-items">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <div className="apple-icon"><img src="./Nav-icons/wifi.svg" alt="" /></div>
                <div className="Nav-items">
                    <p>{dateTime}</p>
                </div>

            </div>
        </nav>
    )
}

export default Nav
