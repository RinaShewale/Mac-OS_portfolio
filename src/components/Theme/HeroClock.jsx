import React, { useState, useEffect } from 'react';
import './HeroClock.scss';

const HeroClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const day = dateTime.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
  const dateStr = `${dateTime.getDate()} ${dateTime.toLocaleString('en-US', { month: 'short' }).toUpperCase()}, ${dateTime.getFullYear()}.`;
  const timeStr = `- ${dateTime.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} -`;

  return (
    <div className="hero-section">
      <h1 className="main-day">{day}</h1>
      <p className="sub-date">{dateStr}</p>
      <p className="sub-time">{timeStr}</p>
    </div>
  );
};

export default HeroClock;