import React, { useEffect, useState } from "react";

export default function useTypingSentence(configuration){

    const [sentence, setSentence] = useState("")

    const returnLineFilter = (sentence) => {
        const splitSentence = sentence.split('\n')
        const lengthSentence = splitSentence.length - 1
        return(
            splitSentence.map((text,index) => 
                (
                    <React.Fragment key={index}>
                        {text}
                        {index !== lengthSentence && <br/>}
                    </React.Fragment>
                )
            )
        )
    }
    
    // timeout, sentence,  speed, setter, ending
    const write = (configuration) => {
        if(configuration){
            // Dans configuration.timeout seconde, on lance l'écriture
            const timeoutID = setTimeout(() => {
                const sentenceArray = configuration.sentence.split("") // On casse le phrase dans un tableau
                let index = 0
                let goal = sentenceArray.length
                const intervalID = setInterval(() => {
                    if(index < goal){ // Tant qu'on est pas arriver à la fin du tableau
                        const currentIndex = index // On sauvegarde l'index en cours
                        const currentChar = sentenceArray[currentIndex]
                        setSentence(current => current += currentChar)
                        ////////////////// Note -> Changer la logique de la gestion du state en simple string += currentChar
    
                        index++ // On incrémente l'index
                    }else{
                        clearInterval(intervalID) // On clear l'interval
                        if(configuration.ending){ // Si un ending est préciser on le lance.
                            configuration.ending()
                        }
                    }
                }, configuration.speed)
            }, configuration.timeout)
    
            return timeoutID
        }
    }

    useEffect(() => {
        const timeoutID = write(configuration)

        return () => clearTimeout(timeoutID)
    }, [])



    return{
        // writeName,
        write,
        sentence,
        setSentence,
        returnLineFilter
    }
}