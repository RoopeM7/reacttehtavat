import React from "react";
import OpiskelijaTiedot from "./OpiskelijaTiedot";

function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <h1>Opiskelijan tiedot</h1>
      {}
      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;
