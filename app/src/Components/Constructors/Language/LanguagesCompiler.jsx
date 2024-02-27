import React from "react";
import Language from "./Language";

function LanguagesCompiler({languagesConfiguration}){


    return(
        <div className="languagesLevelBox">
            {languagesConfiguration.map((familly, index) => (<Language key={index} familly={familly}/>))}
        </div>
    )
}

export default LanguagesCompiler;