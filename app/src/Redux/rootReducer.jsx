import { combineReducers } from "@reduxjs/toolkit"
import { LifeCycleSliceReducer } from "./Slices/LifeCycleSlice"
import { WritterSliceReducer } from "./Slices/WritterSlice"

const rootReducer = combineReducers({
    lifeCycle:LifeCycleSliceReducer,
    writter:WritterSliceReducer,
})

export default rootReducer