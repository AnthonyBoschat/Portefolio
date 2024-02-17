import React, { useRef, useState } from "react";
import Loading_CV from "../Loading/CV";

function CVzoomIn({setCVfocus}){


    const boxRef = useRef()
    const height = window.innerHeight / 14
    const overlayRef = useRef()
    const [pdfOnload, setPdfOnload] = useState(true)

    const handleClickUnfocusCV = (event) => {
        if(event.target === event.currentTarget){
            if(boxRef.current){
                boxRef.current.classList.add("opacity-out300")
                setTimeout(() => {
                    overlayRef.current.classList.add("opacity-out300")
                    setTimeout(() => {
                        setCVfocus(current => !current)
                    }, 300);
                }, 150);
            }
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