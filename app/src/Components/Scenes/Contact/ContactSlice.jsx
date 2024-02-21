import {createSlice} from "@reduxjs/toolkit"

const contactSlice = createSlice({
    name:"contact",
    initialState:{
        animationEnd:false,
        emailSend:false
    },
    reducers:{
        update_animationEnd:(state,action) => {
            state.animationEnd = action.payload
        },
        update_emailSend:(state,action) => {
            state.emailSend = action.payload
        }
    },
})

export const contactSliceReducer = contactSlice.reducer
export const {
    update_animationEnd,
    update_emailSend
} = contactSlice.actions