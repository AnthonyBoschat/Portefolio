import { combineReducers } from "@reduxjs/toolkit"
import { LoadingSliceReducer } from "../Components/Scenes/Loading/LoadingSlice"
import { NavSliceReducer } from "../Components/Scenes/Nav/NavSlice"
import { ProjetSliceReducer } from "../Components/Scenes/Projet/ProjetSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
    nav:NavSliceReducer,
    projet:ProjetSliceReducer
})

export default rootReducer