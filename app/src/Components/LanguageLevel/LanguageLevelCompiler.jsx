import React from "react";
import Language from "./Language";

function LanguageLevel(){

    const FamillyLevelConfiguration = [
        {name:"Front-end",
        languages:[
            {name:"HTML", level:0},
            {name:"CSS", level:0},
            {name:"Javascript", level:0},
        ]},
        {name:"Back-end",
        languages:[
            {name:"PHP", level:0},
            {name:"MySQL", level:0},
        ]},
        {name:"Framework",
        languages:[
            {name:"React", level:0},
        ]},
    ]

    return(
        <div className="languagesLevelBox">
            {FamillyLevelConfiguration.map(familly => (<Language familly={familly}/>))}
        </div>
    )
}

export default LanguageLevel;