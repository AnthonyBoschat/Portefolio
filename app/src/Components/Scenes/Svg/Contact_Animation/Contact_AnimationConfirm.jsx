import React from "react";

function Contact_AnimationConfirm(configuration){

    

    return(
        <>
            <circle className="animationClass_circle_svgFill_In" strokeDashoffset={`${configuration.circle.dashOffset}%`} cx={configuration.circle.cx} cy={configuration.circle.cy} r={configuration.circle.r}/>
            <polyline strokeDashoffset={`${configuration.polyline.dashOffset}%`} points={configuration.polyline.points} />
        </>
    )
}

export default Contact_AnimationConfirm;