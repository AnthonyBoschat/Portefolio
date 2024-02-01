import React, { useEffect, useState } from "react";
import useTypingSentence from "../TypingSentence/useTypingSentence";

export default function useProfil(){

    const [sentenceProfilBase, setSentenceProfilBase] = useState([])

    const {write} = useTypingSentence()

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