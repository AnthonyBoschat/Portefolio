
import React from "react";
import useProfil from "./useProfil";
import CVzoomIn from "../CV/ZoomIn";
import CVzoomOut from "../CV/ZoomOut";
import ProfilDescription from "../ProfilDescription/ProfilDescription";
import LanguageLevel from "../LanguageLevel/LanguageLevel";
import LanguageLevelCompiler from "../LanguageLevel/LanguageLevelCompiler";

function Profil(){

    
    const {CVfocus, setCVfocus} = useProfil()
    const FamillyLevelConfiguration = [
        {name:"Front-end",
        languages:[
            {name:"HTML", level:0},
            {name:"CSS", level:0},
            {name:"Javascript", level:0},
        ]},
        {name:"Back-end",
        languages:[
            {name:"PHP", level:0},
            {name:"MySQL", level:0},
        ]},
        {name:"Framework",
        languages:[
            {name:"React", level:0},
        ]},
    ]

    return(
        
            <div className="profilOverlay">
                {CVfocus && <CVzoomIn setCVfocus={setCVfocus}/>}

                <div className="profilBox">
                    <div className="presentationBox">

                        <ProfilDescription />

                        <CVzoomOut setCVfocus={setCVfocus}/>

                        
                    </div>
                    <div className="languagePresentationBox">
                        <LanguageLevelCompiler />
                    </div>
                    
                </div>
            </div>
        
        
    )
}

export default Profil;