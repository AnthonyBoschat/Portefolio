import "./CSS/MAIN.css";
import React, { useEffect, useState } from "react";
import { StateProvider } from "./Context/StateContext";
import Main from "./Component/Main";

function App() {

  return (
    <StateProvider>
      <Main />
    </StateProvider>
  );
}

export default App;
