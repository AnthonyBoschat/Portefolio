import React, { useContext, useEffect, useState, useRef } from "react";
import { StateContext } from "../Context/StateContext";
import Robot from "./Robot";

function Main(){

    /////// STATE /////////
    const {index, setIndex, messageDisplay, setMessageDisplay, initMessageParameter, firstDelay, setFirstDelay, startTyping, setStartTyping, readingSpeed, setReadingSpeed} = useContext(StateContext)


    /////// METHODE /////////
    // Après firstDelay, on initialise le startTyping à true
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