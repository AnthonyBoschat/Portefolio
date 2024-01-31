import React, { useEffect, useState } from "react";
import useWrite from "../../Features/Writter/CustomHook/useWrite";

export default function useProfil(){

    const [sentenceProfilBase, setSentenceProfilBase] = useState([])
    const [loadSentenceProfilDescription, setLoadSentenceProfilDescription] = useState(false)
    const [sentenceProfilDescription, setSentenceProfilDescription] = useState([])

    const {write} = useWrite()

    useEffect(() => {
        const timeoutID = write({
            timeout:500,
            sentence:
            `Dénomination               :  Anthony Boschat
            Âge                         :  29 ans
            Zone d'habitat              :  Tours
            Caractéristique physique    :  1m73, yeux noisette, cheveux court`,
            speed:2,
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