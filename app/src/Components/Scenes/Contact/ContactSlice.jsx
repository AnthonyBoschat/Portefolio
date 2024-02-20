import {createSlice} from "@reduxjs/toolkit"

const contactSlice = createSlice({
    name:"contact",
    initialState:{
        animationEnd:false
    },
    reducers:{
        update_animationEnd:(state,action) => {
            state.animationEnd = action.payload
        }
    },
})

export const contactSliceReducer = contactSlice.reducer
export const {
    update_animationEnd
} = contactSlice.actions