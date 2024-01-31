import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWrite from "../../Features/Writter/CustomHook/useWrite";
import useWhiteBar from "../../Features/Writter/CustomHook/useWhiteBar";
import { update_onPending } from "./PendingSlice";

export default function usePending(){

    const dispatch = useDispatch()
    const onPending = useSelector(store => store.pending.onPending)
    
    const [pendingSentence1, setPendingSentence1] = useState([])
    const [loadSentence2, setLoadSentence2] = useState(false)
    const [pendingSentence2, setPendingSentence2] = useState([])
    const cursorSentenceRef = useRef()
    const presentationConsoleRef = useRef()

    const {write} = useWrite()
    const {cursorVisible} = useWhiteBar()
    const visible = cursorVisible ? {visibility:"visible"} : {visibility:"hidden"}











    // LIFECYCLE

    useEffect(() => {
        if(onPending){
            const timeoutID = write({
                timeout:600,
                sentence:
                `Initialisation ...
                Récupération des données ...
                Vérifications des dépendances systèmes . . .
                \u00A0\u00A0\u00A0\u00A0- react@18.2.0 OK
                \u00A0\u00A0\u00A0\u00A0- redux@5.0.1 OK 
                \u00A0\u00A0\u00A0\u00A0- react-redux@9.1.0 OK
                \u00A0\u00A0\u00A0\u00A0- @reduxjs/toolkit@2.1.0 OK
                \u00A0\u00A0\u00A0\u00A0- react-router-dom@6.21.3 OK
                \u00A0\u00A0\u00A0\u00A0- npm@10.3.0 OK
                \u00A0\u00A0\u00A0\u00A0- three@0.160.1 OK
                Démarrage de l'environnement de développement`,
                speed:2,
                setter:setPendingSentence1,
                ending:() => {
                    setLoadSentence2(true)
                }
            })
    
            return(() => {
                clearTimeout(timeoutID)
            })
        }
    }, [])

    useEffect(() => {
        if(loadSentence2 && onPending){
            const timeoutID = write({
                timeout:500,
                sentence:
                `
                
                Sécurisation de la connexion . . .
                \u00A0\u00A0\u00A0\u00A0- Génération de clés SSH...
                \u00A0\u00A0\u00A0\u00A0- Etablissement d'un tunnel VPN...
                \u00A0\u00A0\u00A0\u00A0- Activation du firewall...
                Connexion sécurisée établie`,
                speed:2,
                setter:setPendingSentence2,
                ending:() => {
                    setTimeout(() => {
                        presentationConsoleRef.current.classList.add("presentationBox-opacity-out")
                    }, 500);
                    setTimeout(() => {
                        dispatch(update_onPending(false))
                    }, 1500);
                }
    
            })
    
            return(() => {
                clearTimeout(timeoutID)
            })
        }
    }, [loadSentence2])

    return{
        visible,
        pendingSentence1,
        pendingSentence2,
        cursorSentenceRef,
        presentationConsoleRef
    }
}