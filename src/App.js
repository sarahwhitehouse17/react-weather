import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  function showWeather(response) {
    alert(`It is ${response.data.main.temp} in Paris today`);
  }

  let apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
