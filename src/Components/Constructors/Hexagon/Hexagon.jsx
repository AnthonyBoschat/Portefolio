import React, { useEffect, useRef } from "react";
import useHexagon from "./useHexagon";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";
import { useDispatch, useSelector } from "react-redux";
import { update_impulseHyperActivation } from "../Circuit/CircuitSlice";

function Hexagon({hexagon}){

    const hexagonRef = useRef()
    const polygonRef = useRef()
    const dispatch = useDispatch()
    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)
    const navSelected = useSelector(store => store.nav.navSelected)

    const {
        dashOffset,
        svgRef,
        dashArray,
        impulseDashOffset
    } = useHexagon(polygonRef)

    useEffect(() => {
        if(hexagonRef.current){
            
            const handleMouseEnter = () => {
                if(navSelected !== "/"){
                    if(navSelected === hexagon.destination){
                        dispatch(update_impulseHyperActivation(true))
                    }
                }
                else{
                    dispatch(update_impulseHyperActivation(true))
                }
                
            }
            const handleMouseLeave = () => {dispatch(update_impulseHyperActivation(false))}


            hexagonRef.current.addEventListener("mouseenter", handleMouseEnter)
            hexagonRef.current.addEventListener("mouseleave", handleMouseLeave)

            return () => {
                hexagonRef.current.removeEventListener("mouseenter", handleMouseEnter)
                hexagonRef.current.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    }, [hexagonRef, navSelected])

    return(
        <div ref={hexagonRef} onClick={() => hexagon.onClick && hexagon.onClick()} className={hexagon.selected === true ? "hexagon hexagonSelected" : "hexagon"}>
            <svg ref={svgRef} className={hexagon.selected === true ? "svgSelected" : null} viewBox="0 0 600 516.8">
                <polygon ref={polygonRef} strokeDasharray={`${dashArray}px`} strokeDashoffset={`${dashOffset}px`} points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
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