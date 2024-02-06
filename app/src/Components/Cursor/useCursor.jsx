import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useCursor(blinkSpeed = 500){

    const [cursorVisible, setcursorVisible] = useState(false)

    // Fonction qui fait clignotter la bare blanche qui sert de curseur lors du chargement
    const cursorBlink = () => {
        const intervalBlinkID = setInterval(() => {
            setcursorVisible(current => !current)
        }, blinkSpeed)

        return intervalBlinkID
    }

    const cursorDisparition = (cursorRef, timeoutDelay) => {
        setTimeout(() => {
            cursorRef?.current?.classList.add("cursor-opacity-out")
        }, timeoutDelay)
    }

    // Quand l'état du curseur change, on fait clignotter l'état local cursorVisible
    useEffect(() => {
        const intervalBlinkID = cursorBlink()

        return(() => {
            clearInterval(intervalBlinkID)
        })
    }, [])



    return{
        cursorBlink,
        cursorVisible,
        cursorDisparition
    }
}