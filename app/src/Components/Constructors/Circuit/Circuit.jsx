import React, { useEffect, useRef, useState } from "react";
import useCircuit from "./useCircuit";

function Circuit({points}){
    
    const polylineRef = useRef()
    
    const {cx, cy, polylineDashArray, polylineDashOffset, circleDashArray, circleDashOffset} = useCircuit(polylineRef)

    return(
        <>
            
            <polyline
                strokeDasharray={polylineDashArray}
                strokeDashoffset={polylineDashOffset}
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