import {createSlice} from "@reduxjs/toolkit"

const NavSlice = createSlice({
    name:"nav",
    initialState:{
        navSelected:null,
        navRenderOnChange:false,
        animationHexagonEnd:false
    },
    reducers:{
        update_navSelected:(state,action) => {
            state.navSelected = action.payload
        },
        update_navRenderOnChange:(state,action) => {
            state.navRenderOnChange = action.payload
        },
        update_animationHexagonEnd:(state,action) => {
            state.animationHexagonEnd = action.payload
        }
    },
})

export const NavSliceReducer = NavSlice.reducer
export const {
    update_navSelected,
    update_navRenderOnChange,
    update_animationHexagonEnd
} = NavSlice.actions