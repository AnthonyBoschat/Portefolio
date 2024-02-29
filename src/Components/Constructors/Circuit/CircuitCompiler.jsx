import React, { useEffect, useRef, useState } from "react";
import Circuit from "./Circuit"
import useCircuitCompiler from "./useCircuitCompiler";
import { useDispatch, useSelector } from "react-redux";
import { update_cancelAnimation } from "./CircuitSlice";

function CircuitCompiler(){

    const svgRef = useRef()
    const circuitCenterRef = useRef()
    const dispatch = useDispatch()
    const cancelAnimation = useSelector(store => store.circuit.cancelAnimation)

    const {squarePoints} = useCircuitCompiler(svgRef, circuitCenterRef)
    

    const handleClick = () => {
        console.log("click")
        dispatch(update_cancelAnimation(!cancelAnimation))
    }

    return(
        <>
            <div
                onClick={handleClick}
             ref={circuitCenterRef} className="circuitCenter"></div>

            <svg ref={svgRef} className="svgCircuit">
                {squarePoints.map ( (points, index) => (
                    <Circuit 
                        key={index}
                        points={points}
                    />
                ))}
            </svg>
        </>
        
    )
}

export default CircuitCompiler;