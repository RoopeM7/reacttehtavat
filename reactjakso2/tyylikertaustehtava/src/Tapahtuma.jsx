import React from "react";
import "./Tapahtuma.css";

function Tapahtuma({ tapahtuma, poistaTapahtuma }) {
  const { id, nimi, paivamaara, kategoria } = tapahtuma;

  const kategoriaLuokka = `tapahtuma kategoria-${kategoria}`;

  return (
    <div className={kategoriaLuokka}>
      <h3>{nimi}</h3>
      <p>{paivamaara}</p>
      <p className="kategoria">{kategoria}</p>
      <button onClick={() => poistaTapahtuma(id)} className="poista-nappi">
        POISTA!!!
      </button>
    </div>
  );
}

export default Tapahtuma;
