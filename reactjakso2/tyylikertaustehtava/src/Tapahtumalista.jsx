import React from "react";
import Tapahtuma from "./Tapahtuma";
import "./TapahtumaLista.css";

function Tapahtumalista({ tapahtumat, poistaTapahtuma }) {
  return (
    <div className="tapahtuma-lista">
      {tapahtumat.length === 0 ? (
        <p className="ei-tapahtumia">Ei tapahtumia</p>
      ) : (
        tapahtumat.map((tapahtuma) => (
          <Tapahtuma
            key={tapahtuma.id}
            tapahtuma={tapahtuma}
            poistaTapahtuma={poistaTapahtuma}
          />
        ))
      )}
    </div>
  );
}

export default Tapahtumalista;
