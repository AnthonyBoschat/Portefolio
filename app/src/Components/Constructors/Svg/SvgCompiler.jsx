import React from "react";

function SvgCompiler({svgConfiguration}){

    return(
        <svg className={svgConfiguration.svgClass}>
            {svgConfiguration.elements.map(element => (
                <svgConfiguration.component/>
            ))}
        </svg>
    )
}

export default SvgCompiler;