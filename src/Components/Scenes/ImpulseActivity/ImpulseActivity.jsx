import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function ImpulseActivity(){

    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)
    const cvOnload = useSelector(store => store.profil.cvOnload)

    return(
        <div className={cvOnload ? "impulseBackgroundShadow overlayCV" :"impulseBackgroundShadow"}>
           <div className={impulseHyperActivation ? "impulseActivationBackgroundImage impulseBackgroundImage" : "impulseBackgroundImage"}>
            </div> 
        </div>
    )
}

export default ImpulseActivity;