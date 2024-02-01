import React from "react";
import useProfil from "./useProfil";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";
import Cursor_loading_Animation from "../Cursor/Cursor_Console/Cursor_Console";

function Profil(){


    return(
        <div className="mainCategoryPresentationConsoleBox">
            <div className="pendingSentenceBox">
                <TypingSentenceCompiler sentencesConfiguration={[{
                    timeout:500,
                    sentence:
                    `Dénomination               :  Anthony Boschat
                    Âge                         :  29 ans
                    Zone d'habitat              :  Tours
                    Caractéristique physique    :  1m73, yeux noisette, cheveux court`,
                    speed:2,
                }]} />
                <Cursor_loading_Animation/>
            </div>
        </div>
    )
}

export default Profil;