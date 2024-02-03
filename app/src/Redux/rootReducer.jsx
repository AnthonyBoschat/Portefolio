import { combineReducers } from "@reduxjs/toolkit"
import { LoadingSliceReducer } from "../Components/Loading/LoadingSlice"
import { NavSliceReducer } from "../Components/Nav/NavSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
    nav:NavSliceReducer
})

export default rootReducer