import React, { useState } from 'react';
const api = {
  key: "a6a955cc0efd6e6ef67a699dad70fe38",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {

  const [query, setQuery] = useState('');

  const DateBuilder = (d) => {
    let months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
    let days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
    <main>
      <div className="search-box">
      <input type="text" className="search-bar" placeholder="Search..."/>
      </div>
     <div className="location-box">
       <div className="location">Warszawa, PL</div>
  <div className="date">{DateBuilder(new Date())}</div>
     </div>
     <div className="weather-box">
       <div className="temp">
         15 °C
       </div>
       <div className="weather">
         Sunny
       </div>
     </div>
      </main>
    </div>
  );
}

export default App;
