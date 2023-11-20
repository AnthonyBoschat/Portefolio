import React, {useContext, useEffect, useRef} from "react";
import { StateContext } from "../Context/StateContext";

function Robot(){

    /////// STATE /////////
    const {messageMapIndex, setMessageMapIndex, setResetRootIndex, rootIndex, injectMessage, messageDisplay, startTyping} = useContext(StateContext)

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


    // Permet de calculer la différence entre scrollHeight ( la hauteur réel/total de mon contenu ) et clientHeight ( la hauteur visible de mon contenu ) et d'ajuster verticalement l'élément à chaque frappe
    useEffect(() => {
        if(robotBoxRef.current){
            robotBoxRef.current.scrollTop = robotBoxRef.current.scrollHeight - robotBoxRef.current.clientHeight
        }
    }, [messageDisplay])
    
    const robotBoxRef = useRef(null)
    /////// RENDER /////////
    return(
        <div className="screen">
            <div>
                <div ref={robotBoxRef} onClick={handleClick} className="robotBox">
                    {messageDisplay}
                </div>
            </div>
            <button data-route={0} onClick={buttonClick}>
                reset
            </button>
        </div>
    )
}

export default Robot;