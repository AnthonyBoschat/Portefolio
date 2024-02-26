import React, { useRef } from "react";
import useCircuit from "./useCircuit";

function Circuit({configuration, index, svgRef, circuitCenterRef}){

    
    const {
        polylineRef,
        dashArray,
        dashOffset,
        points
    } = useCircuit(index, svgRef, circuitCenterRef, configuration)
    

    return(
        <>
            <polyline
                ref={polylineRef}
                points={points}
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
            />
        </>
    )
}

export default Circuit;