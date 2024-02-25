import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_emailSendConfirmation } from "../../Contact/ContactSlice";

export default function useSVG_Contact_Animation(displayRef){

    const dispatch = useDispatch()
    const emailSend = useSelector(store => store.contact.emailSend)
    const animationSpeedIn = 1
    const animationSpeedOut = 2

    const [animation_PolylinesValues, setAnimation_PolylinesValues] = useState(
        {points:{A:null,B:null}, baseOffsetA:127, baseOffsetB:41, dashOffsetA:127, dashOffsetB:42} 
    )

    const calculatePolylinesPoints = (polylinesValuesArray) => {
        const parentBounding = displayRef.current.getBoundingClientRect()
        const A = parentBounding.width / 4
        const B = parentBounding.height / 5
        const C = parentBounding.width - (parentBounding.width / 4)
        const D = B
        const E = C
        const F = B + B
        const G = A
        const H = F
        const I = A
        const J = B

        const K = A
        const L = B + 30

        const M = parentBounding.width / 2
        const N = B + 60

        const O = C
        const P = B+30
        polylinesValuesArray.points.A = `${A},${B} ${C},${D} ${E},${F} ${G},${H}, ${I},${J}`
        polylinesValuesArray.points.B = `${K},${L} ${M},${N} ${O},${P}`
        return polylinesValuesArray
    }

    useEffect(() => {
        const copyPolylinesValues = {...animation_PolylinesValues}
        const newPolylinesValues = calculatePolylinesPoints(copyPolylinesValues)
        setAnimation_PolylinesValues(newPolylinesValues)
    }, [])

    useEffect(() => {

        // Animation
        let beginAnimation2 = false
        const intervalID = setInterval(() => {
            setAnimation_PolylinesValues(current => {
                let newDashOffsetA = current.dashOffsetA
                let newDashOffsetB = current.dashOffsetB
                let offsetEnd = true
    
                if(!emailSend){
                    if(!beginAnimation2){
                        if (newDashOffsetA >= animationSpeedIn) {
                            newDashOffsetA -= animationSpeedIn
                            offsetEnd = false
                        } else {
                            newDashOffsetA = 0
                            beginAnimation2 = true
                        }
                    }
                    

                    if (beginAnimation2) {
                        if (newDashOffsetB >= animationSpeedIn) {
                            newDashOffsetB -= animationSpeedIn
                            offsetEnd = false
                        } else {
                            newDashOffsetB = 0
                        }
                    }
                    if (offsetEnd === true) {
                        clearInterval(intervalID)
                    }
                }
                else if(emailSend){
                    // console.log("activation")
                    // console.log("controle => ", offsetEnd)
                    // console.log("dashOffsetB => ", newDashOffsetB)

                    if(!beginAnimation2){
                        if(newDashOffsetB <= current.baseOffsetB) {
                            newDashOffsetB += animationSpeedOut
                            offsetEnd = false
                        } else{
                            newDashOffsetB = current.baseOffsetB
                            console.log(newDashOffsetB)
                            beginAnimation2 = true
                        }
                    }
                    
        
                    if (beginAnimation2) {
                        if (newDashOffsetA <= current.baseOffsetA) {
                            newDashOffsetA += animationSpeedOut
                            offsetEnd = false
                        } else {
                            newDashOffsetA = current.baseOffsetA
                        }
                    }
                    if (offsetEnd === true) {
                        clearInterval(intervalID)
                        dispatch(update_emailSendConfirmation(true))
                    }
                }
    
                // Création d'un nouvel objet pour l'état sans muter l'objet actuel
                return {
                    ...current,
                    dashOffsetA: newDashOffsetA,
                    dashOffsetB: newDashOffsetB,
                };
            });
        }, 10);

        return () => clearInterval(intervalID)
        

        // else if (emailSend){
        //     let beginAnimation2 = false // ?
        //     const intervalID = setInterval(() => {
        //         setAnimation_PolylinesValues(current => {
        //             let newDashOffsetA = current.dashOffsetA
        //             let newDashOffsetB = current.dashOffsetB
        //             let offsetEnd = true
        //             let beginAnimation2 = newDashOffsetA <= 0
        
        //             if (newDashOffsetB >= animationSpeedOut) {
        //                 newDashOffsetB += animationSpeedOut
        //                 offsetEnd = false
        //             } else {
        //                 newDashOffsetB = current.baseOffsetB
        //                 beginAnimation2 = true
        //             }
        
        //             if (beginAnimation2) {
        //                 if (newDashOffsetA >= animationSpeedOut) {
        //                     newDashOffsetA += animationSpeedOut
        //                     offsetEnd = false
        //                 } else {
        //                     newDashOffsetA = current.baseOffsetA
        //                 }
        //             }
        
        //             if (offsetEnd === true) {
        //                 clearInterval(intervalID)
        //                 dispatch(update_emailSendConfirmation(true))
        //             }
        
        //             // Création d'un nouvel objet pour l'état sans muter l'objet actuel
        //             return {
        //                 ...current,
        //                 dashOffsetA: newDashOffsetA,
        //                 dashOffsetB: newDashOffsetB,
        //             };
        //         });
        //     }, 50);

        //     return () => clearInterval(intervalID)
        // }
    }, [emailSend])


    return{
        animation_PolylinesValues,
    }
}