import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_impulseHyperActivation } from "./CircuitSlice";

export default function useCircuit(polylineRef){

    const cancelAnimation = useSelector(store => store.circuit.cancelAnimation)
    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)

    const [circuitDashArray, setCircuitDashArray] = useState(null) // DashArray du circuit
    const [circuitDashOffset, setCircuitDashOffset] = useState(null) // DashOffset du circuit

    const [impulseDashArray, setImpulseDashArray] = useState(null) // DashArray du impulse
    const [impulseDashOffset, setImpulseDashOffset] = useState(null) // DashOffset du impulse

    const [startAnimation, setStartAnimation] = useState(false)
    const [startRandomAnimation, setStartRandomAnimation] = useState(false)
    const [circleDashArray, setCircleDashArray] = useState(2 * Math.PI * 5)
    const [circleDashOffset, setCircleDashOffset] = useState(2 * Math.PI * 5)
    const [fillCircle, setFillCircle] = useState(false)

    const impulseLength = impulseHyperActivation ? 0.20 : 0.02
    
    

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
            // console.log("recalcule")
            setStartAnimation(true)
        }
    }, [])
    

    // Gère la première animation
    const animationSpeedCircuit = 3
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
                            copyCircleDashOffset -= animationSpeedCircuit / 3
                            animationEnd = false
                        }else{
                            copyCircleDashOffset = 0
                            beginAnimation2 = true
                            animationEnd = false
                            setFillCircle(true)
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



    
    
    // Gère l'animation des impulses

    let animation_timeoutID = null
    let animation_intervalID = null

    const resetImpulsePosition = () => {
        setImpulseDashOffset(circuitDashArray * impulseLength)
        // setImpulseDashOffset(impulseDashArray * impulseLength)
        clearInterval(animation_intervalID);
        clearTimeout(animation_timeoutID);
    }

    useEffect(() => {
        
        if(startRandomAnimation){
            // Fonction pour démarrer l'animation lente
            const startAnimation = () => {
                resetImpulsePosition();
                const animationSpeed = impulseHyperActivation ? circuitDashArray / 30 : -4
                const timeout = impulseHyperActivation ? 5 : Math.floor(Math.random() * (10000 - 500) + 500)
                const randomDirection = Math.floor(Math.random() * 2)

                let copyImpulseDashOffset = impulseDashOffset * impulseLength;
                animation_timeoutID = setTimeout(() => {
                    animation_intervalID = setInterval(() => {
                        
                        // console.log(log);
                        
                        let animationEnd = true
                        if(!impulseHyperActivation){
                            if(randomDirection === 0){
                                if(copyImpulseDashOffset >= 0 - impulseDashArray - (impulseDashArray * (impulseLength))){
                                    copyImpulseDashOffset += animationSpeed
                                    animationEnd = false
                                }
                            }
                            else if(randomDirection === 1){
                                if(copyImpulseDashOffset <= impulseDashArray + (impulseDashArray * (impulseLength * 3))){
                                    copyImpulseDashOffset += 0 - animationSpeed
                                    animationEnd = false
                                }
                            }
                            
                        }

                        else if(impulseHyperActivation){
                            if(copyImpulseDashOffset <= impulseDashArray + (impulseDashArray * impulseLength * 3)){
                                copyImpulseDashOffset += animationSpeed
                                animationEnd = false
                            }
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
        circuitDashArray,
        circuitDashOffset,
        impulseDashArray,
        impulseDashOffset,
        circleDashArray,
        circleDashOffset,
        impulseHyperActivation,
        impulseLength,
        cancelAnimation,
        fillCircle,
        startRandomAnimation
    }
}