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
            speed:2,
            whiteSpace:true,
            sentence:
`Initialisation ...
Récupération des données ...
Vérifications des dépendances systèmes . . .
    - react@18.2.0 OK
    - redux@5.0.1 OK 
    - react-redux@9.1.0 OK
    - @reduxjs/toolkit@2.1.0 OK
    - react-router-dom@6.21.3 OK
    - npm@10.3.0 OK
    - three@0.160.1 OK
Démarrage de l'environnement de développement`,
            
            // Trouver un moyen de faire une reaction en chaine comme avec les useEffect dans usePending
        },
        {
            timeout:3000,
            speed:2,
            whiteSpace:true,
            sentence:
`


Sécurisation de la connexion . . .
    - Génération de clés SSH...
    - Etablissement d'un tunnel VPN...
    - Activation du firewall...
Connexion sécurisée établie`,
            
        },
        {
            timeout:4000,
            speed:4,
            whiteSpace:true,
            sentence:
`


Chargement du programme principal... `,
            
        },
        {timeout:4200, speed:4, whiteSpace:true, sentence:
            `
... 0%`,
        },
        {timeout:4300, speed:4, whiteSpace:true, sentence:
            `
... 10%`,
        },
        {timeout:4400, speed:4, whiteSpace:true, sentence:
            `
... 20%`,
        },
        {timeout:4500, speed:4, whiteSpace:true, sentence:
            `
... 30%`,
        },
        {timeout:4600, speed:4, whiteSpace:true, sentence:
            `
... 40%`,
        },
        {timeout:4700, speed:4, whiteSpace:true, sentence:
            `
... 50%`,
        },
        {timeout:4800, speed:4, whiteSpace:true, sentence:
            `
... 60%`,
        },
        {timeout:4900, speed:4, whiteSpace:true, sentence:
            `
... 80%`,
        },
        {timeout:5000, speed:4, whiteSpace:true, sentence:
            `
... 99%`,
        },
        {
            timeout:5500, speed:4, whiteSpace:true,
            sentence:
            `
... 100%`,
        },
        {
            timeout:6000, speed:1, whiteSpace:true,
            sentence:
            `


          •   •  •_  •   •
        _  \\__|    | |__/  _
     •_/ \\____\\_   |_/____/ \\_•
   •__    •_/   \\_/    \\_•   __•
      \\____     |0|     ____/
     •_/   \\____/ \\____/   \\_•
       •__   /  |    \\    __•
          \\_|   |     |__/
       •___/   / \\_•   \\___•
         |    |_         |
         •      |_•      •
`,
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
        }
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