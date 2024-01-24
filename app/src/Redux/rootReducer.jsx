import { combineReducers } from "@reduxjs/toolkit"
import { LifeCycleSliceReducer } from "./Slices/LifeCycleSlice"

const rootReducer = combineReducers({
    lifeCycle:LifeCycleSliceReducer // Ajouter les sliceReducer voulu
})

export default rootReducer