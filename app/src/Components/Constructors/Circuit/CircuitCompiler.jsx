import React, { useEffect, useRef, useState } from "react";
import Circuit from "./Circuit"
import useCircuitCompiler from "./useCircuitCompiler";

function CircuitCompiler(){

    const svgRef = useRef()
    const circuitCenterRef = useRef()
    

    const {squarePoints} = useCircuitCompiler(svgRef, circuitCenterRef)
    

    return(
        <>
            <div ref={circuitCenterRef} className="circuitCenter"></div>

            <svg ref={svgRef} className="svgCircuit">
                {squarePoints.map ( points => (
                    <Circuit 
                        points={points}
                    />
                ))}
            </svg>
        </>
        
    )
}

export default CircuitCompiler;