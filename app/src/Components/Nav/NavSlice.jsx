import {createSlice} from "@reduxjs/toolkit"

const NavSlice = createSlice({
    name:"nav",
    initialState:{
        showSecondNav:false
    },
    reducers:{
        update_showSecondNav:(state,action) => {
            state.showSecondNav = action.payload
        }
    },
})

export const NavSliceReducer = NavSlice.reducer
export const {
    update_showSecondNav
} = NavSlice.actions