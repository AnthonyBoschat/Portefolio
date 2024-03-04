import React, { useEffect, useRef, useState } from "react";
import usePolylinesWrap from "./usePolylinesWrap";
import { useSelector } from "react-redux";

function PolylinesWrap({elementToWrapRef, configuration, mouseOn}){

    
    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)
    
    const {polylinesPoints, dashArray, dashOffset, impulseDashOffset, impulseLength} = usePolylinesWrap(elementToWrapRef, configuration, mouseOn)

    return(
        <svg className="svg_polylinesConstructor">
            
            
            <polyline
                strokeDasharray={`${dashArray}px`}
                strokeDashoffset={!configuration.animation ? "0px" : `${dashOffset}px`}
                points={polylinesPoints}
            />
            {/* {mouseOn && (
                <polyline
                    className="impulse"
                    strokeDasharray={`${dashArray * impulseLength}px,${dashArray}px`}
                    strokeDashoffset={`${impulseDashOffset}px`}
                    points={polylinesPoints}
                />
            )}
            {impulseHyperActivation && (
                <polyline
                    className="impulseHyperActivation"
                    strokeDasharray={`${dashArray}px`}
                    strokeDashoffset={`0px`}
                    points={polylinesPoints}
                />
            )} */}
            
        </svg>
    )
}

export default PolylinesWrap;