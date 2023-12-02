import { useReducer } from "react"



export const useOptions = () => {

    const optionsStateInitial = {
        display:false,
        animationClass:null,
    }

    const ACTION_OPTIONS = {
        OPEN:"OPEN",
        CLOSE:"CLOSE",
        APPARITION:"APPARITION",
        DISPARITION:"DISPARITION",
    }

    const dispatch = (state, action) => {
        switch(action.type){

            case ACTION_OPTIONS.OPEN:
                return {...state, display:true, animationClass:"optionsApparition"}

            case ACTION_OPTIONS.CLOSE:
                return{...state, display:false}
        
            case ACTION_OPTIONS.DISPARITION:
                return{...state, animationClass:"optionsDisparition"}

            default:
                return state
        }
    }

    const [optionsState, dispatchOptions] = useReducer(dispatch, optionsStateInitial)

    return{
        optionsState,
        dispatchOptions,
        ACTION_OPTIONS,
    }
}