import {createSlice} from "@reduxjs/toolkit"

const LoadingAnimationSlice = createSlice({
    name:"loadingAnimation",
    initialState:{
        onLoad:true
    },
    reducers:{
        update_onLoad:(state,action) => {
            state.onLoad = action.payload
        }
    },
})

export const LoadingAnimationSliceReducer = LoadingAnimationSlice.reducer
export const {
    update_onLoad
} = LoadingAnimationSlice.actions