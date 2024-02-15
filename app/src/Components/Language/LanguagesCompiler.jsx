import React from "react";
import Language from "./Language";

function LanguagesCompiler(){

    const FamillyLevelConfiguration = [
        {name:"Front-end",
        languages:[
            {name:"HTML", level:70},
            {name:"CSS", level:70},
            {name:"SCSS", level:50},
            {name:"Javascript", level:60},
        ]},
        {name:"Back-end",
        languages:[
            {name:"PHP", level:30},
            {name:"MySQL", level:35},
            {name:"Node", level:10},
        ]},
        {name:"Framework",
        languages:[
            {name:"React", level:65},
            {name:"Redux", level:60},
        ]},
    ]

    return(
        <div className="languagesLevelBox">
            {FamillyLevelConfiguration.map(familly => (<Language familly={familly}/>))}
        </div>
    )
}

export default LanguagesCompiler;