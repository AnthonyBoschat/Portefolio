import React, { useEffect, useRef, useState } from "react";

export default function useCircuitCompiler(svgRef, circuitCenterRef){

    const [svgBounding, setSvgBounding] = useState(null)
    const [circuitBounding, setCircuitBounding] = useState(null)
    const [squarePoints, setSquarePoints] = useState([])
    const [startCalcul, setStartCalcul] = useState(false)


    const createDivergences = (i, a, insertion, spaceX, spaceY) => {
        let divergences = ""
        const insertionSplit = insertion.split(",")
        const insertionX = parseInt(insertionSplit[0])
        const insertionY = parseInt(insertionSplit[1])
        console.log("insetionX => ",insertionX)
        console.log("insetionY => ",insertionY)
        if(i === 0){
            if(a === 1){divergences += `${insertionX - (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 2){divergences += `${insertionX - (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 3){divergences += `${insertionX - (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 4){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 5){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 6){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 7){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 8){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 9){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
        }else if(i === 1){
            if(a === 1){divergences += `${insertionX - (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 2){divergences += `${insertionX - (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 3){divergences += `${insertionX - (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 4){divergences += `${insertionX - (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 5){divergences += `${insertionX - (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 6){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 7){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 8){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 9){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
        }else if(i === 2){
            if(a === 1){divergences += `${insertionX + (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 2){divergences += `${insertionX + (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 3){divergences += `${insertionX + (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 4){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 5){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 6){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 7){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 8){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 9){divergences += `${insertionX - (spaceX / 2)},${insertionY + (spaceY / 2)}`}
        }else if(i === 3){
            if(a === 1){divergences += `${insertionX + (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 2){divergences += `${insertionX + (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 3){divergences += `${insertionX + (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 4){divergences += `${insertionX + (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 5){divergences += `${insertionX + (spaceX / 2)},${insertionY + (spaceY / 2)}`}
            if(a === 6){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 7){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 8){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
            if(a === 9){divergences += `${insertionX + (spaceX / 2)},${insertionY - (spaceY / 2)}`}
        }
        
        
        return divergences
        
    }


    useEffect(() => {
        setStartCalcul(true)
    }, [])

    // On commence par récupérer les dimensions des deux élément circuit et svg
    useEffect(() => {
        if(startCalcul){
            const svgBounding = svgRef.current.getBoundingClientRect()
            const circuitBounding = circuitCenterRef.current.getBoundingClientRect()
            setSvgBounding(svgBounding)
            setCircuitBounding(circuitBounding)
        }
    }, [startCalcul])

    

    // A partir du carré central, on créé 36 points, et on défini le goal, le point d'insertion, et les divergences
    useEffect(() => {
        if(circuitBounding && svgBounding){
            const squareWidth = circuitBounding.width // On trouve la longueur du carré
            const squarePointStep = circuitBounding.width / 9.5 // On le divise par 9.5
            const squareHeight = circuitBounding.top + circuitBounding.width
            const topLeftX = svgBounding.width / 2 - circuitBounding.width / 2 - 3 // On trouve la position haute gauche du carré
            const topLeftY = svgBounding.height / 2 - circuitBounding.height / 2 - 3 // On trouve la position haute gauche du carré
            const bottomRightX = svgBounding.width / 2 + circuitBounding.width / 2 + 3 // On trouve la position bas droite du carré
            const bottomRightY = svgBounding.height / 2 + circuitBounding.height / 2 + 3 // On trouve la position bas droite du carré
            const spaceX = (svgBounding.width / 2 - circuitBounding.width / 2) / 10
            const spaceY = (svgBounding.width / 2 - circuitBounding.width / 2) / 10
            const pourcentOfScale = 8

            const squarePoints = [] // On initialise un tableau vide qu'on va remplir de la position de tout les points
            for(let i = 0; i<4; i++){
                switch(i){
                    case 0:
                        for(let a = 1; a<10; a++){
                            let baseY = 100
                            let differenceY = Math.abs(a-4) * pourcentOfScale
                            if(a!==4){baseY -= differenceY}

                            const goal = `${topLeftX + (a * squarePointStep)},${topLeftY}`
                            const insertion = `${topLeftX + (a * squarePointStep)},${topLeftY - baseY}`
                            const divergences = createDivergences(i, a, insertion, spaceX, spaceY)
                            let newPoint = `${divergences} ${insertion} ${goal} `
                            squarePoints.push(newPoint)
                        }
                        continue
                    case 1:
                        for(let a = 1; a<10; a++){
                            let baseX = 100
                            let differenceX = Math.abs(a-6) * pourcentOfScale
                            if(a!==6){baseX -= differenceX}


                            const goal = `${topLeftX},${topLeftY  + (a * squarePointStep)}`
                            const insertion = `${topLeftX - baseX},${topLeftY + (a * squarePointStep)}`
                            const divergences = createDivergences(i, a, insertion, spaceX, spaceY)
                            let newPoint = `${divergences} ${insertion} ${goal} `
                            squarePoints.push(newPoint)
                        }
                        continue
                    case 2:
                        for(let a = 1; a<10; a++){
                            let baseY = 100
                            let differenceY = Math.abs(a-4) * pourcentOfScale
                            if(a!==4){baseY -= differenceY}

                            const goal = `${bottomRightX - (a * squarePointStep)},${bottomRightY}`
                            const insertion = `${bottomRightX - (a * squarePointStep)},${bottomRightY + baseY}`
                            const divergences = createDivergences(i, a, insertion, spaceX, spaceY)
                            let newPoint = `${divergences} ${insertion} ${goal} `
                            squarePoints.push(newPoint)
                        }
                        continue
                    case 3:
                        for(let a = 1; a<10; a++){
                            let baseX = 100
                            let differenceX = Math.abs(a-6) * pourcentOfScale
                            if(a!==6){baseX -= differenceX}


                            const goal = `${bottomRightX},${bottomRightY - (a * squarePointStep)}`
                            const insertion = `${bottomRightX + baseX},${bottomRightY - (a * squarePointStep)}`
                            const divergences = createDivergences(i, a, insertion, spaceX, spaceY)
                            let newPoint = `${divergences} ${insertion} ${goal} `
                            squarePoints.push(newPoint)
                        }
                        continue
                }
            }
            setSquarePoints(squarePoints)
        }
    }, [circuitBounding, svgBounding])


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

    return{
        squarePoints
    }
}