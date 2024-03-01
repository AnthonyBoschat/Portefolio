import React, { useEffect } from "react";

export default function usePresentation_Projet(presentationBoxRef, imageRef){


    // Gère l'affichage retarder de l'image
    useEffect(() => {
        if(presentationBoxRef.current && imageRef.current){
            setTimeout(() => {
                presentationBoxRef.current.style.display = "flex"
                
            }, 500);
            setTimeout(() => {
                imageRef.current.style.display = "block"
            }, 1000);
        }
    }, [])

    return{
        
    }
}