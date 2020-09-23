import React from 'react';
import './App.css';
const api = {
  key: "a6a955cc0efd6e6ef67a699dad70fe38",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  return (
    <div className="app">
    <main>
      <div className="search-box">
      <input type="text" className="search-bar" placeholder="Search..."/>
      </div>
      </main>
    </div>
  );
}

export default App;
