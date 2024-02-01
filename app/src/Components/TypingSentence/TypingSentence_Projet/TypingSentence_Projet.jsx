import React from "react";
import TypingSentenceCompiler from "../TypingSentenceCompiler";

function TypingSentence_Projet(){

    const sentencesConfiguration = [{
        timeout:500,
        sentence:"Projet",
        speed:70,
    }]

    return(
        <TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration}/>
    )
}

export default TypingSentence_Projet;