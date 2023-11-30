import React, {useRef, useState} from "react";
import Robot from "./Robot";
import { UseAnimationLifeCycle } from "../Store/UseLifeCycle";

function Main(){

    /////// STATE /////////
    const {startRobot, renderSpanBegin} = UseAnimationLifeCycle()

    
    /////// METHODE /////////

    /////// REF /////////
    
    /////// RENDER /////////
    return(
        <main>
            {startRobot ? <Robot /> : renderSpanBegin }
        </main>
    )
}

export default Main;