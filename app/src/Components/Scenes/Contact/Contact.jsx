import React, { useEffect, useRef, useState } from "react";
import PolylinesWrap from "../../Constructors/Polylines/PolylinesWrap";
import useContact from "./useContact";
import Mail_SVG from "../Svg/Mail/Mail";

function Contact(){

    
    const [animationEnd, setAnimationEnd] = useState(false)
    const displayRef = useRef()
    const inputNameRef = useRef()
    const inputEmailRef = useRef()
    const inputMessageRef = useRef()
    const inputSubmitRef = useRef()

    const {handleSubmit} = useContact()

    

    return(
        <div className="contactDisplay">
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

            <div ref={displayRef} className="contactAnimationBox">
                <Mail_SVG configuration={{displayRef:displayRef}}/>
            </div>
        </div>
    )
}

export default Contact;