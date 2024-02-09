import React, { useEffect, useRef, useState } from "react";
import useContact from "./useContact";

function Contact(){

    const {sentence} = useContact()

    return(
        // <div className="contactDisplay">
        //     <div className="contactBox">
        //         {sentence}
        //     </div>
        // </div>





        <div className="testDisplay">
            <div className="testBox">
                <div className="test">
                    <div className="testContainer">
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>E</span>
                        <span>F</span>
                        <span>G</span>
                        <span>H</span>
                        <span>I</span>
                        <span>J</span>
                    </div>
                    <div className="testContainer">
                        <span>n</span>
                        <span>b</span>
                        <span>c</span>
                        <span>d</span>
                        <span>e</span>
                        <span>f</span>
                        <span>g</span>
                        <span>h</span>
                        <span>i</span>
                        <span>j</span>
                    </div>
                    <div className="testContainer tletter">
                        <span>t</span>
                        <span>b</span>
                        <span>c</span>
                        <span>d</span>
                        <span>e</span>
                        <span>f</span>
                        <span>g</span>
                        <span>h</span>
                        <span>i</span>
                        <span>j</span>
                    </div>
                    <div className="testContainer">
                        <span>h</span>
                        <span>b</span>
                        <span>c</span>
                        <span>d</span>
                        <span>e</span>
                        <span>f</span>
                        <span>g</span>
                        <span>h</span>
                        <span>i</span>
                        <span>j</span>
                    </div>
                    <div className="testContainer">
                        <span>o</span>
                        <span>b</span>
                        <span>c</span>
                        <span>d</span>
                        <span>e</span>
                        <span>f</span>
                        <span>g</span>
                        <span>h</span>
                        <span>i</span>
                        <span>j</span>
                    </div>
                    <div className="testContainer">
                        <span>n</span>
                        <span>b</span>
                        <span>c</span>
                        <span>d</span>
                        <span>e</span>
                        <span>f</span>
                        <span>g</span>
                        <span>h</span>
                        <span>i</span>
                        <span>j</span>
                    </div>
                    <div className="testContainer">
                        <span>y</span>
                        <span>b</span>
                        <span>c</span>
                        <span>d</span>
                        <span>e</span>
                        <span>f</span>
                        <span>g</span>
                        <span>h</span>
                        <span>i</span>
                        <span>j</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;