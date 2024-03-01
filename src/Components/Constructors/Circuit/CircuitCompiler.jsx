import React, { useEffect, useRef, useState } from "react";
import Circuit from "./Circuit"
import useCircuitCompiler from "./useCircuitCompiler";
import { useDispatch, useSelector } from "react-redux";
import { update_cancelAnimation, update_impulseHyperActivation } from "./CircuitSlice";

function CircuitCompiler(){

    const svgRef = useRef()
    const circuitCenterRef = useRef()
    const circleRef = useRef()
    
    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)

    const {squarePoints, circlePositions} = useCircuitCompiler(svgRef, circuitCenterRef, circleRef)

    
    return(
        <>
            <div ref={circuitCenterRef} className="circuitCenter">
                <div ref={circleRef} className={impulseHyperActivation ? "hyperActivationCircle" : "circle"}>

                </div>
            </div>
             

            <svg ref={svgRef} className="svgCircuit">
                {squarePoints.map ( (points, index) => 
                (
                    <Circuit 
                        key={index}
                        points={points}
                        circlePosition={circlePositions[index]}
                    />
                )
                )}
            </svg>
        </>
        
    )
}

export default CircuitCompiler;