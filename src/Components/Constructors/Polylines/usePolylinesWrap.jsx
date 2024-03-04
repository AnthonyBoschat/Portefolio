import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function usePolylinesWrap(elementToWrapRef, configuration, mouseOn){


    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)
    const impulseLength = 0.30
    const [polylinesPoints, setPolylinesPoints] = useState(null)
    const [dashArray, setDashArray] = useState(null)
    const [dashOffset, setDashOffset] = useState(null)
    const [animationBegin, setAnimationBegin] = useState(false)
    const [impulseDashOffset, setImpulseDashOffset] = useState(null)

    // Calcule la positions des points
    const calculPolylinesPoints = (elementToWrapRef) => {

        if(elementToWrapRef.current){
            const elementToWrapBounding = elementToWrapRef.current.getBoundingClientRect()
            // Calcul des positions
            setPolylinesPoints(current => {
                const A = 0
                const B = 0
                const C = Math.floor(elementToWrapBounding.width)
                const D = B
                const E = C
                const F = Math.floor(elementToWrapBounding.height)
                const G = A
                const H = F
                const I = A
                const J = B
                const points = `${A},${B} ${C},${D} ${E},${F} ${G},${H} ${I},${J}`
                return points
            })
        }
    }

    // Calcul le dashArray et offset
    const calculArrayOffset = (elementToWrapRef) => {
        const elementToWrapBounding = elementToWrapRef.current.getBoundingClientRect()
        setDashArray((elementToWrapBounding.width + elementToWrapBounding.height) * 2)
        setDashOffset((elementToWrapBounding.width + elementToWrapBounding.height) * 2)
        setImpulseDashOffset(((elementToWrapBounding.width + elementToWrapBounding.height) * 2) * impulseLength)
    }

    // On déclenche un premier calcul de position et de dashArray et offset
    useEffect(() => {
        if(elementToWrapRef.current){
            calculPolylinesPoints(elementToWrapRef)
            calculArrayOffset(elementToWrapRef)
            if(configuration.animation){
                setAnimationBegin(true)
            }
        }
        
    }, [elementToWrapRef])

    // On déclenche un recalcule de position si resize de la page
    useEffect(() => {
        if(elementToWrapRef.current){
            const handleResize = () => calculPolylinesPoints(elementToWrapRef)

            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
        }
    }, [elementToWrapRef])

    // Si l'animation est spécifier, on le déclenche avec la vitesse indiquer
    useEffect(() => {
        if(configuration.animation && animationBegin){
            let copyOffset = dashOffset
            const intervalID = setInterval(() => {
                let offsetEnd = true
                if(copyOffset >= configuration.animationSpeed){
                    copyOffset -= configuration.animationSpeed
                    offsetEnd = false
                }else{
                    copyOffset = 0
                }

                setDashOffset(copyOffset)
                if(offsetEnd === true){
                    clearInterval(intervalID)
                    if(configuration.ending){configuration.ending()}
                }
            }, 10);

            return () => clearInterval(intervalID)
        }
    }, [animationBegin])



    let animation_timeoutID = null
    let animation_intervalID = null

    const resetImpulsePosition = () => {
        setImpulseDashOffset(dashArray * impulseLength)
    }

    useEffect(() => {
        if(mouseOn){
            resetImpulsePosition()
            let copyImpulseOffset = impulseDashOffset
            const animationSpeed = 20
            animation_intervalID = setInterval(() => {
                copyImpulseOffset -= animationSpeed
                setImpulseDashOffset(copyImpulseOffset)
            }, 10);
        }

        return () => {
            clearInterval(animation_intervalID)
        }
    }, [mouseOn])


    const impulseAnimationSpeed = 500
    useEffect(() => {
        if(impulseHyperActivation){
            // resetImpulsePosition()
            let copyImpulseOffset = dashArray
            const animationSpeed = impulseAnimationSpeed
            animation_intervalID = setInterval(() => {

                let animationEnd = true
                if(copyImpulseOffset >= 0  - animationSpeed){
                    copyImpulseOffset -= animationSpeed
                    animationEnd = false
                }else{
                    copyImpulseOffset = 0
                }
                setImpulseDashOffset(copyImpulseOffset)
                if(animationEnd){
                    clearInterval(animation_intervalID)
                    setImpulseDashOffset(0)
                }
            }, 10);
        }

        return () => {
            clearInterval(animation_intervalID)
        }
    }, [impulseHyperActivation])

    

    return{
        impulseLength,
        polylinesPoints,
        dashArray,
        dashOffset,
        impulseDashOffset
    }
}