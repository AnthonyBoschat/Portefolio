import React, { useEffect, useState } from "react";

export default function useContact(){

    const alphabet = "azertyuiopqsdfghjklmwxcvbn"
    const [sentence, setSentence] = useState("")
    const [step, setStep] = useState(0)
    const finalSentence = "Ceci est une phrase vraiment très longue"
    

    useEffect(() => {
        const intervalID = setInterval(() => {
            
            if(sentence != finalSentence){
                const sentenceToShow = []
                for(let i = 0; i<finalSentence.length; i++){
                    const randomIndexAlphabet = Math.floor(Math.random() * alphabet.length) 
                    sentenceToShow.push(alphabet[randomIndexAlphabet])
                }
                setSentence(current => {
                    for(let i = 0; i<step; i++){
                        sentenceToShow[i] = finalSentence[i]
                    }
                    return sentenceToShow.join("")
                })
                setStep(current => current+1)
                
            }else{
                clearInterval(intervalID)
            }
        }, 15);

        return () => clearInterval(intervalID)
    }, [sentence])
    

    return{
        sentence
    }
}