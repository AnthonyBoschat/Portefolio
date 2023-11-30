import React, {useContext, useEffect, useState} from "react";
import Robot from "./Robot";
import { StateContext } from "../Context/AppContext";

function Main(){

    /////// STATE /////////
    const {setStartTyping, globalParameter} = useContext(StateContext)
    const [bouton, setBouton] = useState(false)

    
    /////// METHODE /////////
    const handleClick = () => {
        
        setBouton(true)

        setTimeout(() => {
            setStartTyping(true)
        }, globalParameter.firstDelay);
    }

    /////// REF /////////

    /////// RENDER /////////
    return(
        <main>
            {bouton ? <Robot /> : <span className="beginSpan" onClick={handleClick}>Commencer</span> }
        </main>
    )
}

export default Main;