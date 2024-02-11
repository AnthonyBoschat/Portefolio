import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_navRenderOnChange } from "../Nav/NavSlice";

export default function useRender(){

    const renderBoxRef = useRef()
    const navRenderOnChange = useSelector(store => store.nav.navRenderOnChange)
    const dispatch = useDispatch()

    useEffect(() => { // Quand il est indiquer qu'un utilisateur viens de cliquer sur un bouton de navigation
        let timeoutID = false


        const toggleRenderOnChange = (time) => {
            return setTimeout(() => {
                dispatch(update_navRenderOnChange(false))
            }, time);
        }

        if(navRenderOnChange && renderBoxRef.current){
            console.log("controle")
            toggleRenderOnChange(500) //
            // renderBoxRef.current.addEventListener("animationend", toggleRenderOnChange)
        }

        return () => {
            if(renderBoxRef.current && timeoutID){
                clearTimeout(timeoutID) //
                // renderBoxRef.current.removeEventListener("animationend", toggleRenderOnChange)
            }
        }
    }, [navRenderOnChange])

    return{
        renderBoxRef
    }
}