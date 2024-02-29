import {createSlice} from "@reduxjs/toolkit"

const circuitSlice = createSlice({
    name:"circuit",
    initialState:{
        cancelAnimation:false,
        impulseHyperActivation:false
    },
    reducers:{
        update_cancelAnimation:(state,action) => {
            state.cancelAnimation = action.payload
        },
        update_impulseHyperActivation:(state,action) => {
            state.impulseHyperActivation = action.payload
        }
    },
})

export const circuitSliceReducer = circuitSlice.reducer
export const {
    update_cancelAnimation,
    update_impulseHyperActivation
} = circuitSlice.actions