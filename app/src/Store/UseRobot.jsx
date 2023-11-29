import React, {useState, useEffect, useReducer} from "react";
import { globalParameter } from "./GlobalParameter";

const ACTIONS = {
    START_TYPING:"START_TYPING",
    SET_MESSAGE:"SET_MESSAGE",
    NEXT_MESSAGE:"NEXT_MESSAGE",
    RESET:"RESET",
}

const initialState = {
    startTyping:false,
    messageDisplay:"",
    rootIndex:0,
    messageMapIndex:0,
    messageMap:[
        {id: 0, text:"Bonjour.", route: 0},
        {id: 1, text:"Bienvenue sur le CV interactif d'Anthony.", route: 0},
        {id: 2, text:"Je m'appelle Roboto3000.", route: 0},
        {id: 0, text:"On est sur la route 1, tu viens de cliquer sur le bouton de gauche", route: 1},
        {id: 1, text:"Tu viens de continuer sur la route 1 de gauche", route: 1},
        {id: 0, text:"On est sur la route 2, tu viens de cliquer sur le bouton de droite", route: 2},
        {id: 1, text:"Tu viens de continuer sur la route 2 de droite", route: 2},
    ]
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.START_TYPING:
            return {...state, startTyping : true}
        case ACTIONS.SET_MESSAGE:
            return {...state, messageDisplay : action.payload}
        case ACTIONS.NEXT_MESSAGE:
            return {...state, messageMapIndex : state.messageMapIndex + 1}
        case ACTIONS.RESET:
            return {
                ...state,
                rootIndex : action.payload,
                messageMapIndex : 0,
                messageDisplay : "",
            }
    }
}

export const useRobotReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const injectMessage = () => {

    }


    return [state, dispatch, injectMessage]
}






























export const useRobot = () => {

    const [startTyping, setStartTyping] = useState(false)
    const [messageDisplay, setMessageDisplay] = useState("")
    const [rootIndex, setRootIndex] = useState(0)
    const [messageMapIndex, setMessageMapIndex] = useState(0)
    const [messageMap, setMessageMap] = useState([
        {id: 0, text:"Bonjour.", route: 0},
        {id: 1, text:"Bienvenue sur le CV interactif d'Anthony.", route: 0},
        {id: 2, text:"Je m'appelle Roboto3000.", route: 0},
        {id: 0, text:"On est sur la route 1, tu viens de cliquer sur le bouton de gauche", route: 1},
        {id: 1, text:"Tu viens de continuer sur la route 1 de gauche", route: 1},
        {id: 0, text:"On est sur la route 2, tu viens de cliquer sur le bouton de droite", route: 2},
        {id: 1, text:"Tu viens de continuer sur la route 2 de droite", route: 2},
    ])

    const setResetRootIndex = (numeroDeRoute) => {
        setRootIndex(current => (parseInt(numeroDeRoute)))
        setMessageMapIndex(0)
    }

    const injectMessage = () => {
        // On récupère l'index du message dans MAP qui correspond au step de message en cours
        const indexOfThisMessageInMap = messageMap.findIndex(message => (message.id === messageMapIndex && message.route === rootIndex))
        // Sécurité pour eviter de cliquer vers un message qui n'existe pas
        if(indexOfThisMessageInMap >= 0 && messageMap[indexOfThisMessageInMap].route === rootIndex)
        {
            // On reset le message
            setMessageDisplay("")
            // On initialialise le step à 0
            let step = 0
            // On déclenche un interval basé sur le readingSpeed
            const intervalID = setInterval(() => {
                // Si startTyping est sur true ( après le firstDelay Déclencher dans Main.jsx)
                if(startTyping){
                    // On incrémente step
                    step++
                    // On change le message
                    setMessageDisplay(currentMessageDisplay => {
                        return (currentMessageDisplay + messageMap[indexOfThisMessageInMap].text[step - 1])
                    })
                    // Quand on arrive au bout du message
                    if(step >= messageMap[indexOfThisMessageInMap].text.length){
                        // On clear l'interval
                        clearInterval(intervalID)
                    }
                }
            }, globalParameter.readingSpeed); 
        }
    }



    // Une fois que le premier délai est terminer
    useEffect(() => {
        if(startTyping){
            injectMessage()
        }
    }, [startTyping])


    // A chaque fois qu'on modifier l'index du message à afficher ou sa route
    useEffect(() => {
        injectMessage()
    }, [messageMapIndex, rootIndex])
    



    return {
        startTyping,
        setStartTyping,
        messageDisplay,
        setMessageDisplay,
        rootIndex,
        setRootIndex,
        messageMapIndex,
        setMessageMapIndex,
        messageMap,
        setMessageMap,
        setResetRootIndex,
        injectMessage
    }
}