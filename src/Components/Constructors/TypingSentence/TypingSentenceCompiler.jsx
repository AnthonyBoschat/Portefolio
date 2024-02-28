import React from "react";
import Sentence from "./Sentence";

function TypingSentenceCompiler({sentencesConfiguration}){

    return(
        <>
            {sentencesConfiguration.map(configuration => (<Sentence key={configuration.sentence} configuration={configuration}/>))}
        </>
    )
}

export default TypingSentenceCompiler;