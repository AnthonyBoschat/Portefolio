import React from "react";

function Console({consoleConfiguration}){

    return(
        <div ref={consoleConfiguration.presentationConsoleRef ? consoleConfiguration.presentationConsoleRef : null} className="ConsoleBox">
            <div className="typingSentenceBox">
                {consoleConfiguration.typingSentence}
                {consoleConfiguration.cursor ? consoleConfiguration.cursor : null}
            </div>
        </div>
    )
}

export default Console;