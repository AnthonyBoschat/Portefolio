import React, { useEffect } from "react";

export default function usePresentation_Projet(){


    const handleClick = (link) => {
        window.open(link)
    }

    return{
        handleClick
    }
}