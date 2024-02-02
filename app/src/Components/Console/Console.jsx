import React from "react";

function Console({consoleConfiguration}){

    return(
        <div ref={consoleConfiguration.presentationConsoleRef ? consoleConfiguration.presentationConsoleRef : null} className="mainCategoryPresentationConsoleBox">
            <div className="pendingSentenceBox">
                {consoleConfiguration.typingSentence}
                {consoleConfiguration.cursor ? consoleConfiguration.cursor : null}
            </div>
        </div>
    )
}

export default Console;