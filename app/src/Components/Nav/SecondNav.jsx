import React from "react";
import HexagonCompiler from "../Hexagon/HexagonCompiler";
import { useSelector } from "react-redux";

function SecondNav(){

    const showSecondNav = useSelector(store => store.nav.showSecondNav)

    const hexagonConfiguration = [
        {navigateTo:"/", sentencesConfiguration:[{timeout:100,sentence:"Calculatrice",speed:60}]},
        {navigateTo:"/", sentencesConfiguration:[{timeout:500,sentence:"Boulangerie",speed:70}]},
        {navigateTo:"/", sentencesConfiguration:[{timeout:500,sentence:"Pokedex",speed:40}]},
    ]

    return(
            <div className="navBox second">
                {showSecondNav && <HexagonCompiler hexagonConfiguration={hexagonConfiguration}/> }
            </div>
    )
}

export default SecondNav;