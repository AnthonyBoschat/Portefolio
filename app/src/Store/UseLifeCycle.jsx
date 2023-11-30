import React, {useState, useRef} from "react"

export const UseAnimationLifeCycle = () => {

    

    // STATE
    const [startRobot, setstartRobot] = useState(false)

    // METHODE
    const handleClickBeginRobot = () => {
        if(spanRef.current){
            spanRef.current.classList.add("disapear")
    
            spanRef.current.addEventListener("animationend", (event) => {
                spanRef.current.style.display = "none"
                setstartRobot(true)
            })
        }
    }

    // REF
    const spanRef = useRef(null)

    // RENDER
    const renderSpanBegin = <span className="beginSpan waiting"><span ref={spanRef} onClick={handleClickBeginRobot}>Commencer</span></span>

    // RETURN
    return{
        startRobot,
        setstartRobot,
        handleClickBeginRobot,
        renderSpanBegin,
    }
}