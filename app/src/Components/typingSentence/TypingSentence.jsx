import React from "react";
import Sentence from "./Sentence";

function TypingSentence({sentencesConfiguration}){

    return(
        <div className="nameApparition">
            {sentencesConfiguration.map(configuration => (<Sentence configuration={configuration}/>))}
        </div>
    )
}

export default TypingSentence;