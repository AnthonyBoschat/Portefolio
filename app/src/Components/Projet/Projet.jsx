import React, { useRef } from "react";
import useProjet from "./useProjet";

function Projet(){

    const {projetConfiguration, generateProjetButton} = useProjet()

    const projetBoxRef = useRef()

    return(
        <div className="projetDisplay">
            <div ref={projetBoxRef} className="projetBox">
                {projetConfiguration.map(projet => generateProjetButton(projet))}
            </div>
        </div>
    )
}

export default Projet;