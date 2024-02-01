import React from "react";
import TypingSentenceCompiler from "./TypingSentence_Constructor/TypingSentenceCompiler";

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