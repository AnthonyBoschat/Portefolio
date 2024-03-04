import React, { useEffect, useRef, useState } from "react";
import Projet_Presentation from "../../Presentation/Projet/Presentation";
import useButton_Projet from "./useButton_Projet";
import PolylinesWrap from "../../../Constructors/Polylines/PolylinesWrap";
import { useSelector } from "react-redux";

function Button_Projet({projet, projetConfiguration, setProjetConfiguration}){


    
    const aButtonSelected = projetConfiguration.find(projet => projet.selected === true)
    // Detail
    const buttonRef = useRef()
    const [endAnimation, setEndAnimation] = useState(false)

    const {
        animationStyleClassCenter,
        handleClickProjet,
        presentationBoxRef,
        mouseOn
    } = useButton_Projet(projetConfiguration, setProjetConfiguration, buttonRef)

    
    const {buttonStyle, buttonClassName, projetStyle, projetClassName} = animationStyleClassCenter(aButtonSelected, projet)
    
    return(
        <>
            <button style={buttonStyle} ref={buttonRef} className={!endAnimation ? buttonClassName : `${buttonClassName} animationClass_projetButtonBackgroundAnimation`} onClick={() => handleClickProjet(projet.name)}>
                <span className={!endAnimation ? "projetName" : "projetName animationClass_opacity-in500"}>{projet.name}</span>
                <PolylinesWrap
                    mouseOn={mouseOn}
                    configuration={{
                        
                        animation:true,
                        animationSpeed:30,
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