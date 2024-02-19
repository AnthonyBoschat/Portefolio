import React from "react";

function SvgCompiler({svgConfiguration}){

    /*

    svgClass : class pour la balise svg
    Component : Le composant à afficher pour chaque element
    elements : Les elements ( polyline, polygone )

    
        const svgConfiguration = {
            svgClass:"contactSvg",
            component:<SVG_Contact/>,
            elements:polylinesValues
        }
    */

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