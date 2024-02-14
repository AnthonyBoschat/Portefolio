import React, { useEffect, useRef, useState } from "react";
import useContact from "./useContact";
import RotationLetter from "../RotationLetter/RotationLetter";

function Contact(){

    return(


        <div className="testDisplay">
            <div className="testBox">
                <div className="test">
                    <RotationLetter rotationConfiguration={{sentence:"Anthony"}}/>
                </div>
            </div>
        </div> 
    )
}

export default Contact;