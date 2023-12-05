import "./CSS/MAIN.css";
import React from "react";
import { StateProvider } from "./Context/AppContext";
import Main from "./Components/Main";

function App() {
  return (
    <StateProvider>
      <Main />
    </StateProvider>
  );
}

export default App;
