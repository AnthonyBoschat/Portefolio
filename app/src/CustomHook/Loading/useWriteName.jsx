import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useWriteName(){

    const onLoad = useSelector(store => store.lifeCycle.initialisation.onLoad)
    const [nameToShow, setNameToShow] = useState([])

    const writeName = (sentence) => {
        const sentenceArray = sentence.split("")
        let index = 0
        let goal = sentenceArray.length
        const intervalID = setInterval(() => {
            if(index < goal){
                const currentIndex = index
                setNameToShow(current => [...current, sentenceArray[currentIndex]])
                index++
            }else{
                clearInterval(intervalID)
            }
        }, 150)
    }

    useEffect(() => {
        let timeoutWriteNameID
        if(onLoad){
            timeoutWriteNameID = setTimeout(() => {
                writeName("Anthony Boschat")
            }, 2000);
        }

        return(() => {
            clearInterval(timeoutWriteNameID)
        })
    }, [onLoad])



    return{
        writeName,
        nameToShow,
    }
}