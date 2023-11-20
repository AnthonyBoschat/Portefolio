import React, { createContext, useState } from "react";

// On définie un contexte
export const StateContext = createContext();

// On définie son provider et les state par défaut
export const StateProvider = ({children}) => {
    const [firstDelay, setFirstDelay] = useState(1500)
    const [startTyping, setStartTyping] = useState(false)
    const [readingSpeed, setReadingSpeed] = useState(25)
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

    // Aller à la route X et aller au premier message
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
                    setMessageDisplay(currentMessageDisplay => (currentMessageDisplay + messageMap[indexOfThisMessageInMap].text[step - 1]))
                    // Quand on arrive au bout du message
                    if(step >= messageMap[indexOfThisMessageInMap].text.length){
                        // On clear l'interval
                        clearInterval(intervalID)
                    }
                }
            }, readingSpeed); 
        }
        
    }


    ///// RENDER DU CONTEXTE //////
    return(
        <StateContext.Provider value={{messageMapIndex, setMessageMapIndex, setResetRootIndex, rootIndex, setRootIndex, injectMessage, messageDisplay, setMessageDisplay, firstDelay, setFirstDelay, startTyping, setStartTyping, readingSpeed, setReadingSpeed}}>
            {children}
        </StateContext.Provider>
    )
}