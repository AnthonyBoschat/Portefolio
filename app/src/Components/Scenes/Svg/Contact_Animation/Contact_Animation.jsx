import React from "react";
import { useSelector } from "react-redux";

function SVG_Contact_Animation(polyline){

    

    return(
        <>
            <polyline strokeDashoffset={`${polyline.dashOffsetA}%`}   className={"polylineRect"} points={polyline.points.A}/>
            <polyline strokeDashoffset={`${polyline.dashOffsetB}%`} className={"polylineArrow"} points={polyline.points.B}/>
        </>
    )
}

export default SVG_Contact_Animation;