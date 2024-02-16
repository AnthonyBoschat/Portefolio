import React, { useEffect, useRef, useState } from "react";
import RotationLetter from "../../Constructors/RotationLetter/RotationLetter";

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