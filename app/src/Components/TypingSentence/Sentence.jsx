import React, { useEffect, useState } from "react";
import useTypingSentence from "./useTypingSentence";

function Sentence({configuration}){

    const {sentence} = useTypingSentence(configuration)

    return(
        <span className="sentence" dangerouslySetInnerHTML={{__html:sentence}} style={{whiteSpace: "pre-line"}}></span>
    )
}

export default Sentence;