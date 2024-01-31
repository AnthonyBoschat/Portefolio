import React from "react";
import TypingSentence from "../TypingSentence";

function TypingSentence_Launch(){


    const sentencesConfiguration = [
        {
            timeout: 1500,
            sentence: "Anthony Boschat",
            speed: 100,
            ending: false,
            cursor: true
        }
    ]

    return(
        <TypingSentence 
            sentencesConfiguration={sentencesConfiguration}
        />
    )
}

export default TypingSentence_Launch;