import React, {} from "react";
import { useDispatch } from "react-redux";
import { update_showSecondNav } from "./NavSlice";

export default function useNav(){
    const dispatch = useDispatch()

    const determineClickAction = (urlDestination) => {
        switch(urlDestination){

            case "Projet":
                dispatch(update_showSecondNav(true))
                return
            
            case "Profil":
                dispatch(update_showSecondNav(false))
                

            case "Contact":
                dispatch(update_showSecondNav(false))
                return
            
            case "/":
                dispatch(update_showSecondNav(false))
                return


            default:
                return
        }
    }

    return{
        determineClickAction
    }
}