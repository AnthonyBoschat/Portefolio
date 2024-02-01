import React from "react";
import Cursor from "../Cursor";

function Cursor_Launch(){


    const cursorConfiguration = {
        cursorClass:"loadingCursorBar",
        cursorBlink:false,
        // cursorRef:cursorLaunchRef,
    }

    return(
        <Cursor cursorConfiguration={cursorConfiguration}/>
    )
}

export default Cursor_Launch;