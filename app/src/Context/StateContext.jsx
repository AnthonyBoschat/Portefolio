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
        {id: 0, text:"Bonjour tout le monde", position: "beginning"},
        {id: 1, text:"Je m'appelle Anthony", position: "beginning"},
    ])

    

    const injectMessage = () => {
        setMessageDisplay("")
        const messageIndex = messageMap.findIndex(message => message.id === messageMapIndex)
        console.log(messageIndex)
        let step = 0
        const intervalID = setInterval(() => {
            if(startTyping){
                step++
                setMessageDisplay(currentMessageDisplay => (currentMessageDisplay + messageMap[messageIndex].text[step - 1]))
                if(step >= messageMap[messageIndex].text.length){
                    clearInterval(intervalID)
                    setMessageMapIndex(current => current + 1)
                }
            }
        }, readingSpeed);
    }


    ///// RENDER DU CONTEXTE //////
    return(
        <StateContext.Provider value={{injectMessage, index, setIndex, messageDisplay, setMessageDisplay, firstDelay, setFirstDelay, startTyping, setStartTyping, readingSpeed, setReadingSpeed}}>
            {children}
        </StateContext.Provider>
    )
}