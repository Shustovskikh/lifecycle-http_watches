import React, { useState } from 'react';
import './ClockForm.css';

const cityTimezoneMap = {
  'New York': 'America/New_York',
  'London': 'Europe/London',
  'Tokyo': 'Asia/Tokyo',
  'Moscow': 'Europe/Moscow',
  'Sydney': 'Australia/Sydney'
};

function ClockForm({ onAdd, existingCities }) {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCity && !existingCities.includes(selectedCity)) {
      const timezone = cityTimezoneMap[selectedCity];
      onAdd({ name: selectedCity, timezone });
      setSelectedCity('');
    }
  };

  return (
    <form className="clock-form" onSubmit={handleSubmit}>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        required
      >
        <option value="">Choose a city</option>
        {Object.keys(cityTimezoneMap)
          .filter(city => !existingCities.includes(city))
          .map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default ClockForm;
