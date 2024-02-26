import React, { useEffect, useRef, useState } from "react";
import Circuit from "./Circuit"

function CircuitCompiler(){

    const svgRef = useRef()
    const circuitCenterRef = useRef()

    const [polylinesPoints, setPolylinesPoints] = useState([
        {timeout:0, animationSpeed:5},
    ])

    return(
        <>
            <div ref={circuitCenterRef} className="circuitCenter">

            </div>
            <svg ref={svgRef} className="svgCircuit">
                {polylinesPoints.map((configuration, index) => (
                <Circuit
                    configuration={configuration}
                    index={index}
                    svgRef={svgRef}
                    circuitCenterRef={circuitCenterRef}
                />))}
            </svg>
        </>
        
    )
}

export default CircuitCompiler;