import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update_navRenderOnChange, update_navSelected } from "./NavSlice";
import { reset_contactSlice } from "../Contact/ContactSlice";
import { update_cancelAnimation } from "../../Constructors/Circuit/CircuitSlice";
import { update_cvOnload } from "../Profil/ProfilSlice";
import { update_projetSelected } from "../Projet/ProjetSlice";

export default function useNav(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navRenderOnChange = useSelector(store => store.nav.navRenderOnChange)
    const navSelected = useSelector(store => store.nav.navSelected)
    const [buttonClicked, setButtonClicked] = useState(false)

    const [hexagonsConfiguration, setHexagonsConfiguration] = useState([
        {destination:"/", selected:true, onClick: () => handleClick("/"), sentencesConfiguration:[{timeout:400,sentence:"Accueil",speed:90}]},
        {destination:"Projet", selected:false, onClick: () => handleClick("Projet"), sentencesConfiguration:[{timeout:500,sentence:"Projet",speed:70}]},
        {destination:"Profil", selected:false, onClick: () => handleClick("Profil"), sentencesConfiguration:[{timeout:350,sentence:"Profil",speed:60}]},
        // {destination:"Contact", selected:false, onClick: () => handleClick("Contact"), sentencesConfiguration:[{timeout:450,sentence:"Contact",speed:40}]},
    ])

    const handleClick = (destination) => {

        setHexagonsConfiguration(current => { // On change le selected de l'hexagon sur lequel on vient de cliquer
            return current.map(hexagon => {
                const copyHexagon = {...hexagon}
                copyHexagon.selected = hexagon.destination === destination
                return copyHexagon
            })
        })

        dispatch(update_navSelected(destination)) // On sauvegarde la destination dans redux
        dispatch(update_cancelAnimation(true)) // On indique de cancel l'animation principal

        switch(destination){    // Effet lors du clique sur les hexagons déjà selectionner
            case "Contact":
                dispatch(reset_contactSlice())
                return

            case "/":
                dispatch(update_cancelAnimation(false))
                return

            case "Projet":
                dispatch(update_projetSelected(null))
                return

            default:
                return
        }
    }

    useEffect(() => { // Si la destination s'est mise à changer
        if(navSelected){
            setButtonClicked(true) // On indique qu'un bouton viens d'etre cliquer

            return () => setButtonClicked(false)
        }
    }, [navSelected]) // Si la destination a changer

    

    useEffect(() => {
        if(buttonClicked){ // Si un bouton est cliquer
            dispatch(update_navRenderOnChange(true)) // On indique dans redux que le render est en train de changer

            return () => dispatch(update_navRenderOnChange(false))
        }
    }, [buttonClicked])

    useEffect(() => { // Si le render est en train de changer
        if(!navRenderOnChange && navSelected){
            setButtonClicked(false) // On repasse le controle bouton en false
            dispatch(update_cvOnload(false)) // On annule la visibilité du CV
            navigate(navSelected) // On navigate jusqu'a la destination
        }
    }, [navRenderOnChange])

    return{
        hexagonsConfiguration,
        handleClick,
    }
}