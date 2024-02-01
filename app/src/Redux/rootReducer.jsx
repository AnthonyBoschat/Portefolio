import { combineReducers } from "@reduxjs/toolkit"
import { LoadingSliceReducer } from "../Components/Loading/LoadingSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
})

export default rootReducer