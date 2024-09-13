import React, { useEffect, useState } from 'react';
import './WorldClock.css';
import moment from 'moment-timezone';

function WorldClock({ clock, onDelete }) {
  const [time, setTime] = useState(moment().tz(clock.timezone).format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz(clock.timezone).format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [clock.timezone]);

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="hour" style={{ transform: `rotate(${(parseInt(time.slice(0, 2), 10) % 12) * 30}deg)` }}></div>
        <div className="minute" style={{ transform: `rotate(${parseInt(time.slice(3, 5), 10) * 6}deg)` }}></div>
        <div className="second" style={{ transform: `rotate(${parseInt(time.slice(6), 10) * 6}deg)` }}></div>
      </div>
      <div className="clock-label">{clock.name}</div>
      <button className="delete-button" onClick={() => onDelete(clock.name)}>X</button>
    </div>
  );
}

export default WorldClock;
