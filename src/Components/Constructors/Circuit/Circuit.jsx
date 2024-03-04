import React, { useEffect, useRef, useState } from "react";
import useCircuit from "./useCircuit";

function Circuit({points, circlePosition}){
    
    const circuitRef = useRef()
    const impulseRef = useRef()

    
    
    const {
        circuitDashArray,
        circuitDashOffset, 
        impulseDashArray,
        impulseDashOffset, 
        circleDashArray, 
        circleDashOffset,
        impulseHyperActivation,
        impulseLength,
        cancelAnimation,
        fillCircle,
        startRandomAnimation
    } = useCircuit(circuitRef)

    return(
        <>
            
            <polyline className="circuit"
                strokeDasharray={circuitDashArray}
                strokeDashoffset={circuitDashOffset}
                ref={circuitRef}
                points={points}
            />
            {(!cancelAnimation && startRandomAnimation) && (
                <polyline className="impulse"
                    stroke={impulseHyperActivation ? "white" : "black"}
                    strokeWidth={impulseHyperActivation ? 5 : 3}
                    strokeDasharray={`${impulseDashArray * impulseLength}, ${impulseDashArray + (impulseDashArray * (impulseLength * 2))}`}
                    strokeDashoffset={impulseDashOffset}
                    ref={impulseRef}
                    points={points}
                />
            ) }
            <circle
        
                fill={fillCircle ? "rgb(49, 49, 49)" : "transparent"}
                strokeDasharray={circleDashArray}
                strokeDashoffset={circleDashOffset}
                r={4}
                cx={circlePosition.cx}
                cy={circlePosition.cy}
            />
        </>
    )
}

export default Circuit;