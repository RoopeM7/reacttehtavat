import React from "react";
import Kayttajakortti from "./kayttajakortti"; // HUOM ROOPE! AINA pitää olla Isolla alkukirjaimella

function App() {
  return (
    <div>
      <h1>Käyttäjäkortti</h1>
      <Kayttajakortti nimi="Roope" lista={["React", "JavaScript", "CSS"]} /> {}
    </div>
  );
}

export default App;
