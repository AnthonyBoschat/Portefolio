import React from "react";
import Cursor from "../Cursor/Cursor";

function Console({consoleConfiguration}){

    // Test du push

    return(
        <div ref={consoleConfiguration.presentationConsoleRef ? consoleConfiguration.presentationConsoleRef : null} className="ConsoleBox">
            <div className="typingSentenceBox">
                {consoleConfiguration.typingSentence}
                <Cursor cursorConfiguration={{
                    cursorClass:"consoleCursor",
                    cursorBlink:true,
                }}/>
            </div>
        </div>
    )
}

export default Console;