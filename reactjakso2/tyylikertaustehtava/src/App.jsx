import { useState } from "react";
import "./App.css";
import Tapahtumalomake from "./Tapahtumalomake";
import Tapahtumalista from "./Tapahtumalista";

function App() {
  const [tapahtumat, setTapahtumat] = useState([]);

  const lisaaTapahtuma = (uusi) => {
    setTapahtumat([...tapahtumat, uusi]);
  };

  const poistaTapahtuma = (id) => {
    setTapahtumat(tapahtumat.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1>Tapahtumasovellus</h1>
      <Tapahtumalomake lisaaTapahtuma={lisaaTapahtuma} />
      <Tapahtumalista
        tapahtumat={tapahtumat}
        poistaTapahtuma={poistaTapahtuma}
      />
    </div>
  );
}

export default App;
