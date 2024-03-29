import React, { useEffect, useRef, useState } from "react";

export default function useLanguage(familly){

    const h1Ref = useRef()
    const languageListRef = useRef()

    const [svgPoint, setSvgPoint] = useState(null)

    const [circlePointX, setCirclePointX] = useState(null)
    const [circlePointY, setCirclePointY] = useState(null)


    useEffect(() => {
        if(h1Ref.current && languageListRef.current){
            
            const pointXBase = h1Ref.current.clientWidth
            const languageBoxHeight = languageListRef.current.clientHeight
            const point1 = `${pointXBase + 30},30`
            const point2 = `${pointXBase + 30},50`
            const point3 = `5,50`
            const point4 = `5,${languageBoxHeight  + 80}`
            const point5 = `20,${languageBoxHeight  + 80}`
            const currentUpdate = `${point1} ${point2} ${point3} ${point4} ${point5}`
            
            setCirclePointX(pointXBase + 30)
            setCirclePointY(30)
            setSvgPoint(currentUpdate)
        }
    }, [])


    return{
        circlePointX,
        circlePointY,
        h1Ref,
        languageListRef,
        svgPoint,
    }
}