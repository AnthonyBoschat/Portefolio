import {createSlice} from "@reduxjs/toolkit"

const ProfilSlice = createSlice({
    name:"profil",
    initialState:{
        cvOnload:false
    },
    reducers:{
        update_cvOnload:(state,action) => {
            state.cvOnload = action.payload
        }
    },
})

export const ProfilSliceReducer = ProfilSlice.reducer
export const {
    update_cvOnload
} = ProfilSlice.actions