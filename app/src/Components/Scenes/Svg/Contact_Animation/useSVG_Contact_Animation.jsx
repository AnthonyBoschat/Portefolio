import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function useSVG_Contact_Animation(displayRef){

    const contactAnimationBoxRef = useRef()
    const emailSend = useSelector(store => store.contact.emailSend)

    const [animation_PolylinesValues, setAnimation_PolylinesValues] = useState([
        {points:{A:null,B:null}, dashOffsetA:127, dashOffsetB:42} 
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
        if(displayRef.current){
            const copyPolylinesValues = [...animation_PolylinesValues]
            const newPolylinesValues = calculatePolylinesPoints(copyPolylinesValues)
            setAnimation_PolylinesValues(newPolylinesValues)
        }
    }, [])

    useEffect(() => {
        if(!emailSend){
            let beginAnimation2 = false
            const intervalID = setInterval(() => {
                console.log("HERE")
                const copyPolylinesValues = [...animation_PolylinesValues]
                console.log(copyPolylinesValues)
                let offsetEnd = true
                if(copyPolylinesValues[0].dashOffsetA >= 1){
                    copyPolylinesValues[0].dashOffsetA -= 1
                    offsetEnd = false
                }else{
                    copyPolylinesValues[0].dashOffsetA = 0
                    beginAnimation2 = true
                }

                if(beginAnimation2){
                    if(copyPolylinesValues[0].dashOffsetB >= 1){
                        copyPolylinesValues[0].dashOffsetB -= 1
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
        else if(emailSend){
            console.log("emailEnovyer")
        }
    }, [emailSend])


    return{
        contactAnimationBoxRef,
        animation_PolylinesValues
    }
}