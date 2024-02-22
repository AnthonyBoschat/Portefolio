import React from "react";
import { useSelector } from "react-redux";
import useSVG_Contact_Animation from "./useSVG_Contact_Animation";

function SVG_Contact_Animation(polyline){

    const emailSend = useSelector(store => store.contact.emailSend)

    return(
        <>
            <polyline strokeDashoffset={`${polyline.dashOffsetA}%`} className={!emailSend ? "polylineRect" : "polylineRect animationClass_mailIcon_Out"} points={polyline.points.A}/>
            <polyline strokeDashoffset={`${polyline.dashOffsetB}%`} className={"polylineArrow"} points={polyline.points.B}/>
        </>
    )
}

export default SVG_Contact_Animation;