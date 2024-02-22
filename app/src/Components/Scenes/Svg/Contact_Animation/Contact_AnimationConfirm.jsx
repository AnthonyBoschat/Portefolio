import React, { useRef } from "react";

function Contact_AnimationConfirm(configuration){

    const IconeRef = useRef()

    const handleClick = () => {
        if(IconeRef.current){
            IconeRef.current.classList.remove("animationClass_toggleCheck")
            requestAnimationFrame(() => {
                IconeRef.current.classList.add("animationClass_toggleCheck")
            })
        }
    }

    return(
        <>
            <circle className="animationClass_circle_svgFill_In" strokeDashoffset={`${configuration.circle.dashOffset}%`} cx={configuration.circle.cx} cy={configuration.circle.cy} r={configuration.circle.r}/>


            {/* <polyline strokeDashoffset={`${configuration.polyline.dashOffset}%`} points={configuration.polyline.points} /> */}


            <foreignObject width="100%" height="100%">
                <div onClick={handleClick}  style={{height:configuration.circle.r * 2, width:configuration.circle.r * 2, left:configuration.circle.cx / 2 + 10, top:configuration.circle.cy / 2 + 10}} className="checkIconeBox">
                    <i ref={IconeRef} class="fa-solid fa-check"></i>
                </div>
            </foreignObject>
            
            
        </>
    )
}

export default Contact_AnimationConfirm;