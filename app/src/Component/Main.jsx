import React, { useContext, useEffect, useState, useRef } from "react";
import { StateContext } from "../Context/StateContext";
import Robot from "./Robot";

function Main(){

    /////// STATE /////////
    const {index, setIndex, messageDisplay, setMessageDisplay, initMessageParameter, firstDelay, setFirstDelay, startTyping, setStartTyping, readingSpeed, setReadingSpeed} = useContext(StateContext)


    /////// METHODE /////////
    // Déclenche le délai pour la première appartion du texte
    useEffect(() => {
        const startTypingTimeOut = setTimeout(() => {
            setStartTyping(true)
        }, firstDelay);
        return(() => clearTimeout(startTypingTimeOut))
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