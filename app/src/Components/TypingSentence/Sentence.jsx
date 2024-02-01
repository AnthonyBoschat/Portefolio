import React, { useEffect, useState } from "react";
import useTypingSentence from "./useTypingSentence";

function Sentence({configuration}){

    const {sentence} = useTypingSentence(configuration)

    return(
        <>
            {sentence}
        </>
    )
}

export default Sentence;