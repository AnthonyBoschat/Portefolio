import { combineReducers } from "@reduxjs/toolkit"
import { LoadingSliceReducer } from "../Components/Loading/LoadingSlice"
import { PendingSliceReducer } from "../Components/Pending/PendingSlice"
import { TypingSentenceSliceReducer } from "../Components/TypingSentence/TypingSentenceSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
    typingSentence:TypingSentenceSliceReducer,
    pending:PendingSliceReducer,
})

export default rootReducer