
import React from "react";
import useProfil from "./useProfil";
import CVzoomIn from "../CV/ZoomIn";
import CVzoomOut from "../CV/ZoomOut";
import ProfilDescription from "../ProfilDescription/ProfilDescription";
import LanguagesCompiler from "../Language/LanguagesCompiler";

function Profil(){

    
    const {CVfocus, setCVfocus} = useProfil()

    return(
        
            <div className="profilOverlay">
                {CVfocus && <CVzoomIn setCVfocus={setCVfocus}/>}

                <div className="profilBox">
                    <div className="presentationBox">

                        <ProfilDescription />

                        <CVzoomOut setCVfocus={setCVfocus}/>

                        
                    </div>
                    <div className="languagePresentationBox">
                        <LanguagesCompiler />
                    </div>
                    
                </div>
            </div>
        
        
    )
}

export default Profil;