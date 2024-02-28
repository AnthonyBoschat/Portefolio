import React, { useEffect, useRef, useState } from "react";

export default function useCircuit(polylineRef){

    
    const [cx, setcX] = useState(null) // position X du cercle
    const [cy, setcY] = useState(null) // position Y du cercle
    const [polylineDashArray, setPolylineDashArray] = useState(null)
    const [polylineDashOffset, setPolylineDashOffset] = useState(null)
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
            setPolylineDashArray(polylineLength)
            if(!startAnimation){setPolylineDashOffset(polylineLength)}
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


    

    // Gère la première animation
    const animationSpeed = 3
    const timeOutRandom = (Math.random() * 2) * 500
    
    useEffect(() => {
        if(startAnimation){
            let copyOffset = polylineDashOffset
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

                    setPolylineDashOffset(copyOffset)
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



    
    // Gère la deuxième animation periodique
    const animationRandomSpeed = 8
    const randomIntervalRandomAnimation = (Math.floor(Math.random() * (10-4) + 4)) * 1000

    useEffect(() => {
        if(startRandomAnimation){

            let copyPolylineDashOffset = polylineDashOffset
            
            const intervalID1 = setInterval(() => {
                const intervalID2 = setInterval(() => {
                    let animationEnd = true

                    if(copyPolylineDashOffset >= polylineDashOffset - (polylineDashArray * 2)){
                        copyPolylineDashOffset -= animationRandomSpeed
                        animationEnd = false
                    }else{
                        copyPolylineDashOffset = polylineDashArray - polylineDashArray
                    }


                    setPolylineDashOffset(copyPolylineDashOffset)
                    if(animationEnd){clearInterval(intervalID2)}


                }, 10);
            }, randomIntervalRandomAnimation);

            return () => clearInterval(intervalID1)
        }
    }, [startRandomAnimation])
       

    return{
        cx,
        cy,
        polylineDashArray,
        polylineDashOffset,
        circleDashArray,
        circleDashOffset
    }
}