import React, { useEffect, useState } from "react";
import useTypingSentence from "./useTypingSentence";

function Sentence({configuration}){

    const {sentence} = useTypingSentence(configuration)

    return(
        <>
            <span className="nameBox">{sentence}</span>
            {configuration.cursor && configuration.cursorStyle}
        </>
    )
}

export default Sentence;