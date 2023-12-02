import React from "react";
import Robot from "./Robot";
import { UseAnimationLifeCycle } from "../Store/UseLifeCycle";
import Header from "./Header"

function Main(){

    /////// STATE /////////
    const {startRobot, renderSpanBegin} = UseAnimationLifeCycle()

    
    /////// METHODE /////////

    /////// REF /////////
    
    /////// RENDER /////////
    return(
        <main>
            {startRobot ? (<Header />) : (null)}
            {startRobot ? <Robot /> : renderSpanBegin }
        </main>
    )
}

export default Main;