import React from "react";
import useCursor from "./useCursor";

function Cursor({cursorConfiguration}){

    const {cursorVisible} = useCursor(cursorConfiguration.cursorBlinkSpeed)
    const cursorVisibility = cursorVisible ? {visibility:"visible"} : {visibility:"hidden"}


    return(
        <div
            style={cursorConfiguration.cursorBlink ? cursorVisibility : null}
            ref={cursorConfiguration.cursorRef ? cursorConfiguration.cursorRef : null}
            className={cursorConfiguration?.cursorClass}>
        </div>
    )
}

export default Cursor;