import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sphere from "../Sphere/Sphere"
import Console from "../../Constructors/Console/Console";
import { update_loadingSphere } from "./LoadingSlice";
import TypingSentenceCompiler from "../../Constructors/TypingSentence/TypingSentenceCompiler";
import CircuitCompiler from "../../Constructors/Circuit/CircuitCompiler";


function Loading_Acceuil(){

    const onLoad = useSelector(store => store.loading.sphere.onLoad)
    const presentationConsoleRef = useRef()
    const [pourcent, setPourcent] = useState(0)

    const dispatch = useDispatch()

    const sentencesConfiguration = [
        {
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
            // Trouver un moyen de faire une reaction en chaine comme avec les useEffect dans usePending
        },
        {
            timeout:3000,
            sentence:
            `


            Sécurisation de la connexion . . .
            \u00A0\u00A0\u00A0\u00A0- Génération de clés SSH...
            \u00A0\u00A0\u00A0\u00A0- Etablissement d'un tunnel VPN...
            \u00A0\u00A0\u00A0\u00A0- Activation du firewall...
            Connexion sécurisée établie`,
            speed:2,
        },
        {
            timeout:5000,
            sentence:
            `




            Chargement du programme principal... `,
            speed:4,
        },
        {timeout:5200, speed:4, sentence:
            `
            ... 0%`,
        },
        {timeout:5300, speed:4, sentence:
            `
            ... 10%`,
        },
        {timeout:5400, speed:4, sentence:
            `
            ... 20%`,
        },
        {timeout:5500, speed:4, sentence:
            `
            ... 30%`,
        },
        {timeout:5600, speed:4, sentence:
            `
            ... 40%`,
        },
        {timeout:5700, speed:4, sentence:
            `
            ... 50%`,
        },
        {timeout:5800, speed:4, sentence:
            `
            ... 60%`,
        },
        {timeout:5900, speed:4, sentence:
            `
            ... 80%`,
        },
        {timeout:6000, speed:4, sentence:
            `
            ... 99%`,
        },
        {
            timeout:6500, speed:4,
            sentence:
            `
            ... 100%`,
            ending:() => {
                setTimeout(() => {
                    if(presentationConsoleRef.current){
                        presentationConsoleRef.current.classList.add("presentationBox-opacity-out")
                    }
                }, 500);
                setTimeout(() => {
                    if(presentationConsoleRef.current){
                        dispatch(update_loadingSphere(false))
                    }
                }, 1500);
            }
        },
    ]

    return(
        <>
            {onLoad && (
                <Console 
                    consoleConfiguration = {{
                        typingSentence:<TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration}/>,
                        presentationConsoleRef:presentationConsoleRef
                    }}
                />
            )}
            {!onLoad && (
                // <Sphere/>
                <CircuitCompiler/>
            )}
        </>
    )
    
}

export default Loading_Acceuil;