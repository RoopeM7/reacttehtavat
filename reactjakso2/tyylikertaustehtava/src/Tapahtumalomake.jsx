import React, { useState } from "react";
import "./Tapahtumalomake.css";

function Tapahtumalomake({ lisaaTapahtuma }) {
  const [nimi, setNimi] = useState("");
  const [paivamaara, setPaivamaara] = useState("");
  const [kategoria, setKategoria] = useState("");

  const kasitteleSubmit = (e) => {
    e.preventDefault();
    if (!nimi || !paivamaara || !kategoria) return;

    const uusiTapahtuma = {
      id: Date.now(),
      nimi,
      paivamaara,
      kategoria,
    };

    lisaaTapahtuma(uusiTapahtuma);
    setNimi("");
    setPaivamaara("");
    setKategoria("");
  };

  return (
    <form className="Tapahtuma_Lomake" onSubmit={kasitteleSubmit}>
      <input
        type="text"
        placeholder="Tapahtuman nimi"
        value={nimi}
        onChange={(e) => setNimi(e.target.value)}
        className="input"
      />
      <input
        type="date"
        value={paivamaara}
        onChange={(e) => setPaivamaara(e.target.value)}
        className="input"
      />
      <select
        value={kategoria}
        onChange={(e) => setKategoria(e.target.value)}
        className="input"
      >
        <option value="">Valitse</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button type="submit" className="lisaa-nappi">
        Lisää valintasi!!!
      </button>
    </form>
  );
}

export default Tapahtumalomake;
