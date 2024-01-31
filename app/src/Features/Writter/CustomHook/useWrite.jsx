import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCursor } from "../Slice/WritterSlice";

export default function useWrite(configuration){

    const cursor = useSelector(store => store.writter.cursor)
    const dispatch = useDispatch()
    const [sentence, setSentence] = useState([])
    
    // timeout, sentence,  speed, setter, ending
    const write = (configuration) => {

        if(!cursor){ // On lance l'apparition du curseur
            dispatch(updateCursor(true))
        }

        // Dans configuration.timeout seconde, on lance l'écriture
        const timeoutID = setTimeout(() => {
            const sentenceArray = configuration.sentence.split("") // On casse le phrase dans un tableau
            let index = 0
            let goal = sentenceArray.length
            const intervalID = setInterval(() => {
                if(index < goal){ // Tant qu'on est pas arriver à la fin du tableau
                    const currentIndex = index // On sauvegarde l'index en cours
                    const currentChar = sentenceArray[currentIndex]
                    if(currentChar === "\n"){
                        setSentence(current => [...current, <br key={currentIndex}/>]) // On set dans le current du setter passé le caractère en cours de lecture
                    }else{
                        setSentence(current => [...current, currentChar]) // On set dans le current du setter passé le caractère en cours de lecture
                    }
                       
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

    useEffect(() => {
        const timeoutID = write(configuration)

        return () => clearTimeout(timeoutID)
    }, [])



    return{
        // writeName,
        write,
        sentence,
        setSentence
    }
}