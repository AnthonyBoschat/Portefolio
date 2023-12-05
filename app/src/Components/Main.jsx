import React, { useContext } from "react";
import Robot from "./Robot";
import Header from "./Header"
import { StateContext } from "../Context/AppContext";

function Main(){
    
    /////// STATE /////////
    const {startRobot, renderSpanBegin} = useContext(StateContext)
    
    /////// RENDER /////////
    return(
        <main>
            {startRobot ? <Header /> : null}
            {startRobot ? <Robot /> : renderSpanBegin }
        </main>
    )
}

export default Main;