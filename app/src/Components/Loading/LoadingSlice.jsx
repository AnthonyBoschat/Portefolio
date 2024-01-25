import {createSlice} from "@reduxjs/toolkit"

const LoadingSlice = createSlice({
    name:"loading",
    initialState:{
        onLoad:true,
    },
    reducers:{
        update_onLoad:(state, action) => {
            state.onLoad = action.payload
        },
    },
})

export const LoadingSliceReducer = LoadingSlice.reducer
export const {
    update_onLoad
} = LoadingSlice.actions