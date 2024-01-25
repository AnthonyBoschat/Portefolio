import { combineReducers } from "@reduxjs/toolkit"
import { LoadingSliceReducer } from "../Components/Loading/LoadingSlice"
import { WritterSliceReducer } from "../Features/Writter/Slice/WritterSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
    writter:WritterSliceReducer,
})

export default rootReducer