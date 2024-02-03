import React from "react";
import TypingSentence_Contact from "../TypingSentence/Contact";
import TypingSentence_Profil from "../TypingSentence/Profil";
import TypingSentence_Projet from "../TypingSentence/Projet";
import HexagonCompiler from "../Hexagon/HexagonCompiler";
import TypingSentenceCompiler from "../TypingSentence/TypingSentence_Constructor/TypingSentenceCompiler";

function Nav(){

    

    const hexagonConfiguration = [
        {navigateTo:"Profil", typingSentence:<TypingSentence_Profil/>},
        {navigateTo:"Projet", typingSentence:<TypingSentence_Projet/>},
        {navigateTo:"Contact", typingSentence:<TypingSentence_Contact/>},


        {navigateTo:"/", typingSentence:<TypingSentenceCompiler sentencesConfiguration={[
            {
                timeout:500,
                sentence:"Sphere",
                speed:90,
            }
        ]}/>},
    ]

    return(
            <div className="navBox">
                <HexagonCompiler hexagonConfiguration={hexagonConfiguration}/>
            </div>
    )
}

export default Nav;