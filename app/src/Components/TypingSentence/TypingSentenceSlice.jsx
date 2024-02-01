import {createSlice} from "@reduxjs/toolkit"

const TypingSentenceSlice = createSlice({
    name:"writter",
    initialState:{
        cursor:false
    },
    reducers:{
        updateCursor:(state,action) => {
            state.cursor = action.payload
        }
    },
})

export const TypingSentenceSliceReducer = TypingSentenceSlice.reducer
export const {
    updateCursor
} = TypingSentenceSlice.actions