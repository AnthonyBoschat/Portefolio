import React, { useEffect, useRef } from "react";
import useHexagon from "./useHexagon";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";
import { useDispatch } from "react-redux";
import { update_impulseHyperActivation } from "../Circuit/CircuitSlice";

function Hexagon({hexagon}){
    const hexagonRef = useRef()
    const dispatch = useDispatch()

    const {
        dashOffset,
        svgRef
    } = useHexagon()

    useEffect(() => {
        if(hexagonRef.current){
            const handleMouseEnter = () => {dispatch(update_impulseHyperActivation(true))}
            const handleMouseLeave = () => {dispatch(update_impulseHyperActivation(false))}
            hexagonRef.current.addEventListener("mouseenter", handleMouseEnter)
            hexagonRef.current.addEventListener("mouseleave", handleMouseLeave)

            return () => {
                hexagonRef.current.removeEventListener("mouseenter", handleMouseEnter)
                hexagonRef.current.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    }, [hexagonRef])

    return(
        <div ref={hexagonRef} onClick={() => hexagon.onClick && hexagon.onClick()} className="hexagon">
            <svg ref={svgRef} className={hexagon.selected === true ? "hexagonSelected" : null} viewBox="0 0 600 516.8">
                <polygon strokeDashoffset={`${dashOffset}%`} className="navPolygon" points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
            
            <div className="hexagonSentenceBox">
                <div className="hexagonName">
                    <TypingSentenceCompiler sentencesConfiguration={hexagon.sentencesConfiguration} />
                </div>
            </div>
        </div>
    )
}

export default Hexagon;