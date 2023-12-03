import React, {useContext, useEffect, useRef} from "react";
import { StateContext } from "../Context/AppContext";

function Robot(){

    /////// STATE /////////
    const {state, ACTIONS_ROBOT, dispatchStateRobot, injectMessage} = useContext(StateContext)
    
    useEffect(() => {
        animationRef.current.addEventListener("animationend", () => {
            setTimeout(() => {
                dispatchStateRobot({type:ACTIONS_ROBOT.START_TYPING}) ////////
            }, 500)
        })
    }, [])

    /////// METHODE /////////
    // Permet de calculer la différence entre scrollHeight ( la hauteur réel/total de mon contenu ) et clientHeight ( la hauteur visible de mon contenu ) et d'ajuster verticalement l'élément à chaque frappe
    useEffect(() => {
        if(robotBoxRef.current){
            robotBoxRef.current.scrollTop = robotBoxRef.current.scrollHeight - robotBoxRef.current.clientHeight
        }
    }, [state.messageDisplay])


    const animationRef = useRef(null)
    const robotBoxRef = useRef(null)
    /////// RENDER /////////
    return(
        <div className="screen">
            <div ref={animationRef} className="apparition">
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