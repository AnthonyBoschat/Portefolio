import React from "react";
import TypingSentenceCompiler from "../TypingSentence/TypingSentence_Constructor/TypingSentenceCompiler";
import Cursor_Console from "../Cursor/Console";

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


    return(
        <div className="mainCategoryPresentationConsoleBox">
            <div className="pendingSentenceBox">
                <TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration} />
                <Cursor_Console/>
            </div>
        </div>
    )
}

export default Profil;