import React, {useContext, useEffect, useRef} from "react";
import { StateContext } from "../Context/StateContext";

function Robot(){

    /////// STATE /////////
    const {injectMessage, index, setIndex, messageDisplay, setMessageDisplay, initMessageParameter, firstDelay, setFirstDelay, startTyping, setStartTyping, readingSpeed, setReadingSpeed} = useContext(StateContext)



    /////// METHODE /////////
    // Une fois que le premier delay est terminé
    useEffect(() => {
        injectMessage()
    }, [startTyping])

    // Quand on clique sur continuer
    const handleClick = () => {
        injectMessage()
    }

    
    /////// RENDER /////////

    return(
        <div onClick={handleClick} className="robotBox">
            {messageDisplay}
        </div>
    )
}

export default Robot;