import React, { useEffect, useRef, useState } from "react";
import useCircuit from "./useCircuit";

function Circuit({points}){
    
    const polylineRef = useRef()
    const [cx, setcX] = useState(null)
    const [cy, setcY] = useState(null)

    useEffect(() => {
        const points = polylineRef.current.getAttribute("points").split(" ")
        const array = points[0].split(",")
        setcX(array[0])
        setcY(array[1])
    }, [])

    useEffect(() => {
        
        const handleResize = () => {
            const points = polylineRef.current.getAttribute("points").split(" ")
            const array = points[0].split(",")
            setcX(array[0])
            setcY(array[1])
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])



    return(
        <>
            
            <polyline
                ref={polylineRef}
                points={points}
            />
            <circle
                r={4}
                cx={cx}
                cy={cy}
            />
        </>
    )
}

export default Circuit;