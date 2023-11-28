import React, { createContext, useState } from "react";
import { globalParameter } from "../Store/GlobalParameter";
import { useRobot } from "../Store/UseRobot";

// On définie un contexte
export const StateContext = createContext();

// On définie son provider et les state par défaut
export const StateProvider = ({children}) => {

    const {
        startTyping,
        setStartTyping,
        messageDisplay,
        setMessageDisplay,
        rootIndex,
        setRootIndex,
        messageMapIndex,
        setMessageMapIndex,
        messageMap,
        setMessageMap,
        setResetRootIndex,
        injectMessage
    } = useRobot()

    ///// RENDER DU CONTEXTE //////
    return(
        <StateContext.Provider value={{
            globalParameter,
            startTyping,
            setStartTyping,
            messageDisplay,
            setMessageDisplay,
            rootIndex,
            setRootIndex,
            messageMapIndex,
            setMessageMapIndex,
            messageMap,
            setMessageMap,
            setResetRootIndex,
            injectMessage}}>
            {children}
        </StateContext.Provider>
    )
}