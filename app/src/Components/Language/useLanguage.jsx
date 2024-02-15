import React, { useEffect, useRef, useState } from "react";

export default function useLanguage(familly){

    const progressBarRef = useRef()
    const h1Ref = useRef()
    const languageListRef = useRef()

    const [svgPoint, setSvgPoint] = useState(null)



    useEffect(() => {
        if(h1Ref.current && languageListRef.current){
            
            const pointXBase = h1Ref.current.clientWidth
            const languageBoxHeight = languageListRef.current.clientHeight
            const point1 = `${pointXBase + 25},30`
            const point2 = `${pointXBase + 25},50`
            const point3 = `5,50`
            const point4 = `5,50`
            const point5 = `5,${languageBoxHeight  + 80}`
            const point6 = `20,${languageBoxHeight  + 80}`
            const currentUpdate = `${point1} ${point2} ${point3} ${point4} ${point5} ${point6}`
            setSvgPoint(currentUpdate)
        }
    }, [])


    return{
        progressBarRef,
        h1Ref,
        languageListRef,
        svgPoint,
    }
}