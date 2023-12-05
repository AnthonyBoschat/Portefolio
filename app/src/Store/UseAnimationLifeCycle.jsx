import React, {useState, useRef} from "react"

export const UseAnimationLifeCycle = () => {

    // STATE
    const [startRobot, setstartRobot] = useState(false)

    // METHODE
    const handleClickBeginRobot = () => {
        if(spanBeginRef.current){
            spanBeginRef.current.classList.add("disapear")
    
            spanBeginRef.current.addEventListener("animationend", () => {
                spanBeginRef.current.style.display = "none"
                setstartRobot(true)
            })
        }
    }

    // REF
    const spanBeginRef = useRef()
    const robotBoxAnimationRef = useRef()

    // RENDER
    const renderSpanBegin = <span className="beginSpan waiting"><span ref={spanBeginRef} onClick={handleClickBeginRobot}>Commencer</span></span>
    

    // RETURN
    return{
        startRobot,
        setstartRobot,
        handleClickBeginRobot,
        renderSpanBegin,
        robotBoxAnimationRef,
    }
}