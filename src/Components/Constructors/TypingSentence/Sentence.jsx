import React, { useEffect, useState } from "react";
import useTypingSentence from "./useTypingSentence";

function Sentence({configuration}){

    const {sentence, returnLineFilter} = useTypingSentence(configuration)


    return(
        <>
            {configuration.whiteSpace && (
                <span style={{whiteSpace:"pre"}}>{sentence}</span>
            )}
            {!configuration.whiteSpace && (
                <span>{returnLineFilter(sentence)}</span>
            )}
        </>
        
        
    )
}

export default Sentence;