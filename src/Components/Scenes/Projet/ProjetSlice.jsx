import {createSlice} from "@reduxjs/toolkit"

const ProjetSlice = createSlice({
    name:"projet",
    initialState:{
        projetSelected:null
    },
    reducers:{
        update_projetSelected:(state,action) => {
            state.projetSelected = action.payload
        }
    },
}) 

export const ProjetSliceReducer = ProjetSlice.reducer
export const {
    update_projetSelected,
} = ProjetSlice.actions