import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update_navRenderOnChange, update_navSelected } from "./NavSlice";

export default function useNav(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const navRenderOnChange = useSelector(store => store.nav.navRenderOnChange)
    // const navSelected = useSelector(store => store.nav.navSelected)

    const [hexagonsConfiguration, setHexagonsConfiguration] = useState([
        {destination:"Accueil", selected:true, onClick: () => handleClick("/"), sentencesConfiguration:[{timeout:400,sentence:"Accueil",speed:90}]},
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

    const handleClick = (destination) => {
        determineHexagonSelected(destination)
        // dispatch(update_navSelected(destination))
        navigate(destination)
        // dispatch(update_navRenderOnChange(true))
    }

    return{
        determineHexagonSelected,
        hexagonsConfiguration,
        handleClick,
    }
}