import React, { createContext, useState } from "react";

// On définie un contexte
export const StateContext = createContext();

// On définie son provider et les state par défaut
export const StateProvider = ({children}) => {
    const [firstDelay, setFirstDelay] = useState(1500)
    const [startTyping, setStartTyping] = useState(false)
    const [readingSpeed, setReadingSpeed] = useState(25)
    const [index, setIndex] = useState(0)
    const [messageDisplay, setMessageDisplay] = useState("")


    const [messageMapIndex, setMessageMapIndex] = useState(0)
    const [messageMap, setMessageMap] = useState([
        {id: 0, text:"Bonjour visiteur.", position: "beginning"},
        {id: 1, text:"Bienvenu sur le CV interactif d'Anthony.", position: "beginning"},
        {id: 2, text:"Je m'appelle Roboto3000.", position: "beginning"},
    ])

    

    const injectMessage = () => {
        // On récupère l'index du message dans MAP qui correspond au step de message en cours
        const indexOfThisMessageInMap = messageMap.findIndex(message => message.id === messageMapIndex)
        // Sécurité pour eviter de cliquer vers un message qui n'existe pas
        if(indexOfThisMessageInMap >= 0)
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
                        // On change le step du message à afficher
                        setMessageMapIndex(current => current + 1)
                    }
                }
            }, readingSpeed); 
        }
        
    }


    ///// RENDER DU CONTEXTE //////
    return(
        <StateContext.Provider value={{injectMessage, index, setIndex, messageDisplay, setMessageDisplay, firstDelay, setFirstDelay, startTyping, setStartTyping, readingSpeed, setReadingSpeed}}>
            {children}
        </StateContext.Provider>
    )
}