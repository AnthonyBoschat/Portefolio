import React from "react";
import Cursor from "./Cursor_Constructor/Cursor";

function Cursor_Launch(){


    const cursorConfiguration = {
        cursorClass:"cursorLaunch",
        cursorBlink:false,
        // cursorRef:cursorLaunchRef,
    }

    return(
        <Cursor cursorConfiguration={cursorConfiguration}/>
    )
}

export default Cursor_Launch;