import React from "react";

const OpiskelijaTiedot = (props) => {
  const { nimi, ika, kurssi } = props.opiskelija;

  return (
    <div>
      <h2>Opiskelijan tiedot</h2>
      <p>Nimi: {nimi}</p>
      <p>Ikä: {ika}</p>
      <p>Kurssi: {kurssi}</p>
    </div>
  );
};

export default OpiskelijaTiedot;
