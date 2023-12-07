import React, { useContext } from "react";
import { StateContext } from "../Context/AppContext";
import { GlobalParameterContext } from "../Context/GlobalParameterContext";

function Options(){

    /////// STATE /////////
    const {optionsState, dispatchOptions, ACTION_OPTIONS} = useContext(StateContext)
    const {ACTIONS_GLOBALPARAMETER, dispatchStateGlobalParameter, globalParameter} = useContext(GlobalParameterContext)

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
                <select value={globalParameter.readingSpeed} onChange={(e) => dispatchStateGlobalParameter({type: ACTIONS_GLOBALPARAMETER.UPDATE_READINGSPEED, payload:e.target.value})} id="optionReadingSpeed">
                    <option value="35">Lent</option>
                    <option value="25">Normal</option>
                    <option value="15">Rapide</option>
                </select>
            </div>
        </div>
    )
}

export default Options;