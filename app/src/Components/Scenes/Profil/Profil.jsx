
import React from "react";
import useProfil from "./useProfil";
import CVzoomIn from "../CV/ZoomIn";
import CVzoomOut from "../CV/ZoomOut";
import LanguagesCompiler from "../../Constructors/Language/LanguagesCompiler";
import Presentation from "../Presentation/Profil/Presentation";

function Profil(){

    
    const {CVfocus, setCVfocus, languagesConfiguration} = useProfil()

    return(
        
            <div className="profilOverlay">
                {CVfocus && <CVzoomIn setCVfocus={setCVfocus}/>}

                <div className="profilBox">
                    <div className="presentationBox">

                        <Presentation />

                        <CVzoomOut setCVfocus={setCVfocus}/>
                        
                    </div>
                    <div className="languagePresentationBox">
                        <LanguagesCompiler languagesConfiguration={languagesConfiguration} />
                    </div>
                    
                </div>
            </div>
        
        
    )
}

export default Profil;