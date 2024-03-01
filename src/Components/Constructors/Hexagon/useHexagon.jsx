import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_animationHexagonEnd } from "../../Scenes/Nav/NavSlice";

export default function useHexagon(polygonRef){

    const svgRef = useRef()
    const [dashArray, setDashArray] = useState(null)
    const [dashOffset, setDashOffset] = useState(null)

    const [impulseDashOffset, setImpulseDashOffset] = useState(null)
    const [startAnimation, setStartAnimation] = useState(false)
    const dispatch = useDispatch()
    const animationHexagonEnd = useSelector(store => store.nav.animationHexagonEnd)
    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)

    useEffect(() => {
        if(polygonRef.current){
            const polygonLength = polygonRef.current.getTotalLength()
            setDashArray(polygonLength)
            setDashOffset(polygonLength)
            setImpulseDashOffset(polygonLength)
            setStartAnimation(true)
        }
    }, [])


    // La première animation
    const animationSpeed = 20
    useEffect(() => {
        if(startAnimation){
            let copyDashOffset = dashOffset
            const intervalID = setInterval(() => {
                let offsetEnd = true
                if(copyDashOffset >= 0){
                    copyDashOffset -= animationSpeed
                    offsetEnd = false
                }else{
                    copyDashOffset = 0
                }
                setDashOffset(copyDashOffset)
                if(offsetEnd === true){
                    clearInterval(intervalID)
                    dispatch(update_animationHexagonEnd(true))
                }
            }, 10);

            return () => clearInterval(intervalID)
        }
    }, [startAnimation])
    // L'animation de fin
    useEffect(() => {
        if(animationHexagonEnd && svgRef.current){
            svgRef.current.classList.add("animationClass_hexagon_svgFill")
        }
    }, [animationHexagonEnd])


    const impulseAnimationSpeed = 100
    useEffect(() => {
        if(impulseHyperActivation){
            let copyImpulseDashOffset = impulseDashOffset
            const intervalID = setInterval(() => {
                let offsetEnd = true
                if(copyImpulseDashOffset >= 0){
                    copyImpulseDashOffset -= impulseAnimationSpeed
                    offsetEnd = false
                }else{
                    copyImpulseDashOffset = 0
                }
                setImpulseDashOffset(copyImpulseDashOffset)
                if(offsetEnd === true){
                    clearInterval(intervalID)
                }
            }, 10);

            return () => clearInterval(intervalID)
        }
        else if(!impulseHyperActivation && animationHexagonEnd){
            let copyImpulseDashOffset = impulseDashOffset
            const intervalID = setInterval(() => {
                let offsetEnd = true
                if(copyImpulseDashOffset <= dashArray){
                    copyImpulseDashOffset += impulseAnimationSpeed
                    offsetEnd = false
                }else{
                    copyImpulseDashOffset = dashArray
                }
                setImpulseDashOffset(copyImpulseDashOffset)
                if(offsetEnd === true){
                    clearInterval(intervalID)
                }
            }, 10);

            return () => clearInterval(intervalID)
        }
    }, [impulseHyperActivation])

    return{
        svgRef,
        dashOffset,
        dashArray,
        impulseDashOffset
    }
}