import React, {useState, useEffect, useReducer} from "react";
import { globalParameter } from "./GlobalParameter";
import { playSound } from "./UseSound";

const initialState = {
    startTyping:false,
    intervalID:null,
    injectMessage:false,
    messageDisplay:"",
    messageRouteIndex:0,
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



export const useRobotReducer = () => {

    const ACTIONS_ROBOT = {
        START_TYPING:"START_TYPING",
        SET_MESSAGE:"SET_MESSAGE",
        NEXT_MESSAGE:"NEXT_MESSAGE",
        PREVIOUS_MESSAGE:"PREVIOUS_MESSAGE",
        RESET:"RESET",
        SET_INTERVAL_ID:"SET_INTERVAL_ID",
    }

    function reducer(state, action){
        switch(action.type){

            case ACTIONS_ROBOT.START_TYPING:
                return {...state, startTyping : true}

            case ACTIONS_ROBOT.SET_MESSAGE:
                return {...state, messageDisplay : state.messageDisplay + action.payload}

            case ACTIONS_ROBOT.NEXT_MESSAGE:
                const lengthOfMessages = state.messageMap.filter(message => message.route === state.messageRouteIndex)
                if(state.messageMapIndex + 1 < lengthOfMessages.length){
                    return {...state, messageMapIndex : state.messageMapIndex + 1, messageDisplay : ""}
                }else{return state}
        
            case ACTIONS_ROBOT.PREVIOUS_MESSAGE:
                if(state.messageMapIndex !== 0){
                    return {...state, messageMapIndex : state.messageMapIndex - 1, messageDisplay : ""}
                }else{
                    return {...state, messageDisplay: "", injectMessage: !state.injectMessage}
                }
                

            case ACTIONS_ROBOT.SET_INTERVAL_ID:
                return{...state, intervalID : action.payload}

            case ACTIONS_ROBOT.RESET:
                if(state.intervalID !== null){clearInterval(state.intervalID)}
                return {
                    ...state,
                    rootIndex : parseInt(action.payload),
                    messageMapIndex : 0,
                    messageDisplay : "",
                    injectMessage: !state.injectMessage
                }
        }
    }

    const [state, dispatchStateRobot] = useReducer(reducer, initialState)

    const injectMessage = () => {
        if(state.intervalID !== null){
            clearInterval(state.intervalID)
        }

        const indexOfMessage = state.messageMap.findIndex(message => message.id === state.messageMapIndex && message.route === state.messageRouteIndex)

        dispatchStateRobot({type:ACTIONS_ROBOT.SET_MESSAGE, payload:""})
        let step = 0
        const intervalID = setInterval(() => {
            dispatchStateRobot({type:ACTIONS_ROBOT.SET_INTERVAL_ID, payload:intervalID})
            if(state.startTyping){
                playSound(step)
                step++
                dispatchStateRobot({type:ACTIONS_ROBOT.SET_MESSAGE, payload:state.messageMap[indexOfMessage].text[step - 1]})

                if(step >= state.messageMap[indexOfMessage].text.length){
                    clearInterval(intervalID)
                    dispatchStateRobot({type:ACTIONS_ROBOT.SET_INTERVAL_ID, payload:null})
                }
            }
        }, globalParameter.readingSpeed)
    }

    useEffect(() => {
        if(state.startTyping){
            injectMessage()
        }
    }, [state.startTyping])

    useEffect(() => {
        injectMessage()
    }, [state.messageMapIndex, state.messageRouteIndex, state.injectMessage])



    return {
        ACTIONS_ROBOT,
        state,
        dispatchStateRobot,
        injectMessage,
    }
}





























/*
export const useRobot = () => {

    const [intervalID, setIntervalID] = useState(null)
    const [startTyping, setStartTyping] = useState(false)
    const [messageDisplay, setMessageDisplay] = useState("")
    const [rootIndex, setRootIndex] = useState(0)
    const [messageMapIndex, setMessageMapIndex] = useState(0)
    const [messageMap, setMessageMap] = useState([
        {id: 0, text:"Bonjour.", route: 0},
        {id: 1, text:"Bienvenue sur le CV interactif d'Anthony.", route: 0},
        {id: 2, text:"Je vais vous guider à travers la présentation des différents projets d'Anthony, son parcours, sa personnalité, son entourage. Je vais vous guider à travers la présentation des différents projets d'Anthony, son parcours, sa personnalité, son entourage. Je vais vous guider à travers la présentation des différents projets d'Anthony, son parcours, sa personnalité, son entourage.", route: 0},
        {id: 3, text:"Je m'appelle Roboto3000.", route: 0},
        {id: 0, text:"On est sur la route 1, tu viens de cliquer sur le bouton de gauche", route: 1},
        {id: 1, text:"Tu viens de continuer sur la route 1 de gauche", route: 1},
        {id: 0, text:"On est sur la route 2, tu viens de cliquer sur le bouton de droite", route: 2},
        {id: 1, text:"Tu viens de continuer sur la route 2 de droite", route: 2},
    ])

    const setResetRootIndex = (numeroDeRoute) => {
        if(intervalID){
            clearInterval(intervalID)
        }
        setRootIndex(current => (parseInt(numeroDeRoute)))
        setMessageMapIndex(0)
        if(rootIndex === 0 && messageMapIndex === 0){
            injectMessage()
        }
    }

    const injectMessage = () => {
        if(intervalID){
            clearInterval(intervalID)
        }
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
                setIntervalID(intervalID)
                // Si startTyping est sur true ( après le firstDelay Déclencher dans Main.jsx)
                if(startTyping){
                    playSound(step)
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
                        setIntervalID(null)
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
*/