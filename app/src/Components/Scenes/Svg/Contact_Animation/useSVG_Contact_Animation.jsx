import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_emailSendConfirmation } from "../../Contact/ContactSlice";

export default function useSVG_Contact_Animation(){

    const dispatch = useDispatch()
    const emailSend = useSelector(store => store.contact.emailSend)
    const contactAnimationBoxRef = useRef()
    const polylineRectRef = useRef()
    const animationSpeedIn = 1
    const animationSpeedOut = 2
    

    const [animation_PolylinesValues, setAnimation_PolylinesValues] = useState([
        {points:{A:null,B:null}, baseOffsetA:127, baseOffsetB:42, dashOffsetA:127, dashOffsetB:42} 
    ])

    const calculatePolylinesPoints = (polylinesValuesArray) => {
        const parentBounding = contactAnimationBoxRef.current.getBoundingClientRect()
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
        polylinesValuesArray[0].points.A = `${A},${B} ${C},${D} ${E},${F} ${G},${H}, ${I},${J}`
        polylinesValuesArray[0].points.B = `${K},${L} ${M},${N} ${O},${P}`
        return polylinesValuesArray
    }

    useEffect(() => {
        const copyPolylinesValues = [...animation_PolylinesValues]
        const newPolylinesValues = calculatePolylinesPoints(copyPolylinesValues)
        setAnimation_PolylinesValues(newPolylinesValues)
    }, [])

    useEffect(() => {

        // Animation d'apparition
        if(!emailSend){
            let beginAnimation2 = false
            const intervalID = setInterval(() => {
                const copyPolylinesValues = [...animation_PolylinesValues]
                let offsetEnd = true
                if(copyPolylinesValues[0].dashOffsetA >= animationSpeedIn){
                    copyPolylinesValues[0].dashOffsetA -= animationSpeedIn
                    offsetEnd = false
                }else{
                    copyPolylinesValues[0].dashOffsetA = 0
                    beginAnimation2 = true
                }

                if(beginAnimation2){
                    if(copyPolylinesValues[0].dashOffsetB >= animationSpeedIn){
                        copyPolylinesValues[0].dashOffsetB -= animationSpeedIn
                        offsetEnd = false
                    }else{
                        copyPolylinesValues[0].dashOffsetB = 0
                    }
                }

                if(offsetEnd === true){
                    setAnimation_PolylinesValues(copyPolylinesValues)
                    clearInterval(intervalID)
                }else{
                    setAnimation_PolylinesValues(copyPolylinesValues)
                }
            }, 10);

            return () => clearInterval(intervalID)
        }

        // Animation de disparition
        else if(emailSend){
            console.log("controle")
            let beginAnimation2 = false
            const intervalID = setInterval(() => {
                const copyPolylinesValues = [...animation_PolylinesValues]
                let offsetEnd = true
                if(copyPolylinesValues[0].dashOffsetB < copyPolylinesValues[0].baseOffsetB){
                    copyPolylinesValues[0].dashOffsetB += animationSpeedOut
                    offsetEnd = false
                }else{
                    copyPolylinesValues[0].dashOffsetB = copyPolylinesValues[0].baseOffsetB
                    beginAnimation2 = true
                }

                if(beginAnimation2){
                    if(copyPolylinesValues[0].dashOffsetA < copyPolylinesValues[0].baseOffsetA){
                        copyPolylinesValues[0].dashOffsetA += animationSpeedOut
                        offsetEnd = false
                    }else{
                        copyPolylinesValues[0].dashOffsetA = copyPolylinesValues[0].baseOffsetA
                    }
                }

                if(offsetEnd === true){
                    setAnimation_PolylinesValues(copyPolylinesValues)
                    clearInterval(intervalID)
                    dispatch(update_emailSendConfirmation(true)) //
                }else{
                    setAnimation_PolylinesValues(copyPolylinesValues)
                }
            }, 10);

            return () => clearInterval(intervalID)
        }
    }, [emailSend])


    return{
        contactAnimationBoxRef,
        animation_PolylinesValues,
        polylineRectRef,
    }
}