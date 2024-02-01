import React, { useEffect, useState } from "react";
import useTypingSentence from "./useTypingSentence";

function Sentence({configuration}){

    const {sentence} = useTypingSentence(configuration)

    return(
        <>
            <span className="nameBox">{sentence}</span>
        </>
    )
}

export default Sentence;