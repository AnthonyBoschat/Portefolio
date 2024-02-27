import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_animationHexagonEnd } from "../../Scenes/Nav/NavSlice";

export default function useHexagon(){

    const svgRef = useRef()
    const [dashOffset, setDashOffset] = useState(320)
    const dispatch = useDispatch()
    const animationHexagonEnd = useSelector(store => store.nav.animationHexagonEnd)

    useEffect(() => {
        let copyDashOffset = dashOffset

        const intervalID = setInterval(() => {
            let offsetEnd = true
            if(copyDashOffset >= 4){
                copyDashOffset -= 4
                offsetEnd = false
            }else{
                copyDashOffset = 0
            }
            

            if(offsetEnd === true){
                setDashOffset(copyDashOffset)
                clearInterval(intervalID)
                dispatch(update_animationHexagonEnd(true))
            }else{
                setDashOffset(copyDashOffset)
            }
        }, 10);

        return () => clearInterval(intervalID)
    }, [])

    useEffect(() => {
        if(animationHexagonEnd && svgRef.current){
            svgRef.current.classList.add("animationClass_hexagon_svgFill")
        }
    }, [animationHexagonEnd])

    return{
        svgRef,
        dashOffset
    }
}