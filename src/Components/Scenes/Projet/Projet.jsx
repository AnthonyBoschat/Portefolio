import React, { useRef } from "react";
import useProjet from "./useProjet";
import Button_Projet from "../Button/Projet/Button_Projet";

function Projet(){

    const {projetConfiguration, setProjetConfiguration} = useProjet()
    const displayRef = useRef() // Je déclare la reference

    return(
        <div ref={displayRef} className="projetDisplay">
            <div className="projetBox">
                {projetConfiguration.map((projet, index) => 
                    <Button_Projet 
                        setProjetConfiguration={setProjetConfiguration}
                        projetConfiguration={projetConfiguration}
                        projet={projet}
                        key={index}
                    />
                )}
            </div>
        </div>
    )
}

export default Projet;