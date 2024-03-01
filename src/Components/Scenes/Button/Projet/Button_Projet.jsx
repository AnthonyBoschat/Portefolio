import React, { useEffect, useRef, useState } from "react";
import Projet_Presentation from "../../Presentation/Projet/Presentation";
import useButton_Projet from "./useButton_Projet";
import PolylinesWrap from "../../../Constructors/Polylines/PolylinesWrap";

function Button_Projet({projet, projetConfiguration, setProjetConfiguration}){


    // Detail
    const buttonRef = useRef()
    const [endAnimation, setEndAnimation] = useState(false)

    const {
        animationStyleClassCenter,
        handleClickProjet,
        presentationBoxRef,
        mouseOn
    } = useButton_Projet(projetConfiguration, setProjetConfiguration, buttonRef)

    const aButtonSelected = projetConfiguration.find(projet => projet.selected === true)
    const {buttonStyle, buttonClassName, projetStyle, projetClassName} = animationStyleClassCenter(aButtonSelected, projet)
    
    return(
        <>
            <button ref={buttonRef} style={buttonStyle} className={!endAnimation ? buttonClassName : `${buttonClassName} animationClass_projetButtonBackgroundAnimation`} onClick={() => handleClickProjet(projet.name)}>
                <span className={!endAnimation ? "projetName" : "projetName animationClass_opacity-in500"}>{projet.name}</span>
                <PolylinesWrap
                    mouseOn={mouseOn}
                    configuration={{
                        
                        animation:true,
                        animationSpeed:25,
                        ending: () => setEndAnimation(true)
                    }}
                    elementToWrapRef={buttonRef}
                />
            </button>
            <div ref={projet.selected ? presentationBoxRef : null} style={projetStyle} className={`projetPresentation ${projetClassName}`}>
                { projet.selected ? <Projet_Presentation projet={projet}/> : null}
            </div>
        </>
    )
}

export default Button_Projet;