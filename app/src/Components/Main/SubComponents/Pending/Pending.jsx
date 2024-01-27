import React, { useEffect, useRef, useState } from "react";
import useWhiteBar from "../../../../Features/Writter/CustomHook/useWhiteBar";
import useWrite from "../../../../Features/Writter/CustomHook/useWrite";

function Pending(){

    const [pendingSentence1, setPendingSentence1] = useState([])
    const [loadSentence2, setLoadSentence2] = useState(false)
    const [pendingSentence2, setPendingSentence2] = useState([])
    const {write} = useWrite()
    const cursorSentenceRef = useRef()
    const {cursorVisible, cursorDisparition} = useWhiteBar()
    const visible = cursorVisible ? {visibility:"visible"} : {visibility:"hidden"}

    useEffect(() => {
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
    }, [])

    useEffect(() => {
        if(loadSentence2){
            const timeoutID = write({
                timeout:1000,
                sentence:
                `
                
                Sécurisation de la connexion . . .
                \u00A0\u00A0\u00A0\u00A0- Génération de clés SSH...
                \u00A0\u00A0\u00A0\u00A0- Etablissement d'un tunnel VPN...
                \u00A0\u00A0\u00A0\u00A0- Activation du firewall...
                Connexion sécurisée établie`,
                speed:2,
                setter:setPendingSentence2
    
            })
    
            return(() => {
                clearTimeout(timeoutID)
            })
        }
    }, [loadSentence2])

    return(
        <div className="pendingSentenceBox">
            {pendingSentence1}
            {pendingSentence2}
            <div style={visible} ref={cursorSentenceRef} className="pendingSentenceCursor"></div>
        </div>
    )
}

export default Pending;