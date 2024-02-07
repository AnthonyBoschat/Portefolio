import { combineReducers } from "@reduxjs/toolkit"
import { LoadingSliceReducer } from "../Components/Loading/LoadingSlice"
import { NavSliceReducer } from "../Components/Nav/NavSlice"
import { ProjetSliceReducer } from "../Components/Projet/ProjetSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
    nav:NavSliceReducer,
    projet:ProjetSliceReducer
})

export default rootReducer