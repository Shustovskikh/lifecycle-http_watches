import React from 'react';
import ClockForm from './ClockForm';
import WorldClock from './WorldClock';
import './App.css';

function App() {
  const [clocks, setClocks] = React.useState([]);

  const addClock = (clock) => {
    setClocks([...clocks, clock]);
  };

  const removeClock = (name) => {
    setClocks(clocks.filter(clock => clock.name !== name));
  };

  return (
    <div className="App">
      <h1>World Clocks</h1>
      <ClockForm onAdd={addClock} existingCities={clocks.map(clock => clock.name)} />
      <div className="clocks-container">
        {clocks.map((clock) => (
          <WorldClock key={clock.name} clock={clock} onDelete={removeClock} />
        ))}
      </div>
    </div>
  );
}

export default App;
