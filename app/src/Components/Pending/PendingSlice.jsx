import {createSlice} from "@reduxjs/toolkit"

const PendingSlice = createSlice({
    name:"pending",
    initialState:{
        onPending:true
    },
    reducers:{
        update_onPending:(state,action) => {
            state.onPending = action.payload
        }
    },
})

export const PendingSliceReducer = PendingSlice.reducer
export const {
    update_onPending
} = PendingSlice.actions