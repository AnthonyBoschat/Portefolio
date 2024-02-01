import React, { useEffect, useState } from "react";
import useTypingSentence from "../TypingSentence/useTypingSentence";

export default function useProfil(){

    const [sentenceProfilBase, setSentenceProfilBase] = useState([])

    const {write} = useTypingSentence()

    useEffect(() => {
        const timeoutID = write({
            
            setter:setSentenceProfilBase
        })

        return () => {
            clearTimeout(timeoutID)
        }
    }, [])

    return{
        sentenceProfilBase
    }
}