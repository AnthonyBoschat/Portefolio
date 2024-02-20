import React, { useEffect, useRef, useState } from "react";
import SVG_Contact from "../../Constructors/Svg/Contact/Contact";
import SvgCompiler from "../../Constructors/Svg/SvgCompiler";
import useSVG_Contact from "../../Constructors/Svg/Contact/useContact";
import { useSelector } from "react-redux";

function Contact(){
    
    const {
        displayRef,
        inputNameRef,
        inputEmailRef,
        inputMessageRef,
        inputSubmitRef,
        polylinesValues
    } = useSVG_Contact()

    const animationEnd = useSelector(store => store.contact.animationEnd)

    
    const svgConfiguration = {
        svgClass:"contactSvg",
        component:<SVG_Contact/>,
        elements:polylinesValues
    }

    return(
        <div ref={displayRef} className="contactDisplay">
            <div className="formBox">

                <form action="">
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

            <SvgCompiler svgConfiguration={svgConfiguration} />
            
        </div>
    )
}

export default Contact;