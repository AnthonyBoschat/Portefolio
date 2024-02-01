import React from "react";
import TypingSentenceCompiler from "./TypingSentence_Constructor/TypingSentenceCompiler";

function TypingSentence_Contact(){

    const sentencesConfiguration = [{
        timeout:500,
        sentence:"Contact",
        speed:40,
    }]

    return(
        <TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration}/>
    )
}

export default TypingSentence_Contact;