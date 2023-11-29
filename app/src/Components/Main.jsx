import React, {useContext, useEffect} from "react";
import Robot from "./Robot";
import { StateContext } from "../Context/AppContext";

function Main(){

    /////// STATE /////////
    const {setStartTyping, globalParameter} = useContext(StateContext)

    /////// METHODE /////////
    // Déclenche le délai pour la première appartion du texte
    useEffect(() => {
        const startTypingTimeOutID = setTimeout(() => {
            setStartTyping(true)
        }, globalParameter.firstDelay);

        
        return(() => clearTimeout(startTypingTimeOutID))
    }, [])

    /////// REF /////////

    /////// RENDER /////////
    return(
        <main>
            <Robot />
        </main>
    )
}

export default Main;