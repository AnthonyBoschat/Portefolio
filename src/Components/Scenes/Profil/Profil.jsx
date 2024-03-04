
import React from "react";
import useProfil from "./useProfil";
import CVzoomIn from "../CV/ZoomIn";
import CVzoomOut from "../CV/ZoomOut";
import LanguagesCompiler from "../../Constructors/Language/LanguagesCompiler";
import Presentation from "../Presentation/Profil/Presentation";
import { useSelector } from "react-redux";

function Profil(){

    
    const {languagesConfiguration} = useProfil()
    const cvOnload = useSelector(store => store.profil.cvOnload)
    return(
        
            <div className="profilOverlay">
                {cvOnload && <CVzoomIn/>}

                <div className="profilBox">
                    <div className="presentationBox">

                        <Presentation />

                        <CVzoomOut/>
                        
                    </div>
                    <div className="languagePresentationBox">
                        <LanguagesCompiler languagesConfiguration={languagesConfiguration} />
                    </div>
                    
                </div>
            </div>
        
        
    )
}

export default Profil;