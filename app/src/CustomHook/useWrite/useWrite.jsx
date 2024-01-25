import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCursor } from "../../Redux/Slices/WritterSlice";

export default function useWriteName(){

    const onLoad = useSelector(store => store.lifeCycle.initialisation.onLoad)
    const cursor = useSelector(store => store.writter.cursor)
    const dispatch = useDispatch()
    
    // timeout, sentence,  speed, setter, ending
    const write = (parameters) => {

        if(!cursor){ // On lance l'apparition du curseur
            dispatch(updateCursor(true))
        }

        // Dans parameters.timeout seconde, on lance l'écriture
        const timeoutID = setTimeout(() => {

            const sentenceArray = parameters.sentence.split("") // On casse le phrase dans un tableau
            let index = 0
            let goal = sentenceArray.length
            const intervalID = setInterval(() => {
                if(index < goal){ // Tant qu'on est pas arriver à la fin du tableau
                    const currentIndex = index // On sauvegarde l'index en cours
                    parameters.setter(current => [...current, sentenceArray[currentIndex]]) // On set dans le current du setter passé le caractère en cours de lecture
                    index++ // On incrémente l'index
                }else{
                    clearInterval(intervalID) // On clear l'interval
                    if(parameters.ending){ // Si un ending est préciser on le lance.
                        parameters.ending()
                    }
                }
            }, parameters.speed)

        }, parameters.timeout);
        

        return timeoutID
    }



    return{
        // writeName,
        write
    }
}