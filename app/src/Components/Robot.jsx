import React, {useContext, useEffect, useRef} from "react";
import { StateContext } from "../Context/AppContext";

function Robot(){

    /////// STATE /////////
    const {setMessageMapIndex, setResetRootIndex, messageDisplay} = useContext(StateContext)
    
    /////// METHODE /////////
    // Pour afficher le message suivant
    const handleClickNextMessage = () => {
        setMessageMapIndex(current => (current + 1))
    }


    // Pour reset les message
    const handleClickResetMessage = () => {
        setResetRootIndex(0)
    }

    const handleClickPreviousMessage = () => {
        setMessageMapIndex(current => {
            if(current > 0){return current - 1}
            setResetRootIndex(0)
        })
    }

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
                <div ref={robotBoxRef} onClick={handleClickNextMessage} className="robotBox">
                    {messageDisplay}
                </div>
            </div>
            <button onClick={handleClickResetMessage}>Reset</button>
            <button onClick={handleClickPreviousMessage}>Précedent</button>
        </div>
    )
}

export default Robot;