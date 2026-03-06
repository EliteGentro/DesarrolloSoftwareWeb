import { useState } from "react";
import CountryList from "./components/CountryList";
import CountryListAI from "./components/CountryListAI";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Administrador de Países</h1>
      </header>
      <main>
        <div className="dual-lists">
          <div className="original">
            <CountryList />
          </div>
          <div className="ai">
            <CountryListAI />
          </div>
        </div>
      </main>
      <footer>
        <p>CRUD de Países © 2026</p>
      </footer>
    </div>
  );
}
export default App;
