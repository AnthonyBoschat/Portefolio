import React from "react";

function SvgCompiler({svgConfiguration}){

    const Component = svgConfiguration.component.type
    
    return(
        <svg className={svgConfiguration.svgClass}>
            {svgConfiguration.elements.map((element, index) => (
                React.createElement(Component, {key:index, ...element})
            ))}
        </svg>
    )
}

export default SvgCompiler;