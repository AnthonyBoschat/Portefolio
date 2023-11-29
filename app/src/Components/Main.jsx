import React, {useContext, useEffect, useState} from "react";
import Robot from "./Robot";
import { StateContext } from "../Context/AppContext";

function Main(){

    /////// STATE /////////
    const {setStartTyping, globalParameter} = useContext(StateContext)
    const [bouton, setBouton] = useState(false)

    
    /////// METHODE /////////
    
    // Déclenche le délai pour la première appartion du texte
    /*useEffect(() => {

        const startTypingTimeOutID = setTimeout(() => {
            setStartTyping(true)
        }, globalParameter.firstDelay);

        return(() => clearTimeout(startTypingTimeOutID))
        
    }, [bouton])*/


    const handleClick = () => {
        setBouton(true)
        const startTypingTimeOutID = setTimeout(() => {
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