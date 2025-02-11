import React from "react";

const OpiskelijaTiedot = () => {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <h2>Opiskelijan tiedot</h2>
      <p>
        <strong>Nimi:</strong> {opiskelija.nimi}
      </p>
      <p>
        <strong>Ikä:</strong> {opiskelija.ika}
      </p>
      <p>
        <strong>Kurssi:</strong> {opiskelija.kurssi}
      </p>
    </div>
  );
};

export default OpiskelijaTiedot;
