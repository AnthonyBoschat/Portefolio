import {createSlice} from "@reduxjs/toolkit"

const LoadingSlice = createSlice({
    name:"loading",
    initialState:{
        launch:{
            onLoad:true
        },
        sphere:{
            onLoad:true
        },
    },
    reducers:{
        update_loadingLaunch:(state,action) => {
            state.launch.onLoad = action.payload
        },
        update_loadingSphere:(state,action) => {
            state.sphere.onLoad = action.payload
        }
    },
})

export const LoadingSliceReducer = LoadingSlice.reducer
export const {
    update_loadingLaunch,
    update_loadingSphere
} = LoadingSlice.actions