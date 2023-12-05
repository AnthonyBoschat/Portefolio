import { useReducer } from "react"

export const initialGlobalParameter = {
    firstDelay:1500, // Temp d'apparition avant la première boite de dialogue
    readingSpeed:25, // Vitesse d'écriture du texte dans les boites de dialogues
}

export const useGlobalParameter = () => {

    const ACTIONS_GLOBALPARAMETER = {
        UPDATE_READINGSPEED : "UPDATE_READINGSPEED",
    }

    const reducer = (state, action) => {
        switch(action.type){
            case ACTIONS_GLOBALPARAMETER.UPDATE_READINGSPEED:
                console.log(action.payload)
                return {...state, readingSpeed:parseInt(action.payload)}
        }
    }

    const [globalParameter, dispatchStateGlobalParameter] = useReducer(reducer, initialGlobalParameter)

    return{
        globalParameter,
        ACTIONS_GLOBALPARAMETER,
        dispatchStateGlobalParameter
    }
}