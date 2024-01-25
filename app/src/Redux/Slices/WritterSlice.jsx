import {createSlice} from "@reduxjs/toolkit"

const WritterSlice = createSlice({
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

export const WritterSliceReducer = WritterSlice.reducer
export const {
    updateCursor
} = WritterSlice.actions