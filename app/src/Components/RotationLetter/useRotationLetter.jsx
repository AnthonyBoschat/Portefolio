import React, {} from "react";

export default function useRotationLetter(){

    const alphabet = "azertyuiopqsdfghjklmwxcvbn"
    const numberOfLetterInRotation = 9

    const generateRandomLetter = () => {
        const randomIndex = Math.floor(Math.random() * alphabet.length)
        return alphabet[randomIndex]
    }

    const generateRotationLetter = (letter) => {
        const shortLetter = letter === "t" || letter === "j" || letter === "u"
        const uLetter = letter === "u"
        const array = [letter]
        for(let i = 0; i<numberOfLetterInRotation; i++){
            const randomLetter = generateRandomLetter()
            array.push(randomLetter)
        }

        return(
            <div className={!shortLetter ? "testContainer" : !uLetter ? "testContainer shortLetter" : "testContainer uLetter"}>
                {array.map(letter => (<span>{letter}</span>))}
            </div>
        )
    }

    const sentenceToArray = (sentence) => {
        const array = sentence.split("")
        return array
    }

    return{
        sentenceToArray,
        generateRotationLetter
    }
}