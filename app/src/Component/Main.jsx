import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../Context/StateContext";

function Main(){

    /////// STATE /////////
    const [readingSpeed, setReadingSpeed] = useState(15)
    const [index, setIndex] = useState(0)
    const [messageDisplay, setMessageDisplay] = useState("")


    /////// METHODE /////////
    useEffect(() => {
        const message = "Bonjour Maurane, ceci est un contrôle de la vitesse de lecture de mon programme informatique, pas de panique !"
        const timeoutID = setTimeout(() => {
            if(index < message.length){
                setMessageDisplay(current => current + message[index])
                setIndex(current => current + 1)
            }
        }, readingSpeed);

        return(() => clearTimeout(timeoutID))
    }, [messageDisplay])


    /////// RENDER /////////

    return(
        <main>{messageDisplay}</main>
    )
}

export default Main;