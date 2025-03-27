import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header";
import ItemLista from "./ItemLista";

function App() {
  return (
    <div>
      <Header />
      <ItemLista />
    </div>
  );
}

export default App;
