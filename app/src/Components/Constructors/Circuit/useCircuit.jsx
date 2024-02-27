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
    const [squarePoints, setSquarePoints] = useState(null)


    // On commence par récupérer les dimensions des deux élément circuit et svg
    useEffect(() => {
        if(svgRef.current && circuitCenterRef.current){
            const svgBounding = svgRef.current.getBoundingClientRect()
            const circuitBounding = circuitCenterRef.current.getBoundingClientRect()
            setSvgBounding(svgBounding)
            setCircuitBounding(circuitBounding)
        }
    }, [svgRef, circuitCenterRef])


    // Ensuite, avec les dimensions, on trouve la position des 36 points

    useEffect(() => {
        if(circuitBounding && svgBounding){
            const squareWidth = circuitBounding.width // On trouve la longueur du carré
            const squarePointStep = circuitBounding.width / 10 // On le divise par 9
            const squareHeight = circuitBounding.top + circuitBounding.width
            const topLeft = svgBounding.width / 2 - circuitBounding.width / 2 - 3 // On trouve la position haute gauche du carré
            const bottomRight = svgBounding.width / 2 + circuitBounding.width / 2 - 3 // On trouve la position bas droite du carré
            const spaceX = svgBounding.height - circuitBounding.height
            const spaceY = svgBounding.width - circuitBounding.width

            const squarePoints = [] // On initialise un tableau vide qu'on va remplir de la position de tout les points
            for(let i = 0; i<4; i++){
                switch(i){
                    case 0:
                        for(let a = 1; a<10; a++){
                            let newPoint = `${topLeft + (a * squarePointStep)},${topLeft - spaceY} ${topLeft + (a * squarePointStep)},${topLeft} `
                            squarePoints.push(newPoint)
                        }
                        continue
                    case 1:
                        for(let a = 1; a<10; a++){
                            let newPoint = `${topLeft},${topLeft  + (a * squarePointStep)} `
                            squarePoints.push(newPoint)
                        }
                        continue
                    case 2:
                        for(let a = 1; a<10; a++){
                            let newPoint = `${bottomRight - (a * squarePointStep)},${bottomRight} `
                            squarePoints.push(newPoint)
                        }
                        continue
                    case 3:
                        for(let a = 1; a<10; a++){
                            let newPoint = `${bottomRight},${bottomRight - (a * squarePointStep)} `
                            squarePoints.push(newPoint)
                        }
                        continue
                }
            }
            console.log(squarePoints)

        }
    }, [circuitBounding, svgBounding])




    
    

    // const calculatePoints = (svgRef, circuitCenterRef, configuration) => {
        // if(svgRef.current && circuitCenterRef.current){
        //     const originX = svgBounding.width / 5
        //     const originY = svgBounding.height / 2
        //     const goalX = svgBounding.width / 2 - circuitBounding.width / 2 - 6
        //     const goalY = svgBounding.height / 2

        //     const PourcentX = goalX - originX
        //     const PourcentY = originY
            
        //     const x2 = originX + PourcentX * 0.2
        //     const y2 = originY

        //     const x3 = originX + PourcentX * 0.4
        //     const y3 = originY + PourcentY * 0.07

        //     const x4 = originX + PourcentX * 0.6
        //     const y4 = originY + PourcentY * 0.07

        //     const x5 = originX + PourcentX * 0.8
        //     const y5 = originY

        //     setPoints(`${originX},${originY} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${goalX},${goalY}`)
        // }
        // let newPoints = ""
        // for(let i = 0; i<configuration.points.length; i++){
        //     newPoints += `${configuration.points[i].x},${configuration.points[i].y} `
        // }
        // setPoints(newPoints)
    // }

    // Fonction qui gère la position des points selon l'index de l'élément
    // const pathRouteur = (index) => {
    //     const configuration = pathConfiguration[index]
    //     calculatePoints(svgRef, circuitCenterRef, configuration)
    // }

    // On commence par récupérer les dimensions des deux élément
    // useEffect(() => {
    //     if(svgRef.current && circuitCenterRef.current){
    //         const svgBounding = svgRef.current.getBoundingClientRect()
    //         const circuitBounding = circuitCenterRef.current.getBoundingClientRect()
    //         setSvgBounding(svgBounding)
    //         setCircuitBounding(circuitBounding)
    //     }
    // }, [svgRef, circuitCenterRef])

    // Ensuite, avec les nouvelles dimensions, on recalcul la configuration de chaques chemin

    // useEffect(() => {
    //     if(circuitBounding && svgBounding){


    //         // const squarePoints = {
    //         //     left_50X:svgBounding.width / 2 - circuitBounding.width / 2 - 6,
    //         //     left_50Y:svgBounding.height / 2
    //         // }

    //         // const newConfiguration = [
    //         //     {
    //         //         points:[
    //         //             {x:svgBounding.width / 5, y:svgBounding.height / 2},
    //         //             {x:(svgBounding.width / 5) + (squarePoints.left_50X - svgBounding.width / 5) * 0.2, y:svgBounding.height / 2},
    //         //             {x:(svgBounding.width / 5) + (squarePoints.left_50X - svgBounding.width / 5) * 0.4, y:svgBounding.height / 2 + squarePoints.left_50Y * 0.07},
    //         //             {x:(svgBounding.width / 5) + (squarePoints.left_50X - svgBounding.width / 5) * 0.6, y:svgBounding.height / 2 + squarePoints.left_50Y * 0.07},
    //         //             {x:(svgBounding.width / 5) + (squarePoints.left_50X - svgBounding.width / 5) * 0.8, y:svgBounding.height / 2},
    //         //             {x:squarePoints.left_50X, y:squarePoints.left_middleY},
    //         //         ]
    //         //     },
    //         // ]
    //         // setPathConfiguration(newConfiguration)
    //     }
    // }, [circuitBounding, svgBounding])


    // On calcul ensuite la position de chaques points selon la configuration
    // useEffect(() => {
    //     if(pathConfiguration){
    //         pathRouteur(index)
    //     }
    // }, [pathConfiguration])

    

    // Quand les points sont calculer, on calcul automatiquement le dashArray et offset
    // useEffect(() => {
    //     if(polylineRef.current && points) {
    //         const polylineLength = polylineRef.current.getTotalLength()
    //         setDashArray(polylineLength)
    //         if(!startAnimation){setDashOffset(polylineLength)}
    //         setStartAnimation(true)
    //     }
    // }, [points])
    

    // Quand l'écran se redimensionne, on recalcul le bounding d'origine, et on reprovoque la cascade de useEffect
    // useEffect(() => {
    //     const handleResize = () => {
    //         const svgBounding = svgRef.current.getBoundingClientRect()
    //         const circuitBounding = circuitCenterRef.current.getBoundingClientRect()
    //         setSvgBounding(svgBounding)
    //         setCircuitBounding(circuitBounding)
    //     }
    //     window.addEventListener("resize", handleResize)
    //     return () => window.removeEventListener("resize", handleResize)
    // }, [])

    

    // Gère l'animation
    // useEffect(() => {
    //     if(startAnimation){
    //         const timeoutID = setTimeout(() => {
    //             let copyOffset = dashOffset
    //             const intervalID = setInterval(() => {
    //                 console.log(copyOffset)
    //                 let offsetEnd = true
    //                 if(copyOffset >= 0){
    //                     copyOffset -= configuration.animationSpeed
    //                     offsetEnd = false
    //                 }else{
    //                     copyOffset = 0
    //                 }

    //                 if(offsetEnd === true){
    //                     setDashOffset(copyOffset)
    //                     clearInterval(intervalID)
    //                 }else{
    //                     setDashOffset(copyOffset)
    //                 }
    //             }, 10);
                
    //         }, configuration.timeout);
    //         return () => clearInterval(timeoutID)
    //     }
    // }, [startAnimation])







    

    
    

    return{
        polylineRef,
        dashArray,
        dashOffset,
        points
    }
}