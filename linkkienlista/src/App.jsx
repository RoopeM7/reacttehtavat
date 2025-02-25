import React from "react";
import Linkkilista from "./linkkilista";

const linkit = [
  { nimi: "Google", url: "https://google.com" },
  { nimi: "React", url: "https://react.dev" },
];

function App() {
  return (
    <div>
      <Linkkilista lista={linkit} />
    </div>
  );
}

export default App;
