import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { update_animationHexagonEnd } from "../../Scenes/Nav/NavSlice";

export default function useHexagon(polygonRef){

    const svgRef = useRef()
    const [dashArray, setDashArray] = useState(null)
    const [dashOffset, setDashOffset] = useState(null)

    const [startAnimation, setStartAnimation] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if(polygonRef.current){
            const polygonLength = polygonRef.current.getTotalLength()
            setDashArray(polygonLength)
            setDashOffset(polygonLength)
            setStartAnimation(true)
        }
    }, [polygonRef])


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

    return{
        svgRef,
        dashOffset,
        dashArray,
    }
}