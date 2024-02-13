import React, { useRef } from "react";

function CVzoomIn({setCVfocus}){


    const boxRef = useRef()
    const height = window.innerHeight / 14

    const handleClickUnfocusCV = (event) => {
        if(event.target === event.currentTarget){
            setCVfocus(current => !current)
        }
    }

    return(
        <div onClick={handleClickUnfocusCV} className="cvFocusOverlay">
            <div ref={boxRef} className="cvFocusBox">
                <iframe src={`/Ressource/CVpdf.pdf#zoom=${height}`} alt="" />
            </div>
        </div>
    )
}

export default CVzoomIn;