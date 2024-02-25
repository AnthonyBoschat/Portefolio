import React, { useEffect, useRef, useState } from "react";
import usePolylinesWrap from "./usePolylinesWrap";

function PolylinesWrap({elementToWrapRef, configuration}){

    
    const {polylinesPoints, dashArray, dashOffset} = usePolylinesWrap(elementToWrapRef, configuration)


    return(
        <svg className="svg_polylinesConstructor">
            <polyline
                strokeDasharray={`${dashArray}px`}
                strokeDashoffset={!configuration.animation ? 0 : `${dashOffset}px`}
                points={polylinesPoints}
            />
        </svg>
    )
}

export default PolylinesWrap;