import { combineReducers } from "@reduxjs/toolkit"
import { LoadingSliceReducer } from "../Components/Scenes/Loading/LoadingSlice"
import { NavSliceReducer } from "../Components/Scenes/Nav/NavSlice"
import { ProjetSliceReducer } from "../Components/Scenes/Projet/ProjetSlice"
import { contactSliceReducer } from "../Components/Scenes/Contact/ContactSlice"
import { circuitSliceReducer } from "../Components/Constructors/Circuit/CircuitSlice"
import { ProfilSliceReducer } from "../Components/Scenes/Profil/ProfilSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
    nav:NavSliceReducer,
    projet:ProjetSliceReducer,
    contact:contactSliceReducer,
    circuit:circuitSliceReducer,
    profil:ProfilSliceReducer
})

export default rootReducer