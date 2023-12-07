import "./CSS/MAIN.css";
import React from "react";
import { StateProvider } from "./Context/AppContext";
import { GlobalParameterProvider } from "./Context/GlobalParameterContext";
import Main from "./Components/Main";

function App() {
  return (
    <GlobalParameterProvider>
      <StateProvider>
        <Main />
      </StateProvider>
    </GlobalParameterProvider>
  );
}

export default App;
