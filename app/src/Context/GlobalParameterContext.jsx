import React, { createContext, useState } from "react";
import { useGlobalParameter } from "../Store/UseGlobalParameter";

// On définie un contexte
export const GlobalParameterContext = createContext();

// On définie son provider et les state par défaut
export const GlobalParameterProvider = ({children}) => {

    const {
        globalParameter,
        ACTIONS_GLOBALPARAMETER,
        dispatchStateGlobalParameter,
    } = useGlobalParameter()


    ///// RENDER DU CONTEXTE //////
    return(
        <GlobalParameterContext.Provider value={{
            globalParameter,
            ACTIONS_GLOBALPARAMETER,
            dispatchStateGlobalParameter,
        }}>
            {children}
        </GlobalParameterContext.Provider>
    )
}