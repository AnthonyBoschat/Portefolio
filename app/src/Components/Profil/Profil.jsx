import React from "react";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";
import Cursor_Console from "../Cursor/Console";
import Console from "../Console/Console";

function Profil(){

    const sentencesConfiguration = [{
        timeout:500,
        sentence:
        `Dénomination               :  Anthony Boschat
        Âge                         :  29 ans
        Zone d'habitat              :  Tours
        Caractéristique physique    :  1m73, yeux noisette, cheveux court`,
        speed:2,
    }]

    const consoleConfiguration = {
        typingSentence:<TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration}/>,
        cursor:<Cursor_Console/>,
    }

    

    

    return(
        <Console consoleConfiguration = {consoleConfiguration}/>
    )
}

export default Profil;