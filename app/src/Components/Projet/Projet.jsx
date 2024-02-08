import React, { useRef } from "react";
import useProjet from "./useProjet";

function Projet(){

    const {projetConfiguration, generateProjetButton} = useProjet()

    

    return(
        <div className="projetDisplay">
            <div className="projetBox">
                {projetConfiguration.map(projet => generateProjetButton(projet))}
            </div>
        </div>
    )
}

export default Projet;