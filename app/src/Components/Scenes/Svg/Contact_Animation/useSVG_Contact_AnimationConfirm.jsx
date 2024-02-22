import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useSVG_Contact_AnimationConfirm(contactAnimationBoxRef){

    const emailSendConfirmation = useSelector(store => store.contact.emailSendConfirmation)
    const animationCircleSpeed = 2
    const animationCheckSpeed = 1
    const [animationConfirm_PolylinesValues, setAnimationConfirm_PolylinesValues] = useState([
        {polyline:{points:null, dashOffset:26}, circle:{cx:null, cy:null, r:null, baseOffset:110, dashOffset:110}} 
    ])

    const calculatePositionCircle = (copyPolylinesValues) => {
        const parentBounding = contactAnimationBoxRef.current.getBoundingClientRect()

        // Calcul pour le cercle
        copyPolylinesValues[0].circle.cx = parentBounding.width / 2
        copyPolylinesValues[0].circle.cy = parentBounding.height / 3
        copyPolylinesValues[0].circle.r = parentBounding.width / 4.5

        // Calcul pour le polyline
        const A = parentBounding.width / 2 - 30
        const B = parentBounding.height / 3.1
        const C = parentBounding.width / 2
        const D = parentBounding.height / 2.6
        const E = parentBounding.width / 2 + 35
        const F = B - 20

        copyPolylinesValues[0].polyline.points = `${A},${B} ${C},${D} ${E},${F}`

        return copyPolylinesValues
    }

    useEffect(() => {
        const copyPolylinesValues = [...animationConfirm_PolylinesValues]
        const newPolylinesValues = calculatePositionCircle(copyPolylinesValues)
        setAnimationConfirm_PolylinesValues(newPolylinesValues)
    }, [])

    useEffect(() => {
        if(emailSendConfirmation){
            let beginAnimation2 = false
            const intervalID = setInterval(() => {
                const copyPolylinesValues = [...animationConfirm_PolylinesValues]
                let offsetEnd = true
                if(copyPolylinesValues[0].circle.dashOffset >= animationCircleSpeed){
                    copyPolylinesValues[0].circle.dashOffset -= animationCircleSpeed
                    offsetEnd = false
                }else{
                    copyPolylinesValues[0].circle.dashOffset = 0
                    beginAnimation2 = true
                }


                if(beginAnimation2){
                    if(copyPolylinesValues[0].polyline.dashOffset >= animationCheckSpeed){
                        copyPolylinesValues[0].polyline.dashOffset -= animationCheckSpeed
                        offsetEnd = false
                    }else{
                        copyPolylinesValues[0].polyline.dashOffset = 0
                    }
                }

                if(offsetEnd === true){
                    setAnimationConfirm_PolylinesValues(copyPolylinesValues)
                    clearInterval(intervalID)
                }else{
                    setAnimationConfirm_PolylinesValues(copyPolylinesValues)
                }
            }, 10);

            return () => clearInterval(intervalID)
        }
    }, [emailSendConfirmation])


    return{
        animationConfirm_PolylinesValues
    }
}