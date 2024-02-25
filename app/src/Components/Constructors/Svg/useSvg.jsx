import React, {} from "react";

export default function useSvg(){

    const calculRect_Array_Offset = (elementRef) => {
        const elementBounding = elementRef.current.getBoundingClientRect()
        const base_arrayOffset = (elementBounding.width + elementBounding.height) * 2
        return base_arrayOffset
    }

    const calculRect_Points_Position = (elementRef) => {
        const childrenBounding = elementRef.current.getBoundingClientRect()
        const A = childrenBounding.left
        const B = childrenBounding.top
        const C = A + childrenBounding.width
        const D = B
        const E = C
        const F = childrenBounding.top + childrenBounding.height
        const G = A
        const H = F
        const I = C
        const J = B
        const points = `${A},${B} ${C},${D} ${E},${F} ${G},${H} ${I},${J}`
        return points
    }

    return{
        calculRect_Array_Offset,
        calculRect_Points_Position
    }
}