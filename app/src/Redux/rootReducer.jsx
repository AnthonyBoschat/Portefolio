import { combineReducers } from "@reduxjs/toolkit"
import { LoadingLaunchSliceReducer } from "../Components/Loading/LoadingLaunch/LoadingLaunchSlice"
import { TypingSentenceSliceReducer } from "../Components/TypingSentence/TypingSentenceSlice"
import { LoadingAnimationSliceReducer } from "../Components/Loading/LoadingAnimation/LoadingAnimationSlice"

const rootReducer = combineReducers({
    loadingLaunch:LoadingLaunchSliceReducer,
    typingSentence:TypingSentenceSliceReducer,
    loadingAnimation:LoadingAnimationSliceReducer,
})

export default rootReducer