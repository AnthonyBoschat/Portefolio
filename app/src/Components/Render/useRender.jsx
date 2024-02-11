import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_navRenderOnChange } from "../Nav/NavSlice";

export default function useRender(){

    const renderBoxRef = useRef()
    const navRenderOnChange = useSelector(store => store.nav.navRenderOnChange)
    const dispatch = useDispatch()

    useEffect(() => { // Quand il est indiquer qu'un utilisateur viens de cliquer sur un bouton de navigation
        const toggleRenderOnChange = () => {
            dispatch(update_navRenderOnChange(false))
        }

        if(navRenderOnChange && renderBoxRef.current){
            renderBoxRef.current.addEventListener("animationend", toggleRenderOnChange)
        }

        return () => {
            if(renderBoxRef.current){
                renderBoxRef.current.removeEventListener("animationend", toggleRenderOnChange)
            }
        }
    }, [navRenderOnChange])

    return{
        renderBoxRef
    }
}