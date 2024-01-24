import {createSlice} from "@reduxjs/toolkit"

const LifeCycleSlice = createSlice({
    name:"lifeCycle",
    initialState:{
        initialisation:{
            onLoad:true
        }
    },
    reducers:{
        update_Initialisation_onLoad:(state, action) => {
            state.initialisation.onLoad = action.payload
        },
    },
})

export const LifeCycleSliceReducer = LifeCycleSlice.reducer
export const {
    update_Initialisation_onLoad
} = LifeCycleSlice.actions