import React from "react";

function CVzoomOut({setCVfocus}){


    return(
        <div className="cvUnfocus">
            <img onClick={() => setCVfocus(current => !current)} src="/Ressource/CVimage.png" alt="" />
        </div>
    )
}

export default CVzoomOut;