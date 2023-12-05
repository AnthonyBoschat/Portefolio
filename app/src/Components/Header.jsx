import React, { useContext } from "react";
import Options from "./Options";
import { StateContext } from "../Context/AppContext";

function Header(){

    /////// STATE /////////
    const {optionsState, dispatchOptions, ACTION_OPTIONS} = useContext(StateContext)
    /////// METHODE /////////
    
    /////// REF /////////

    /////// RENDER /////////

    return(
        <header>
            <i onClick={() => dispatchOptions({type:ACTION_OPTIONS.OPEN})} className="fa-solid fa-gear optionsGear apparition"></i>
            {optionsState.display ? (<Options />) : (null)}
        </header>
        
    )
}

export default Header;