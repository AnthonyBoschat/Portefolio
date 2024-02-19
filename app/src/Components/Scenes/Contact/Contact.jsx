import React, { useEffect, useRef, useState } from "react";
import RotationLetter from "../../Constructors/RotationLetter/RotationLetter";
import Svg from "../Svg/Svg";
import useSvg from "../Svg/useSvg";

function Contact(){

    const {
        displayRef,
        inputNameRef,
        inputEmailRef,
        inputMessageRef,
        inputSubmitRef,
        polylinesValues
    } = useSvg()
    

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

            <Svg polylinesValues={polylinesValues} />
            
        </div>
    )
}

export default Contact;