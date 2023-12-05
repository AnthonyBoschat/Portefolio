import React, { useContext } from "react";
import { StateContext } from "../Context/AppContext";

function Options(){

    /////// STATE /////////
    const {optionsState, dispatchOptions, ACTION_OPTIONS, dispatchStateGlobalParameter, ACTIONS_GLOBALPARAMETER} = useContext(StateContext)


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
            <div className="optionsBox">
                <label htmlFor="optionReadingSpeed">Vitesse de lecture</label>
                <select defaultValue="25" onChange={(e) => dispatchStateGlobalParameter({type: ACTIONS_GLOBALPARAMETER.UPDATE_READINGSPEED, payload:e.target.value})} id="optionReadingSpeed">
                    <option value="15">Lent</option>
                    <option value="25">Normal</option>
                    <option value="35">Rapide</option>
                </select>
            </div>
        </div>
    )
}

export default Options;