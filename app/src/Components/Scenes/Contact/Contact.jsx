import React, { useEffect, useRef, useState } from "react";
import Contact_Formulaire from "../Svg/Contact_Formulaire/Contact_Formulaire";
import SvgCompiler from "../../Constructors/Svg/SvgCompiler";
import useSVG_Contact_Formulaire from "../Svg/Contact_Formulaire/useSVG_Contact_Formulaire";
import { useSelector } from "react-redux";
import useSVG_Contact_Animation from "../Svg/Contact_Animation/useSVG_Contact_Animation";
import useContact from "./useContact";

function Contact(){

    const animationEnd = useSelector(store => store.contact.animationEnd)
    const displayRef = useRef()

    const {handleSubmit} = useContact()
    
    const {
        inputNameRef,
        inputEmailRef,
        inputMessageRef,
        inputSubmitRef,
        formulaire_PolylinesValues
    } = useSVG_Contact_Formulaire(displayRef)

    const svgConfiguration_Contact_Formulaire = {
        svgClass:"contactSvg",
        component:<Contact_Formulaire/>,
        elements:formulaire_PolylinesValues
    }

    const {
        contactAnimationBoxRef
    } = useSVG_Contact_Animation(displayRef)

    const svgConfiguration_Contact_Animation = {
        svgClass:null,
        component:null,
        elements:null
    }

    

    return(
        <div ref={displayRef} className="contactDisplay">
            <div className="formBox">

                <form onSubmit={handleSubmit} action="">
                    <div className="formDiv">
                        <label htmlFor="name">Nom :</label>
                        <input ref={inputNameRef} className={animationEnd === true ? "inputName inputApparition" : "inputName"} id="name" type="text" />
                    </div>

                    <div className="formDiv">
                        <label htmlFor="email">Email :</label>
                        <input ref={inputEmailRef} className={animationEnd ? "inputEmail inputApparition" : "inputEmail"} id="email" type="email" />
                    </div>

                    <div className="formDiv">
                        <label htmlFor="message">Message :</label>
                        <textarea ref={inputMessageRef} className={animationEnd ? "inputContent inputApparition" : "inputContent"} id="message" />
                    </div>
                    
                    <div className="formDiv">
                        <input ref={inputSubmitRef} className={animationEnd ? "inputSubmit inputApparition" : "inputSubmit"} type="submit" value={"Envoyer"} />
                    </div>

                </form>
            </div>

            <div ref={contactAnimationBoxRef} className="contactAnimationBox">
                
            </div>

            <SvgCompiler svgConfiguration={svgConfiguration_Contact_Formulaire} />
            
        </div>
    )
}

export default Contact;