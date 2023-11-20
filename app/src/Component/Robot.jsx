import React, {useContext, useEffect, useRef} from "react";
import { StateContext } from "../Context/StateContext";

function Robot(){

    /////// STATE /////////
    const {messageMapIndex, setMessageMapIndex, setResetRootIndex, rootIndex, setRootIndex, injectMessage, index, setIndex, messageDisplay, setMessageDisplay, initMessageParameter, firstDelay, setFirstDelay, startTyping, setStartTyping, readingSpeed, setReadingSpeed} = useContext(StateContext)

    /////// METHODE /////////
    // Une fois que le délai initial est terminé, on injecte le premier message
    useEffect(() => {
        injectMessage()
    }, [startTyping])

    // Quand on clique sur continuer
    const handleClick = () => {
        setMessageMapIndex(current => (current + 1))
    }

    const buttonClick = (event) => {
        const {route} = event.currentTarget.dataset
        setResetRootIndex(route)
    }

    useEffect(() => {
        injectMessage()
    }, [messageMapIndex, rootIndex])

    
    /////// RENDER /////////

    return(
        
        <div>
            <div onClick={handleClick} className="robotBox">
                {messageDisplay}
            </div>
            <button data-route={1} onClick={buttonClick}>
                Route 1
            </button>
            <button data-route={2} onClick={buttonClick}>
                Route 2
            </button>
            <button data-route={0} onClick={buttonClick}>
                Reset
            </button>
        </div>
    )
}

export default Robot;