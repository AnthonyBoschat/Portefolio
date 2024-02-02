import React, { useRef } from "react";
import Cursor from "./Cursor_Constructor/Cursor";

function Cursor_Console(){


    const cursorConfiguration = {
        cursorClass:"consoleCursor",
        cursorBlink:true,
    }

    return(
        <Cursor cursorConfiguration={cursorConfiguration}/>
    )
}

export default Cursor_Console;