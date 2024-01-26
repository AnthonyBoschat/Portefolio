import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useWhiteBar(){

    const cursor = useSelector(store => store.writter.cursor)
    const [cursorVisible, setcursorVisible] = useState(true)

    // Fonction qui fait clignotter la bare blanche qui sert de curseur lors du chargement
    const cursorBlink = () => {
        const intervalBlinkID = setInterval(() => {
            setcursorVisible(current => !current)
        }, 300)

        return intervalBlinkID
    }

    const cursorDisparition = (cursorRef, timeoutDelay) => {
        setTimeout(() => {
            cursorRef?.current?.classList.add("cursor-opacity-out")
        }, timeoutDelay);
    }

    // Quand l'état du curseur change, on fait clignotter l'état local cursorVisible
    // useEffect(() => {
    //     let intervalBlinkID
    //     if(cursor){
    //         intervalBlinkID = cursorBlink()

    //         return(() => {
    //             clearInterval(intervalBlinkID)
    //         })
    //     }
    // }, [cursor])



    return{
        cursorBlink,
        cursorVisible,
        cursorDisparition
    }
}