import React, { useRef, useState } from "react";
import Loading_CV from "../Loading/CV";
import { useDispatch } from "react-redux";
import { update_cvOnload } from "../Profil/ProfilSlice";

function CVzoomIn(){


    const boxRef = useRef()
    const height = window.innerHeight / 14
    const overlayRef = useRef()
    const [pdfOnload, setPdfOnload] = useState(true)
    const dispatch = useDispatch()

    const handleClickUnfocusCV = (event) => {
        if(event.target === event.currentTarget){
            dispatch(update_cvOnload(false))
        }
    }

    const waitLoadPDF = () => {
        setTimeout(() => {
            setPdfOnload(false)
        }, 1000);
    }

    return(
        <div ref={overlayRef} onClick={handleClickUnfocusCV} className="cvFocusOverlay">
            {pdfOnload && (<Loading_CV/>)}
            <div style={{display: pdfOnload ? "none" : "flex"}} ref={boxRef} className="cvFocusBox">
                <iframe onLoad={waitLoadPDF} src={`/Ressource/CVpdf.pdf#zoom=${height}`} alt="" />
            </div>
        </div>
    )
}

export default CVzoomIn;