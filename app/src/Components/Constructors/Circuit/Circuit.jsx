import React, { useEffect, useRef, useState } from "react";
import useCircuit from "./useCircuit";

function Circuit({points}){
    
    const polylineRef = useRef()
    
    const {cx, cy, dashArray, dashOffset, circleDashArray, circleDashOffset} = useCircuit(polylineRef)

    return(
        <>
            
            <polyline
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                ref={polylineRef}
                points={points}
            />
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