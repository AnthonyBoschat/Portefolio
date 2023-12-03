import React, { createContext, useState } from "react";
import { globalParameter } from "../Store/GlobalParameter";
import { useRobotReducer } from "../Store/UseRobot";
import { useOptions } from "../Store/UseOptions";

// On définie un contexte
export const StateContext = createContext();

// On définie son provider et les state par défaut
export const StateProvider = ({children}) => {

    // ROBOT
    const {
        ACTIONS_ROBOT,
        state,
        dispatchStateRobot,
        injectMessage,
    } = useRobotReducer()

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
            ACTIONS_ROBOT,
            state,
            dispatchStateRobot,
            injectMessage,
            optionsState,
            dispatchOptions,
            ACTION_OPTIONS,}}>
            {children}
        </StateContext.Provider>
    )
}