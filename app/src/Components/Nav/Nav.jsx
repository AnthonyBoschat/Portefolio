import React from "react";
import HexagonCompiler from "../Hexagon/HexagonCompiler";

function Nav(){

    

    const hexagonConfiguration = [
        {navigateTo:"Profil", sentencesConfiguration:[{timeout:100,sentence:"Profil",speed:60}]},
        {navigateTo:"Projet", sentencesConfiguration:[{timeout:500,sentence:"Projet",speed:70}]},
        {navigateTo:"Contact", sentencesConfiguration:[{timeout:500,sentence:"Contact",speed:40}]},

        {navigateTo:"/", sentencesConfiguration:[{timeout:500,sentence:"Sphere",speed:90,}]},
    ]

    return(
            <div className="navBox">
                <HexagonCompiler hexagonConfiguration={hexagonConfiguration}/>
            </div>
    )
}

export default Nav;