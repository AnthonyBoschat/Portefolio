import React from "react";
import useRotationLetter from "./useRotationLetter";

function RotationLetter({rotationConfiguration}){

    const {sentenceToArray, generateRotationLetter} = useRotationLetter()
    const arrayOfSentence = sentenceToArray(rotationConfiguration.sentence)

    return(
        <>
            {arrayOfSentence.map(letter => generateRotationLetter(letter))}
        </>
    )
}

export default RotationLetter;