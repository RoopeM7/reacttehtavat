import React from "react";

const Linkkilista = ({ lista }) => {
  return (
    <ul>
      {lista.map((linkki, index) => (
        <li key={index}>
          <a href={linkki.url} target="_blank" rel="noopener noreferrer">
            {linkki.nimi}
          </a>
        </li>
      ))}
    </ul>
  );
};
// Ohjelman voi käynnistää Roope tekemällä npm run dev komennon terminaaliin. MUISTUTUS TÄRKEEÄÄÄ JOS UNOHDAT ROOPE ÄLÄ UNOHDA TÄTÄ KOMENTOA!!!!
export default Linkkilista;
