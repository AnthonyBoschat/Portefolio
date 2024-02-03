import React from "react";
import HexagonCompiler from "../Hexagon/HexagonCompiler";
import { useDispatch } from "react-redux";
import {update_showSecondNav} from "./NavSlice";

function FirstNav(){

    const dispatch = useDispatch()

    

    const hexagonConfiguration = [
        {navigateTo:"Profil", onClick:() => dispatch(update_showSecondNav(true)), sentencesConfiguration:[{timeout:100,sentence:"Profil",speed:60}]},
        {navigateTo:"Projet", onClick:() => dispatch(update_showSecondNav(true)), sentencesConfiguration:[{timeout:500,sentence:"Projet",speed:70}]},
        {navigateTo:"Contact", onClick:() => dispatch(update_showSecondNav(true)), sentencesConfiguration:[{timeout:500,sentence:"Contact",speed:40}]},

        {navigateTo:"/",  onClick:() => dispatch(update_showSecondNav(false)), sentencesConfiguration:[{timeout:500,sentence:"Sphere",speed:90,}]},
    ]

    return(
            <div className="firstNavBox">
                <HexagonCompiler hexagonConfiguration={hexagonConfiguration}/>
            </div>
    )
}

export default FirstNav;