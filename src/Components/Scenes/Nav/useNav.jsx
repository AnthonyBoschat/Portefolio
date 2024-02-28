import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update_navRenderOnChange, update_navSelected } from "./NavSlice";
import { reset_contactSlice } from "../Contact/ContactSlice";

export default function useNav(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navRenderOnChange = useSelector(store => store.nav.navRenderOnChange)
    const navSelected = useSelector(store => store.nav.navSelected)

    const [hexagonsConfiguration, setHexagonsConfiguration] = useState([
        {destination:"/", selected:true, onClick: () => handleClick("/"), sentencesConfiguration:[{timeout:400,sentence:"Accueil",speed:90}]},
        {destination:"Projet", selected:false, onClick: () => handleClick("Projet"), sentencesConfiguration:[{timeout:500,sentence:"Projet",speed:70}]},
        {destination:"Profil", selected:false, onClick: () => handleClick("Profil"), sentencesConfiguration:[{timeout:350,sentence:"Profil",speed:60}]},
        {destination:"Contact", selected:false, onClick: () => handleClick("Contact"), sentencesConfiguration:[{timeout:450,sentence:"Contact",speed:40}]},
    ])

    const determineHexagonSelected = (destination) => {
        setHexagonsConfiguration(current => {
            return current.map(hexagon => {
                const copyHexagon = {...hexagon}
                copyHexagon.selected = hexagon.destination === destination
                return copyHexagon
            })
        })
    }

    const handleClick = (destination) => { // Quand on clique sur un bouton de navigation
        determineHexagonSelected(destination) // On change la clef selected en true du bouton appuyer
        dispatch(update_navSelected(destination)) // On sauvegarde la destination dans redux
        dispatch(update_navRenderOnChange(true)) // On indique dans redux que le render est en train de changer


        switch(destination){    
            case "Contact":
                dispatch(reset_contactSlice())
                return

            default:
                return

        }
        
    }

    useEffect(() => {
        if(!navRenderOnChange && navSelected){
            navigate(navSelected)
        }
    }, [navRenderOnChange])

    return{
        determineHexagonSelected,
        hexagonsConfiguration,
        handleClick,
    }
}