import React, { useEffect, useRef, useState } from "react";
import useCircuit from "./useCircuit";

function Circuit({points}){
    
    const circuitRef = useRef()
    const impulseRef = useRef()

    
    
    const {
        cx, 
        cy, 
        circuitDashArray,
        circuitDashOffset, 
        impulseDashArray,
        impulseDashOffset, 
        circleDashArray, 
        circleDashOffset,
        impulseHyperActivation,
        impulseLength,
        cancelAnimation
    } = useCircuit(circuitRef)

    return(
        <>
            
            <polyline className="circuit"
                strokeDasharray={circuitDashArray}
                strokeDashoffset={circuitDashOffset}
                ref={circuitRef}
                points={points}
            />
            {!cancelAnimation && (
                <polyline className="impulse"
                    stroke={impulseHyperActivation ? "rgb(86, 214, 253)" : "rgb(188, 208, 255)"}
                    strokeWidth={impulseHyperActivation ? 4 : 2}
                    strokeDasharray={`${impulseDashArray * impulseLength}, ${impulseDashArray + (impulseDashArray * impulseLength)}`}
                    strokeDashoffset={impulseDashOffset}
                    ref={impulseRef}
                    points={points}
                />
            ) }
            
            <circle
                strokeDasharray={circleDashArray}
                strokeDashoffset={circleDashOffset}
                r={4}
                cx={cx}
                cy={cy}
            />
        </>
    )
}

export default Circuit;