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
        polylinesValues,
        offsetAnimationEnd
    } = useContact()

    return(
        <div ref={displayRef} className="contactDisplay">
            <div className="formBox">

                <form action="">

                    <div className="formDiv">
                        <label htmlFor="name">Nom :</label>
                        {/* <input style={offsetAnimationEnd ? {outline:"0.5px solid rgba(255, 255, 255, 0.8)"} : null} ref={inputNameRef} className="inputName" id="name" type="text" /> */}
                        <input ref={inputNameRef} className="inputName" id="name" type="text" />

                    </div>

                    <div className="formDiv">
                        <label htmlFor="email">Email :</label>
                        {/* <input style={offsetAnimationEnd ? {outline:"0.5px solid rgba(255, 255, 255, 0.8)"} : null} ref={inputEmailRef} className="inputEmail" id="email" type="email" /> */}
                        <input ref={inputEmailRef} className="inputEmail" id="email" type="email" />

                    </div>

                    <div className="formDiv">
                        <label htmlFor="message">Message :</label>
                        {/* <textarea style={offsetAnimationEnd ? {outline:"0.5px solid rgba(255, 255, 255, 0.8)"} : null} ref={inputMessageRef} className="inputContent" id="message" /> */}
                        <textarea ref={inputMessageRef} className="inputContent" id="message" />
                        
                    </div>
                    
                    <div className="formDiv">
                        {/* <input style={offsetAnimationEnd ? {outline:"0.5px solid rgba(255, 255, 255, 0.8)"} : null} ref={inputSubmitRef} className="inputSubmit" type="submit" value={"Envoyer"} /> */}
                        <input ref={inputSubmitRef} className="inputSubmit" type="submit" value={"Envoyer"} />

                    </div>

                </form>
            </div>


            {/* {!offsetAnimationEnd && (
                <svg>
                    {polylinesValues.map(polyline => (
                        <React.Fragment>
                            <polyline className="polylineDisapear" strokeDashoffset={`${polyline.offset}%`} points={polyline.points.A}/>
                            <polyline strokeDashoffset={`${polyline.offset}%`} points={polyline.points.B}/>
                        </React.Fragment>
                    ))}
                </svg>
            )} */}

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