import React from "react";
import Infolista from "./Infolista";

const tiedot = ["React", "JavaScript", "CSS"];

function App() {
  return (
    <div>
      <h1>Ohjelmointikielet</h1>
      <Infolista taulukko={tiedot} />
    </div>
  );
}

export default App;
