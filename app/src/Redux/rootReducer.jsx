import { combineReducers } from "@reduxjs/toolkit"
import { LoadingSliceReducer } from "../Components/Loading/LoadingSlice"
import { WritterSliceReducer } from "../Features/Writter/Slice/WritterSlice"
import { PendingSliceReducer } from "../Components/Main/subComponents/Pending/PendingSlice"

const rootReducer = combineReducers({
    loading:LoadingSliceReducer,
    writter:WritterSliceReducer,
    pending:PendingSliceReducer,
})

export default rootReducer