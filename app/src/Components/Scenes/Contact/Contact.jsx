import React, { useEffect, useRef, useState } from "react";
import RotationLetter from "../../Constructors/RotationLetter/RotationLetter";
import useContact from "./useContact";

function Contact(){

    const {
        displayRef,
        inputNameRef,
        inputEmailRef,
        inputMessageRef,
        inputSubmitRef,
        polylinesValues
    } = useContact()

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


            <svg>
                {polylinesValues.map(polyline => (
                    <React.Fragment>
                        <polyline className="polylineDisapear" strokeDashoffset={`${polyline.offset}%`} points={polyline.points.A}/>
                        <polyline strokeDashoffset={`${polyline.offset}%`} points={polyline.points.B}/>
                    </React.Fragment>
                ))}
            </svg>
        </div>
    )
}

export default Contact;