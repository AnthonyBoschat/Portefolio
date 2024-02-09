import React, { useEffect, useState } from "react";

export default function useContact(){

    const alphabet = "azertyuiopqsdfghjklmwxcvbn"
    const [sentence, setSentence] = useState("")
    const [step, setStep] = useState(0)
    const finalSentence = "Ceci est une phrase vraiment très longue"
    

    useEffect(() => {
        const intervalID = setInterval(() => {
            
            // if(sentence != finalSentence){
            //     let sentenceToShow = []
            //     for(let i = 0; i<finalSentence.length; i++){
            //         const randomIndexAlphabet = Math.floor(Math.random() * alphabet.length) // Possible ajustement du multiplicateur
            //         sentenceToShow.push(alphabet[randomIndexAlphabet])
            //     }
            //     setSentence(current => {
            //         let copyCurrent = current
            //         for(let i = 0; i<finalSentence.length; i++){
            //             if(copyCurrent[i] == finalSentence[i]){
            //                 sentenceToShow[i] = finalSentence[i]
            //             }
            //         }
            //         return sentenceToShow.join("")
            //     })
            // }else{
            //     clearInterval(intervalID)
            // }
            
            if(sentence != finalSentence){
                const sentenceToShow = []
                for(let i = 0; i<finalSentence.length; i++){ // step + 1
                    const randomIndexAlphabet = Math.floor(Math.random() * alphabet.length) 
                    sentenceToShow.push(alphabet[randomIndexAlphabet])
                }
                setSentence(current => {
                    for(let i = 0; i<step; i++){
                        sentenceToShow[i] = finalSentence[i]
                    }
                    return sentenceToShow.join("")
                })
                // if(step < 10){
                //     setSentence(sentenceToShow.join(""))
                // }else{
                //     setSentence(finalSentence)
                //     clearTimeout(intervalID)
                // }
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