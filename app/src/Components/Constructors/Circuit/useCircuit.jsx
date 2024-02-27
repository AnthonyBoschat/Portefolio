import React, { useEffect, useRef, useState } from "react";

export default function useCircuit(polylineRef){

    
    const [cx, setcX] = useState(null) // position X du cercle
    const [cy, setcY] = useState(null) // position Y du cercle
    const [dashArray, setDashArray] = useState(null)
    const [dashOffset, setDashOffset] = useState(null)
    const [startAnimation, setStartAnimation] = useState(false)
    const [startRandomAnimation, setStartRandomAnimation] = useState(false)
    const [circleDashArray, setCircleDashArray] = useState(2 * Math.PI * 5)
    const [circleDashOffset, setCircleDashOffset] = useState(2 * Math.PI * 5)
    
    

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
            setDashArray(polylineLength)
            if(!startAnimation){setDashOffset(polylineLength)}
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


    const animationSpeed = 2
    const timeOutRandom = (Math.random() * 2) * 500

    // Gère la première animation
    useEffect(() => {
        if(startAnimation){
            let copyOffset = dashOffset
            let copyCircleDashOffset = circleDashOffset
            let beginAnimation2 = false
            const timeoutID = setTimeout(() => {
                const intervalID = setInterval(() => {
                    let animationEnd = true
                    
                    if(!beginAnimation2){
                        if(copyCircleDashOffset >= 0){
                            copyCircleDashOffset -= animationSpeed
                            animationEnd = false
                        }else{
                            copyCircleDashOffset = 0
                            beginAnimation2 = true
                            animationEnd = false
                        }
                    }
                    
                    else if(beginAnimation2){
                        if(copyOffset >= 0){
                            copyOffset -= animationSpeed
                            animationEnd = false
                        }else{
                            copyOffset = 0
                        }
                    }

                    setDashOffset(copyOffset)
                    setCircleDashOffset(copyCircleDashOffset)
                    
                    if(animationEnd === true){
                        clearInterval(intervalID)
                        setStartRandomAnimation(true)
                    }
                }, 10);
                
            }, timeOutRandom);
            return () => clearInterval(timeoutID)
        }
    }, [startAnimation]) 



    // const animationRandomSpeed = 4
    // const randomIntervalRandomAnimation = (Math.floor(Math.random() * (10-2) + 1)) * 1000
    // // Gère la deuxième animation periodique
    // useEffect(() => {
    //     if(startRandomAnimation){

    //         let copyPolylineDashOffset = dashOffset
            
    //         const intervalID1 = setInterval(() => {
    //             const intervalID2 = setInterval(() => {
    //                 let animationEnd = true

    //                 if(copyPolylineDashOffset >= dashOffset - (dashArray * 2)){
    //                     copyPolylineDashOffset -= animationRandomSpeed
    //                     animationEnd = false
    //                 }else{
    //                     copyPolylineDashOffset = dashArray - dashArray
    //                 }

    //                 if(animationEnd){
    //                     setDashOffset(copyPolylineDashOffset)
    //                     clearInterval(intervalID2)
    //                 }else{
    //                     setDashOffset(copyPolylineDashOffset)
    //                 }
    //             }, 10);
    //         }, randomIntervalRandomAnimation);

    //         return () => clearInterval(intervalID1)
    //     }
    // }, [startRandomAnimation])
       

    return{
        cx,
        cy,
        dashArray,
        dashOffset,
        circleDashArray,
        circleDashOffset
    }
}