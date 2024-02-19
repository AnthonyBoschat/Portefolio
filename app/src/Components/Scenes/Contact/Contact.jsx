import React, { useEffect, useRef, useState } from "react";
import SVG_Contact from "../../Constructors/Svg/Contact/Contact";
import SvgCompiler from "../../Constructors/Svg/SvgCompiler";
import useSVG_Contact from "../../Constructors/Svg/Contact/useContact";

function Contact(){
    
    const {
        displayRef,
        inputNameRef,
        inputEmailRef,
        inputMessageRef,
        inputSubmitRef,
        polylinesValues
    } = useSVG_Contact()

    
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
                        <input ref={inputNameRef} className="inputName" id="name" type="text" />
                    </div>

                    <div className="formDiv">
                        <label htmlFor="email">Email :</label>
                        <input ref={inputEmailRef} className="inputEmail" id="email" type="email" />
                    </div>

                    <div className="formDiv">
                        <label htmlFor="message">Message :</label>
                        <textarea ref={inputMessageRef} className="inputContent" id="message" />
                    </div>
                    
                    <div className="formDiv">
                        <input ref={inputSubmitRef} className="inputSubmit" type="submit" value={"Envoyer"} />
                    </div>

                </form>
            </div>

            <SvgCompiler svgConfiguration={svgConfiguration} />
            
        </div>
    )
}

export default Contact;