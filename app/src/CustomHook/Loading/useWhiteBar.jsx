import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useWhiteBar(){

    const onLoad = useSelector(store => store.lifeCycle.initialisation.onLoad)
    const [whiteBarVisible, setWhiteBarVisible] = useState(true)

    // Fonction qui fait clignotter la bare blanche qui sert de curseur lors du chargement
    const whiteBarBlink = () => {
        const intervalBlinkID = setInterval(() => {
            setWhiteBarVisible(current => !current)
        }, 400)

        return intervalBlinkID
    }

    // Si on est en loading, fait clignotter le curseur blanc
    useEffect(() => {
        let intervalBlinkID
        if(onLoad){
            intervalBlinkID = whiteBarBlink()

            return(() => {
                clearInterval(intervalBlinkID)
            })
        }
    }, [onLoad])



    return{
        whiteBarBlink,
        whiteBarVisible
    }
}