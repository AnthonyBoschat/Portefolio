import React, {useContext, useEffect} from "react";
import { StateContext } from "../Context/AppContext";

function Robot(){

    /////// STATE /////////
    const {state, ACTIONS_ROBOT, dispatchStateRobot, robotBoxRef, robotBoxAnimationRef} = useContext(StateContext)
    

    useEffect(() => {
        if(robotBoxAnimationRef.current){
            robotBoxAnimationRef.current.addEventListener("animationend", () => {
                setTimeout(() => {
                    dispatchStateRobot({type:ACTIONS_ROBOT.START_TYPING}) ////////
                }, 500)
            })
        }
    }, [])

    /////// RENDER /////////
    return(
        <div className="screen">
            <div ref={robotBoxAnimationRef} className="apparition">
                <div ref={robotBoxRef} onClick={() => dispatchStateRobot({type:ACTIONS_ROBOT.NEXT_MESSAGE})} className="robotBox">
                    <span className="boxEnglobeElement">
                        <span className="robotTextContent">{state.messageDisplay}<span className="robotWhiteSquare tickle">|</span></span>
                    </span>
                </div>
            </div>
            <button onClick={() => dispatchStateRobot({type:ACTIONS_ROBOT.RESET, payload:state.messageRouteIndex})}>Reset</button>
            <button onClick={() => dispatchStateRobot({type:ACTIONS_ROBOT.PREVIOUS_MESSAGE})}>Précedent</button>
        </div>
    )
}

export default Robot;