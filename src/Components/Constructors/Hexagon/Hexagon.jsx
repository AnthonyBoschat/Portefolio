import React, { useEffect, useRef } from "react";
import useHexagon from "./useHexagon";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";
import { useDispatch, useSelector } from "react-redux";
import { update_impulseHyperActivation } from "../Circuit/CircuitSlice";

function Hexagon({hexagon}){

    const hexagonRef = useRef()
    const polygonRef = useRef()
    const dispatch = useDispatch()
    const navSelected = useSelector(store => store.nav.navSelected)
    const animationHexagonEnd = useSelector(store => store.nav.animationHexagonEnd)


    const {
        dashOffset,
        svgRef,
        dashArray,
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
        <div ref={hexagonRef} onClick={() => hexagon.onClick()} className={hexagon.selected === true ? "hexagon hexagonSelected" : "hexagon"}>
            <svg style={animationHexagonEnd ? null : {fill:"transparent"}} ref={svgRef} className={hexagon.selected === true ? "svgSelected" : null} viewBox="0 0 600 516.8">
                <polygon style={animationHexagonEnd && hexagon.selected ? {fill:"rgb(250, 250, 250)"} : {fill:"transparent"}} ref={polygonRef} strokeDasharray={`${dashArray}px`} strokeDashoffset={`${dashOffset}px`} points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
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