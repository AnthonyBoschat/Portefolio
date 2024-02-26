import React, { useEffect, useRef, useState } from "react";

export default function useCircuit(index, svgRef, circuitCenterRef, configuration){

    const animationSpeed = 5
    const polylineRef = useRef()
    const [startAnimation, setStartAnimation] = useState(false)
    const [dashArray, setDashArray] = useState(null)
    const [dashOffset, setDashOffset] = useState(null)
    const [points, setPoints] = useState(null)
    const [pathConfiguration, setPathConfiguration] = useState(null)
    const [svgBounding, setSvgBounding] = useState(null)
    const [circuitBounding, setCircuitBounding] = useState(null)

    
    

    const calculatePoints = (svgRef, circuitCenterRef, configuration) => {
        if(svgRef.current && circuitCenterRef.current){
            const originX = svgBounding.width / 5
            const originY = svgBounding.height / 2
            const goalX = svgBounding.width / 2 - circuitBounding.width / 2 - 6
            const goalY = svgBounding.height / 2

            const PourcentX = goalX - originX
            const PourcentY = originY
            
            const x2 = originX + PourcentX * 0.2
            const y2 = originY

            const x3 = originX + PourcentX * 0.4
            const y3 = originY + PourcentY * 0.07

            const x4 = originX + PourcentX * 0.6
            const y4 = originY + PourcentY * 0.07

            const x5 = originX + PourcentX * 0.8
            const y5 = originY

            setPoints(`${originX},${originY} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${goalX},${goalY}`)
        }
    }

    // Fonction qui gère la position des points selon l'index de l'élément
    const pathRouteur = (index) => {
        const configuration = pathConfiguration[index]
        calculatePoints(svgRef, circuitCenterRef, configuration)
    }

    // On commence par récupérer les dimensions des deux élément
    useEffect(() => {
        if(svgRef.current && circuitCenterRef.current){
            const svgBounding = svgRef.current.getBoundingClientRect()
            const circuitBounding = circuitCenterRef.current.getBoundingClientRect()
            setSvgBounding(svgBounding)
            setCircuitBounding(circuitBounding)
        }
    }, [svgRef, circuitCenterRef])

    // Ensuite, avec les nouvelles dimensions, on recalcul la configuration de chaques chemin
    useEffect(() => {
        if(circuitBounding && svgBounding){
            const newConfiguration = [
                {originX:0, originY:0, goalX:0, goalY:0, PourcentX:0, PourcentY:0, points:null},
            ]
            setPathConfiguration(newConfiguration)
        }
    }, [circuitBounding, svgBounding])


    // On calcul ensuite la position de chaques points selon la configuration
    useEffect(() => {
        if(pathConfiguration){
            pathRouteur(index)
        }
    }, [pathConfiguration])

    

    // Quand les points sont calculer, on calcul automatiquement le dashArray et offset
    useEffect(() => {
        if(polylineRef.current && points) {
            const polylineLength = polylineRef.current.getTotalLength()
            setDashArray(polylineLength)
            if(!startAnimation){setDashOffset(polylineLength)}
            setStartAnimation(true)
        }
    }, [points])
    

    // Quand l'écran se redimensionne, on recalcul le bounding d'origine, et on reprovoque la cascade de useEffect
    useEffect(() => {
        const handleResize = () => {
            const svgBounding = svgRef.current.getBoundingClientRect()
            const circuitBounding = circuitCenterRef.current.getBoundingClientRect()
            setSvgBounding(svgBounding)
            setCircuitBounding(circuitBounding)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    

    // Gère l'animation
    useEffect(() => {
        if(startAnimation){
            const timeoutID = setTimeout(() => {
                let copyOffset = dashOffset
                const intervalID = setInterval(() => {
                    console.log(copyOffset)
                    let offsetEnd = true
                    if(copyOffset >= 0){
                        copyOffset -= configuration.animationSpeed
                        offsetEnd = false
                    }else{
                        copyOffset = 0
                    }

                    if(offsetEnd === true){
                        setDashOffset(copyOffset)
                        clearInterval(intervalID)
                    }else{
                        setDashOffset(copyOffset)
                    }
                }, 10);
                
            }, configuration.timeout);
            return () => clearInterval(timeoutID)
        }
    }, [startAnimation])







    

    
    

    return{
        polylineRef,
        dashArray,
        dashOffset,
        points
    }
}