import { combineReducers } from "@reduxjs/toolkit"
import { LoadingLaunchSliceReducer } from "../Components/LoadingLaunch/LoadingLaunchSlice"
import { TypingSentenceSliceReducer } from "../Components/TypingSentence/TypingSentenceSlice"
import { LoadingAnimationSliceReducer } from "../Components/LoadingAnimation/LoadingAnimationSlice"

const rootReducer = combineReducers({
    loadingLaunch:LoadingLaunchSliceReducer,
    typingSentence:TypingSentenceSliceReducer,
    loadingAnimation:LoadingAnimationSliceReducer,
})

export default rootReducer