import React from "react";
import useProfil from "./useProfil";

function Profil(){

    const {
        sentenceProfilBase
    } = useProfil()

    return(
        <div className="mainCategoryPresentationConsoleBox">
            <div className="pendingSentenceBox">{sentenceProfilBase}</div>
        </div>
    )
}

export default Profil;