import React from "react";
import Language from "./Language";

function LanguagesCompiler({languagesConfiguration}){


    return(
        <div className="languagesLevelBox">
            {languagesConfiguration.map(familly => (<Language familly={familly}/>))}
        </div>
    )
}

export default LanguagesCompiler;