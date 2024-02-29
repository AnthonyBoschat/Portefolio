import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_impulseHyperActivation } from "./CircuitSlice";

export default function useCircuit(polylineRef){

    const cancelAnimation = useSelector(store => store.circuit.cancelAnimation)
    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)

    const [cx, setcX] = useState(null) // position X du cercle
    const [cy, setcY] = useState(null) // position Y du cercle

    const [circuitDashArray, setCircuitDashArray] = useState(null) // DashArray du circuit
    const [circuitDashOffset, setCircuitDashOffset] = useState(null) // DashOffset du circuit

    const [impulseDashArray, setImpulseDashArray] = useState(null) // DashArray du impulse
    const [impulseDashOffset, setImpulseDashOffset] = useState(null) // DashOffset du impulse

    const [startAnimation, setStartAnimation] = useState(false)
    const [startRandomAnimation, setStartRandomAnimation] = useState(false)
    const [circleDashArray, setCircleDashArray] = useState(2 * Math.PI * 5)
    const [circleDashOffset, setCircleDashOffset] = useState(2 * Math.PI * 5)

    const impulseLength = impulseHyperActivation ? 0.20 : 0.05
    
    

    const calculatecirclePosition = (polylineRef) => {
        const points = polylineRef.current.getAttribute("points").split(" ")
        const firstPoint = points[0].split(",")
        setcX(firstPoint[0])
        setcY(firstPoint[1])
    }
    

    // Quand le polyline est afficher, on calcul automatiquement osn dashArray et Offset
    useEffect(() => {
        if(polylineRef.current) {
            const polylineLength = polylineRef.current.getTotalLength()
            setCircuitDashArray(polylineLength)
            setImpulseDashArray(polylineLength)
            if(!startAnimation){
                setCircuitDashOffset(polylineLength)
                setImpulseDashOffset(polylineLength * impulseLength)
            }

            setStartAnimation(true)
        }
    }, [])


    // Quand le composant est monter, on Trouve la position X et Y pour le cercle à partir du premier point du polyline
    useEffect(() => {
        calculatecirclePosition(polylineRef)
    }, [])

    // Gère le repositionnement des cercle quand l'écran se resize
    useEffect(() => {
        const handleResize = () => calculatecirclePosition(polylineRef)

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])


    

    // Gère la première animation
    const animationSpeedCircuit = 5
    const randomTimeoutCircuitAnimation = (Math.random() * 2) * 500
    useEffect(() => {
        if(startAnimation){
            let copyCircuitDashOffset = circuitDashOffset
            let copyCircleDashOffset = circleDashOffset
            let beginAnimation2 = false
            const timeoutID = setTimeout(() => {
                const intervalID = setInterval(() => {
                    let animationEnd = true
                    
                    if(!beginAnimation2){
                        if(copyCircleDashOffset >= 0){
                            copyCircleDashOffset -= animationSpeedCircuit
                            animationEnd = false
                        }else{
                            copyCircleDashOffset = 0
                            beginAnimation2 = true
                            animationEnd = false
                        }
                    }
                    
                    else if(beginAnimation2){
                        if(copyCircuitDashOffset >= 0){
                            copyCircuitDashOffset -= animationSpeedCircuit
                            animationEnd = false
                        }else{
                            copyCircuitDashOffset = 0
                        }
                    }

                    setCircuitDashOffset(copyCircuitDashOffset)
                    setCircleDashOffset(copyCircleDashOffset)
                    
                    if(animationEnd === true){
                        clearInterval(intervalID)
                        setStartRandomAnimation(true)
                    }
                }, 10);
                
            }, randomTimeoutCircuitAnimation);
            return () => clearInterval(timeoutID)
        }
    }, [startAnimation]) 



    
    
    let animation_timeoutID = null
    let animation_intervalID = null
    
    // Gère l'animation des impulses
    const resetImpulsePosition = () => {
        setImpulseDashOffset(impulseDashArray * impulseLength)
    }


    useEffect(() => {
        
        if(startRandomAnimation){
            // Fonction pour démarrer l'animation lente
            const startAnimation = () => {
                resetImpulsePosition();
                const animationSpeed = impulseHyperActivation ? (0 - circuitDashArray) / 30 : -3
                const timeout = impulseHyperActivation ? 20 : Math.floor(Math.random() * (10000 - 500) + 500)
                const log = impulseHyperActivation ? "fast" : "slow"

                let copyImpulseDashOffset = impulseDashOffset * impulseLength;
                animation_timeoutID = setTimeout(() => {
                    animation_intervalID = setInterval(() => {
                        
                        // console.log(log);
                        
                        let animationEnd = true
                        if(copyImpulseDashOffset >= 0 - circuitDashArray ){
                            copyImpulseDashOffset -= animationSpeed
                            animationEnd = false
                        }
                        setImpulseDashOffset(copyImpulseDashOffset)
                        if(animationEnd){
                            clearInterval(animation_intervalID)
                            startAnimation()
                        }
                        
                    }, 10);
                }, timeout);
            };

            startAnimation();

        }
        
    

        
    
        return () => {
            clearInterval(animation_intervalID);
            clearTimeout(animation_timeoutID);
        };
    }, [startRandomAnimation, impulseHyperActivation]); 

    // Quand le circuit est cancal par le changement d'onglet
    const cancelAnimationSpeedCircuit = 40
    const cancelAnimationSpeedCircle = 2
    const cancelAnimationTimeOutRandom = (Math.random()) * 50
    useEffect(() => {
        if(cancelAnimation){
            setStartRandomAnimation(false)
            let copyCircuitDashOffset = circuitDashOffset
            let copyCircleDashOffset = circleDashOffset
            let beginAnimation2 = false
            const timeoutID = setTimeout(() => {
                const intervalID = setInterval(() => {
                    let animationEnd = true

                    if(!beginAnimation2){
                        if(copyCircuitDashOffset < circuitDashArray){
                            copyCircuitDashOffset += cancelAnimationSpeedCircuit
                            animationEnd = false
                        }else{
                            copyCircuitDashOffset = circuitDashArray
                            animationEnd = false
                            beginAnimation2 = true
                        }
                    }
                    
                    else if(beginAnimation2){
                        if(copyCircleDashOffset < circleDashArray){
                            
                            copyCircleDashOffset += cancelAnimationSpeedCircle
                            animationEnd = false
                        }else{
                            copyCircleDashOffset = circleDashArray
                        }
                    }

                    setCircuitDashOffset(copyCircuitDashOffset)
                    setCircleDashOffset(copyCircleDashOffset)
                    
                    if(animationEnd === true){
                        clearInterval(intervalID)
                        
                    }
                }, 10);
                
            }, cancelAnimationTimeOutRandom);
            return () => clearInterval(timeoutID)
        }
    }, [cancelAnimation])
       

    return{
        cx,
        cy,
        circuitDashArray,
        circuitDashOffset,
        impulseDashArray,
        impulseDashOffset,
        circleDashArray,
        circleDashOffset,
        impulseHyperActivation,
        impulseLength,
        cancelAnimation
    }
}