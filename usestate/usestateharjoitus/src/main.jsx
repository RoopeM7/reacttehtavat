import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./counter.jsx";
import ItemList from "./itemList.jsx";
import UserProfile from "./Userprofile.jsx";
import Form from "./Form.jsx";
import Counter2 from "./counter2.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <App />
    <Counter />
    <ItemList />
    <UserProfile />
    <Form />
    <Counter2 />
  </StrictMode>
);
