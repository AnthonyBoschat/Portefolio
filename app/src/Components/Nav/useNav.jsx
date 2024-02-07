import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useNav(){

    const navigate = useNavigate()

    const [hexagonsConfiguration, setHexagonsConfiguration] = useState([
        {destination:"Accueil", selected:true, onClick: () => handleClick("/"), sentencesConfiguration:[{timeout:500,sentence:"Accueil",speed:90}]},
        {destination:"Projet", selected:false, onClick: () => handleClick("Projet"), sentencesConfiguration:[{timeout:500,sentence:"Projet",speed:70}]},
        {destination:"Profil", selected:false, onClick: () => handleClick("Profil"), sentencesConfiguration:[{timeout:100,sentence:"Profil",speed:60}]},
        {destination:"Contact", selected:false, onClick: () => handleClick("Contact"), sentencesConfiguration:[{timeout:500,sentence:"Contact",speed:40}]},
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

    const handleClick = (navigateTo) => {
        determineHexagonSelected(navigateTo)
        navigate(navigateTo)
    }

    return{
        determineHexagonSelected,
        hexagonsConfiguration,
        handleClick
    }
}