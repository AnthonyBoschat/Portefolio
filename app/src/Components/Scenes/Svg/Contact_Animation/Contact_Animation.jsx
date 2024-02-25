import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useSVG_Contact_Animation from "./useSVG_Contact_Animation";
import useSVG_Contact_AnimationConfirm from "./useSVG_Contact_AnimationConfirm";

function SVG_Contact_Animation({configuration}){



    const emailSend = useSelector(store => store.contact.emailSend)
    const emailSendConfirmation = useSelector(store => store.contact.emailSendConfirmation)
    const IconeRef = useRef()

    const {animation_PolylinesValues} = useSVG_Contact_Animation(configuration.displayRef)
    const {animationConfirm_PolylinesValues, handleClick} = useSVG_Contact_AnimationConfirm(configuration.displayRef)


    return(
        <svg className="controleClassSVG">
            {!emailSendConfirmation && (
                <>
                    <polyline strokeDashoffset={`${animation_PolylinesValues.dashOffsetA}%`} className={!emailSend ? "polylineRect" : "polylineRect animationClass_mailIcon_Out"} points={animation_PolylinesValues.points.A}/>
                    <polyline strokeDashoffset={`${animation_PolylinesValues.dashOffsetB}%`} className={"polylineArrow"} points={animation_PolylinesValues.points.B}/>
                </>
            )}
            {emailSendConfirmation && (
                <>
                    <circle className="animationClass_circle_svgFill_In" strokeDashoffset={`${animationConfirm_PolylinesValues.circle.dashOffset}%`} cx={animationConfirm_PolylinesValues.circle.cx} cy={animationConfirm_PolylinesValues.circle.cy} r={animationConfirm_PolylinesValues.circle.r}/>
                    <foreignObject width="100%" height="100%">
                        <div onClick={() => handleClick(IconeRef)}  style={{height:animationConfirm_PolylinesValues.circle.r * 2, width:animationConfirm_PolylinesValues.circle.r * 2, left:animationConfirm_PolylinesValues.circle.cx / 2 + 10, top:animationConfirm_PolylinesValues.circle.cy / 2 + 10}} className="checkIconeBox">
                            <i ref={IconeRef} className="fa-solid fa-check"></i>
                        </div>
                    </foreignObject>
                </>
                
            )}
        </svg>
        
    )
}

export default SVG_Contact_Animation;