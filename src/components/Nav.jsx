import React, { useEffect, useState } from 'react';
import "./nav.scss";

const Nav = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Using Intl.DateTimeFormat for a cleaner, stable string
            const formatter = new Intl.DateTimeFormat("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });
            
            // Format and remove the comma between date and time
            setDateTime(formatter.format(now).replace(",", ""));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Menu items array makes the code DRY (Don't Repeat Yourself)
    const menuItems = ["Rina Shewale", "File", "Edit", "View", "Window", "Help"];

    return (
        <nav className="os-nav">
            <div className="nav-left">
                <div className="nav-logo">
                    <img src="./Nav-icons/apple.svg" alt="system-logo" />
                </div>
                
                <ul className="nav-menu">
                    {menuItems.map((item, index) => (
                        <li key={item} className={index === 0 ? "menu-item bold" : "menu-item"}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="nav-right">
                <div className="status-icons">
                    <img src="./Nav-icons/wifi.svg" alt="wifi" className="status-icon" />
                    <img src="./Nav-icons/battery.png" alt="battery" className="status-icon" />
                </div>
                <div className="nav-clock">
                    {dateTime}
                </div>
            </div>
        </nav>
    );
};

export default Nav;