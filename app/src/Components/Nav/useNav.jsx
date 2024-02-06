import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useNav(){

    const navigate = useNavigate()

    const [hexagonsConfiguration, setHexagonsConfiguration] = useState([
        {navigateTo:"/", selected:true, sentencesConfiguration:[{timeout:500,sentence:"Accueil",speed:90}]},
        {navigateTo:"Projet", selected:false, sentencesConfiguration:[{timeout:500,sentence:"Projet",speed:70}]},
        {navigateTo:"Profil", selected:false, sentencesConfiguration:[{timeout:100,sentence:"Profil",speed:60}]},
        {navigateTo:"Contact", selected:false, sentencesConfiguration:[{timeout:500,sentence:"Contact",speed:40}]},
    ])

    const determineHexagonSelected = (navigateTo) => {
        setHexagonsConfiguration(current => {
            return current.map(hexagon => {
                const copyHexagon = {...hexagon}
                copyHexagon.selected = hexagon.navigateTo === navigateTo
                return copyHexagon
            })
        })
    }

    const handleClick = (hexagon) => {
        determineHexagonSelected(hexagon.navigateTo)
        navigate(hexagon.navigateTo)
    }

    return{
        determineHexagonSelected,
        hexagonsConfiguration,
        handleClick
    }
}