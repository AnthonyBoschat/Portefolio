import {createSlice} from "@reduxjs/toolkit"

const LoadingLaunchSlice = createSlice({
    name:"loadingLaunch",
    initialState:{
        onLoad:true,
    },
    reducers:{
        update_onLoad:(state, action) => {
            state.onLoad = action.payload
        },
    },
})

export const LoadingLaunchSliceReducer = LoadingLaunchSlice.reducer
export const {
    update_onLoad
} = LoadingLaunchSlice.actions