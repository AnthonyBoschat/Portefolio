import React, { createContext, useState } from "react";

// On définie un contexte
export const StateContext = createContext();

// On définie son provider et les state par défaut
export const StateProvider = ({children}) => {
    const [controle, setControle] = useState("Anthony")

    ///// RENDER DU CONTEXTE //////
    return(
        <StateContext.Provider value={{controle}}>
            {children}
        </StateContext.Provider>
    )
}