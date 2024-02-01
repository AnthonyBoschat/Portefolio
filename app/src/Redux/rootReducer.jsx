import { combineReducers } from "@reduxjs/toolkit"
import { TypingSentenceSliceReducer } from "../Components/TypingSentence/TypingSentenceSlice"
import { LoadingSliceReducer } from "../Components/Loading/LoadingSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
    typingSentence:TypingSentenceSliceReducer,
})

export default rootReducer