import React, { createContext, useState } from "react";
import { globalParameter } from "../Store/GlobalParameter";
import { useRobot } from "../Store/UseRobot";
import { useOptions } from "../Store/UseOptions";

// On définie un contexte
export const StateContext = createContext();

// On définie son provider et les state par défaut
export const StateProvider = ({children}) => {

    // ROBOT
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

    // OPTIONS
    const {
        optionsState,
        dispatchOptions,
        ACTION_OPTIONS
    } = useOptions()

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
            injectMessage,
            optionsState,
            dispatchOptions,
            ACTION_OPTIONS,}}>
            {children}
        </StateContext.Provider>
    )
}