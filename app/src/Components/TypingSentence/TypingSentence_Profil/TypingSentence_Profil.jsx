import React from "react";
import TypingSentenceCompiler from "../TypingSentenceCompiler";

function TypingSentence_Profil(){

    const sentencesConfiguration = [{
        timeout:100,
        sentence:"Profil",
        speed:60,
    }]

    return(
        <TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration}/>
    )
}

export default TypingSentence_Profil;