import React, { useEffect, useRef } from "react";
import Cursor from "../Cursor/Cursor";

function Console({consoleConfiguration}){

    const typingSentenceBoxRef = useRef();

    useEffect(() => {
        const typingBox = typingSentenceBoxRef.current
        if (!typingBox) return
    
        const scrollToBottom = () => {
            typingBox.scrollTop = typingBox.scrollHeight;
        }
    
        const intervalId = setInterval(scrollToBottom, 100)
    
        return () => clearInterval(intervalId);
    }, [])

    return(
        <div  ref={consoleConfiguration.presentationConsoleRef ? consoleConfiguration.presentationConsoleRef : null} className="ConsoleBox">
            <div ref={typingSentenceBoxRef} className="typingSentenceBox">
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