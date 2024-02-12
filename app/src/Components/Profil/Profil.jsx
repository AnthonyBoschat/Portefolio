import { Page, Document } from "react-pdf";
import React, { useState } from "react";

function Profil(){

    
    const [CVfocus, setCVfocus] = useState(false)
    

    

    return(
        
            <div className="profilOverlay">
                {CVfocus && 
                    <div className="cvFocusOverlay">
                        <div className="cvFocusBox">
                            <img onClick={() => setCVfocus(current => !current)} src="/Ressource/CVimage.png" alt="" />
                        </div>
                    </div>
                }

                <div className="profilBox">
                    <div className="presentation">
                        bonjour
                    </div>
                    <div className="cv">
                        <img onClick={() => setCVfocus(current => !current)} src="/Ressource/CVimage.png" alt="" />
                    </div>
                </div>
            </div>
        
        
    )
}

export default Profil;