import React, { useEffect, useRef, useState } from "react";
import SvgCompiler from "../../Constructors/Svg/SvgCompiler";
import PolylinesWrap from "../../Constructors/Polylines/PolylinesWrap";
import { useSelector } from "react-redux";
import useSVG_Contact_Animation from "../Svg/Contact_Animation/useSVG_Contact_Animation";
import useContact from "./useContact";
import SVG_Contact_Animation from "../Svg/Contact_Animation/Contact_Animation";
import useSVG_Contact_AnimationConfirm from "../Svg/Contact_Animation/useSVG_Contact_AnimationConfirm";
import Contact_AnimationConfirm from "../Svg/Contact_Animation/Contact_AnimationConfirm";

function Contact(){

    const emailSendConfirmation = useSelector(store => store.contact.emailSendConfirmation)
    const [animationEnd, setAnimationEnd] = useState(false)
    const displayRef = useRef()
    const inputNameRef = useRef()
    const inputEmailRef = useRef()
    const inputMessageRef = useRef()
    const inputSubmitRef = useRef()
    

    const {handleSubmit} = useContact()

    const {
        animation_PolylinesValues,
        contactAnimationBoxRef
    } = useSVG_Contact_Animation(displayRef)

    const svgConfiguration_Contact_Animation = {
        svgClass:"contact_animationSvg",
        component:<SVG_Contact_Animation/>,
        elements:animation_PolylinesValues
    }

    const {
        animationConfirm_PolylinesValues,
    } = useSVG_Contact_AnimationConfirm(contactAnimationBoxRef)

    const svgConfiguration_Contact_AnimationConfirm = {
        svgClass:"contact_animationConfirmSvg",
        component:<Contact_AnimationConfirm/>,
        elements:animationConfirm_PolylinesValues
    }

    

    return(
        <div ref={displayRef} className="contactDisplay">
            <div className="formBox">

                <form onSubmit={handleSubmit} action="">
                    <div className="formDiv">
                        <label htmlFor="name">Nom :</label>
                        <div className="formInputBox">
                            <input ref={inputNameRef} className={animationEnd === true ? "inputName inputApparition" : "inputName"} id="name" type="text" />
                            <PolylinesWrap
                                elementToWrapRef={inputNameRef}
                                configuration={{animation:true, animationSpeed:5}}/>
                        </div>
                    </div>

                    <div className="formDiv">
                        <label htmlFor="email">Email :</label>
                        <div className="formInputBox">
                            <input ref={inputEmailRef} className={animationEnd ? "inputEmail inputApparition" : "inputEmail"} id="email" type="email" />
                            <PolylinesWrap
                                elementToWrapRef={inputEmailRef}
                                configuration={{animation:true, animationSpeed:5}}/>
                        </div>

                    </div>

                    <div className="formDiv">
                        <label htmlFor="message">Message :</label>
                        <div className="formInputBox">
                            <textarea ref={inputMessageRef} className={animationEnd ? "inputContent inputApparition" : "inputContent"} id="message" />
                            <PolylinesWrap 
                                elementToWrapRef={inputMessageRef} 
                                configuration={{animation:true, animationSpeed:10, ending:() => setAnimationEnd(true)}}/>
                        </div>

                    </div>
                    
                    <div className="formDiv">
                        <div className="formInputBox">
                            <input ref={inputSubmitRef} className={animationEnd ? "inputSubmit inputApparition" : "inputSubmit"} type="submit" value={"Envoyer"} />
                            <PolylinesWrap 
                             elementToWrapRef={inputSubmitRef} 
                             configuration={{animation:true, animationSpeed:5}}/>
                        </div>

                    </div>

                </form>
            </div>

            <div ref={contactAnimationBoxRef} className="contactAnimationBox">
                {!emailSendConfirmation ? <SvgCompiler svgConfiguration={svgConfiguration_Contact_Animation}/> : <SvgCompiler svgConfiguration={svgConfiguration_Contact_AnimationConfirm}/>}
            </div>
        </div>
    )
}

export default Contact;