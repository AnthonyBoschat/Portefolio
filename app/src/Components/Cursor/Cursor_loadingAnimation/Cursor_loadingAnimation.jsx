import React, { useRef } from "react";
import Cursor from "../Cursor";

function Cursor_loading_Animation(){


    const cursorConfiguration = {
        cursorClass:"pendingSentenceCursor",
        cursorBlink:true,
    }

    return(
        <Cursor cursorConfiguration={cursorConfiguration}/>
    )
}

export default Cursor_loading_Animation;