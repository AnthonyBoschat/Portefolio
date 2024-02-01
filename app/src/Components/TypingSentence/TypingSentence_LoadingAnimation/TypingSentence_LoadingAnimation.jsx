import React from "react";
import { useDispatch } from "react-redux";
import { update_onPending } from "../../Pending/PendingSlice";
import TypingSentenceCompiler from "../TypingSentenceCompiler";
import usePending from "../../Pending/usePending";

function TypingSentence_Loading(){

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
            ending:false,
            // Trouver un moyen de faire une reaction en chaine comme avec les useEffect dans usePending
        },
        {
            timeout:4000,
            sentence:
            `


            Sécurisation de la connexion . . .
            \u00A0\u00A0\u00A0\u00A0- Génération de clés SSH...
            \u00A0\u00A0\u00A0\u00A0- Etablissement d'un tunnel VPN...
            \u00A0\u00A0\u00A0\u00A0- Activation du firewall...
            Connexion sécurisée établie`,
            speed:2,
            ending:() => {
                // Ajout du style pour faire disparaitre la boite
                dispatch(update_onPending(false))
            }
        }
    ]

    return(
        <>
            <TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration}/>
        </>
    )
}

export default TypingSentence_Loading;




                
