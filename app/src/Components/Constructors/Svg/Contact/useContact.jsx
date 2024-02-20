import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { update_animationEnd } from "../../../Scenes/Contact/ContactSlice";

export default function useSVG_Contact(){

    const displayRef = useRef()
    const inputNameRef = useRef()
    const inputEmailRef = useRef()
    const inputMessageRef = useRef()
    const inputSubmitRef = useRef()
    const dispatch = useDispatch()

    const [polylinesValues, setPolylinesValues] = useState([
        {points:{A:null,B:null}, dashArray:null, ref:inputNameRef, offset:null, id:1},
        {points:{A:null,B:null}, dashArray:null, ref:inputEmailRef, offset:null, id:1},
        {points:{A:null,B:null}, dashArray:null, ref:inputMessageRef, offset:null, id:1},
        {points:{A:null,B:null}, dashArray:null, ref:inputSubmitRef, offset:null, id:1},
    ])

    // Calcul la position des svg
    const calculatePolylinesPoints = (polylinesValuesArray) => {
        const parentBounding = displayRef.current.getBoundingClientRect()
        for(let i = 0; i<polylinesValuesArray.length; i++){
            const childrenBounding = polylinesValuesArray[i].ref.current.getBoundingClientRect()
            const basicDashArray = 2 * (childrenBounding.width + childrenBounding.height)
            polylinesValuesArray[i].dashArray = basicDashArray
            const A = 0
            const B = childrenBounding.top - parentBounding.top
            const C = childrenBounding.left - parentBounding.left
            const D = B
            const E = C + childrenBounding.width
            const F = B
            const G = E
            const H = childrenBounding.top + childrenBounding.height - parentBounding.top
            const I = C
            const J = H
            const K = C
            const L = D
            polylinesValuesArray[i].points.A = `${A},${B} ${C},${D}`
            polylinesValuesArray[i].points.B = `${C},${D} ${E},${F} ${G},${H} ${I},${J} ${K},${L}`

        }
        return(polylinesValuesArray)
    }

    const calculateDashArrayOffset = (polylinesValuesArray) => {
        for(let i = 0; i<polylinesValuesArray.length; i++){
            const childrenBounding = polylinesValuesArray[i].ref.current.getBoundingClientRect()
            const basicDashArray = 2 * (childrenBounding.width + childrenBounding.height) + 10
            const basicDashoffset = basicDashArray
            polylinesValuesArray[i].dashArray = basicDashArray
            polylinesValuesArray[i].offset = basicDashoffset
        }
        return(polylinesValuesArray)
    }

    // pour initiliser le dashArray et le dashOffset
    useEffect(() => {
        if(displayRef && inputNameRef && inputEmailRef && inputMessageRef && inputSubmitRef){
            const copyPolylinesValues = [...polylinesValues]
            const newPolylinesValues = calculateDashArrayOffset(copyPolylinesValues)
            setPolylinesValues(newPolylinesValues)
        }
    }, [])

    // Premier calcul des positions correcte pour les svg
    useEffect(() => {
        if(displayRef && inputNameRef && inputEmailRef && inputMessageRef && inputSubmitRef){
            const copyPolylinesValues = [...polylinesValues]
            const newPolylinesValues = calculatePolylinesPoints(copyPolylinesValues)
            setPolylinesValues(newPolylinesValues)
        }
    }, [])


    // Déclenche l'animation des svg en ajustant leurs offset
    useEffect(() => {
        const intervalID = setInterval(() => {
            const copyPolylinesValues = [...polylinesValues]
            let offsetEnd = true

            for(let i = 0; i<copyPolylinesValues.length; i++){
                if(copyPolylinesValues[i].offset >= 7){
                    copyPolylinesValues[i].offset -= 7
                    offsetEnd = false
                }else{
                    copyPolylinesValues[i].offset = 0
                }
            }

            if(offsetEnd === true){
                console.log("here")
                setPolylinesValues(copyPolylinesValues)
                clearInterval(intervalID)
                dispatch(update_animationEnd(true))
            }else{
                setPolylinesValues(copyPolylinesValues)
            }
        }, 10);

        return () => clearInterval(intervalID)
    }, [])



    //Replace correctement les svg en cas de resize de l'écran
    useEffect(() => {
        const handleResizeSVG = () => {
            const copyPolylinesValues = [...polylinesValues]
            const newPolylinesValues = calculatePolylinesPoints(copyPolylinesValues)
            setPolylinesValues(newPolylinesValues)
        }

        window.addEventListener("resize", handleResizeSVG)

        return () => window.removeEventListener("resize", handleResizeSVG)
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