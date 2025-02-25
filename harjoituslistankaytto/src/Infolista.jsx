import React from "react";

const Infolista = ({ taulukko }) => {
  return (
    <ul>
      {taulukko.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Infolista;
