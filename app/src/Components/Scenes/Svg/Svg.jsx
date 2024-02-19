import React from "react";

function Svg({polylinesValues}){

    return(
        <svg className="contactSvg">
            {polylinesValues.map(polyline => (
                <React.Fragment>
                    <polyline className="polylineDisapear" strokeDashoffset={`${polyline.offset}%`} points={polyline.points.A}/>
                    <polyline strokeDashoffset={`${polyline.offset}%`} points={polyline.points.B}/>
                </React.Fragment>
            ))}
        </svg>
    )
}

export default Svg;