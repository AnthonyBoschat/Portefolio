
import React from "react";
import useProfil from "./useProfil";
import CVzoomIn from "../CV/ZoomIn";
import CVzoomOut from "../CV/ZoomOut";

function Profil(){

    
    const {CVfocus, setCVfocus} = useProfil()
    

    return(
        
            <div className="profilOverlay">
                {CVfocus && <CVzoomIn setCVfocus={setCVfocus}/>}

                <div className="profilBox">
                    <div className="presentationBox">
                        <div className="shortDescriptionBox">
                                <span className="sentence">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio maiores quos, adipisci fugit reprehenderit sed culpa velit! Error, facere.
                                <span className="fade"></span>
                                </span>
                            </div>
                        <div className="languagePresentationBox">

                        </div>
                    </div>
                    <CVzoomOut setCVfocus={setCVfocus}/>
                </div>
            </div>
        
        
    )
}

export default Profil;