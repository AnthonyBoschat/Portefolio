import React, { useContext, useState } from "react";
import { StateContext } from "../Context/AppContext";

function Options(){

    /////// STATE /////////
    const {optionsState, dispatchOptions, ACTION_OPTIONS} = useContext(StateContext)


    /////// METHODE /////////
    const handleClickCloseOptions = (event) => {
        if(event.target === event.currentTarget){
            dispatchOptions({type:ACTION_OPTIONS.DISPARITION})
            setTimeout(() => {
                dispatchOptions({type:ACTION_OPTIONS.CLOSE})
            }, 290);
        }
    }
    /////// REF /////////

    /////// RENDER /////////
    return(
        <div onClick={handleClickCloseOptions} className={`optionsOverlay ${optionsState.animationClass}`}>
            <div className="optionsBox"></div>
        </div>
    )
}

export default Options;