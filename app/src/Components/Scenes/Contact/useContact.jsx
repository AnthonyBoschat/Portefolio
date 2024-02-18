import React, { useEffect, useRef, useState } from "react";

export default function useContact(){

    const displayRef = useRef()
    const inputNameRef = useRef()
    const inputEmailRef = useRef()
    const inputMessageRef = useRef()
    const inputSubmitRef = useRef()

    const [polylinesValues, setPolylinesValues] = useState([
        {points:{A:null,B:null}, ref:inputNameRef, offsetGoal:380, offset:500, minus:0.001},
        {points:{A:null,B:null}, ref:inputEmailRef, offsetGoal:380, offset:500, minus:0.01},
        {points:{A:null,B:null}, ref:inputMessageRef, offsetGoal:380, offset:500, minus:0.8},
        {points:{A:null,B:null}, ref:inputSubmitRef, offsetGoal:380, offset:500, minus:0.1},
    ])


    const calculatePolylinesPoints = (polylinesValuesArray) => {
        const parentBounding = displayRef.current.getBoundingClientRect()
        for(let i = 0; i<polylinesValuesArray.length; i++){
            const childrenBounding = polylinesValuesArray[i].ref.current.getBoundingClientRect()
            const A = 0
            const B = childrenBounding.top
            const C = childrenBounding.left - parentBounding.left
            const D = B
            const E = C + childrenBounding.width
            const F = B
            const G = E
            const H = childrenBounding.top + childrenBounding.height
            const I = C
            const J = H
            const K = C
            const L = D
            polylinesValuesArray[i].points.A = `${A},${B} ${C},${D}`
            polylinesValuesArray[i].points.B = `${C},${D} ${E},${F} ${G},${H} ${I},${J} ${K},${L}`
        }
        return(polylinesValuesArray)
    }


    useEffect(() => {
        if(displayRef && inputNameRef && inputEmailRef && inputMessageRef && inputSubmitRef){
            const copyPolylinesValues = [...polylinesValues]
            const newPolylinesValues = calculatePolylinesPoints(copyPolylinesValues)
            setPolylinesValues(newPolylinesValues)
        }
    }, [])

    useEffect(() => {
        
        let offset = 500
        const intervalID = setInterval(() => {
            const copyPolylinesValues = [...polylinesValues]
            let offsetEnd = true
            for(let i = 0; i<copyPolylinesValues.length; i++){
                if(offset > copyPolylinesValues[i].offsetGoal){
                    offset -= 0.15
                    copyPolylinesValues[i].offset = offset
                    offsetEnd = false
                }
            }

            if(offsetEnd === true){
                clearInterval(intervalID)
            }else{
                setPolylinesValues(copyPolylinesValues)
            }
        }, 10);

        return () => clearInterval(intervalID)
    }, [])

    return{
        displayRef,
        inputNameRef,
        inputEmailRef,
        inputMessageRef,
        inputSubmitRef,
        polylinesValues
    }
        
    
}