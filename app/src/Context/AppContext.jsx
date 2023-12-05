import React, { createContext, useState } from "react";
import { globalParameter } from "../Store/GlobalParameter";
import { useRobotReducer } from "../Store/UseRobot";
import { useOptions } from "../Store/UseOptions";
import { UseAnimationLifeCycle } from "../Store/UseAnimationLifeCycle";

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
        robotBoxRef,
    } = useRobotReducer()

    // OPTIONS
    const {
        optionsState,
        dispatchOptions,
        ACTION_OPTIONS
    } = useOptions()

    const {
        startRobot,
        setstartRobot,
        handleClickBeginRobot,
        renderSpanBegin,
        robotBoxAnimationRef,
    } = UseAnimationLifeCycle()

    ///// RENDER DU CONTEXTE //////
    return(
        <StateContext.Provider value={{
            globalParameter,
            ACTIONS_ROBOT,
            state,
            dispatchStateRobot,
            injectMessage,
            robotBoxRef,
            optionsState,
            dispatchOptions,
            ACTION_OPTIONS,
            startRobot,
            setstartRobot,
            handleClickBeginRobot,
            renderSpanBegin,
            robotBoxAnimationRef,
            }}>
            {children}
        </StateContext.Provider>
    )
}