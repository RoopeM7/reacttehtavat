import React from "react";

const Tervehdys = ({ name }) => {
  return <p>Terve Terve {name}!</p>;
};

const Infolista = ({ taulukko }) => {
  return (
    <ul>
      {taulukko.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const kayttajakortti = ({ nimi, lista }) => {
  return (
    <div>
      <Tervehdys name={nimi} />
      <Infolista taulukko={lista} />
    </div>
  );
};

export default kayttajakortti;
