import React, { useEffect, useState } from "react";
import useTypingSentence from "./useTypingSentence";

function Sentence({configuration}){

    const {sentence, returnLineFilter} = useTypingSentence(configuration)


    return(
        <span>{returnLineFilter(sentence)}</span>
    )
}

export default Sentence;