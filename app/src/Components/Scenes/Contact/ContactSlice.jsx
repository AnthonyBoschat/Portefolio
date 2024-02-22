import {createSlice} from "@reduxjs/toolkit"

const contactSlice = createSlice({
    name:"contact",
    initialState:{
        animationEnd:false,
        emailSend:false,
        emailSendConfirmation:false
    },
    reducers:{
        update_animationEnd:(state,action) => {
            state.animationEnd = action.payload
        },
        update_emailSend:(state,action) => {
            state.emailSend = action.payload
        },
        update_emailSendConfirmation:(state,action) => {
            state.emailSendConfirmation = action.payload
        },
        reset_contactSlice:(state,action) => {
            return state =  {
                animationEnd:false,
                emailSend:false,
                emailSendConfirmation:false
            }
        }
    },
})

export const contactSliceReducer = contactSlice.reducer
export const {
    update_animationEnd,
    update_emailSend,
    update_emailSendConfirmation,
    reset_contactSlice
} = contactSlice.actions