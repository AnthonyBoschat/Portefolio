import React from "react";
import Projet_Presentation from "../../Presentation/Projet/Presentation";
import useButton_Projet from "./useProjet";

function Button_Projet({projet, projetConfiguration, setProjetConfiguration}){

    const {animationStyleClassCenter, handleClickProjet, presentationBoxRef} = useButton_Projet(projetConfiguration, setProjetConfiguration)

    const aButtonSelected = projetConfiguration.find(projet => projet.selected === true)
    const {buttonStyle, buttonClassName, projetStyle, projetClassName} = animationStyleClassCenter(aButtonSelected, projet)


    return(
        <>
            <button style={buttonStyle} className={buttonClassName} onClick={() => handleClickProjet(projet.name)}>
                {projet.name}
            </button>
            <div ref={projet.selected ? presentationBoxRef : null} style={projetStyle} className={`projetPresentation ${projetClassName}`}>
                { projet.selected ? <Projet_Presentation projet={projet}/> : null}
            </div>
        </>
    )
}

export default Button_Projet;