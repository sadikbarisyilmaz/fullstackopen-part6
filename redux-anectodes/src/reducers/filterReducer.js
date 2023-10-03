import { createSlice } from "@reduxjs/toolkit"

export const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        createFilter(state, action) {
            // console.log('action', action)

            return action.payload
        }
    }
})


export const { createFilter } = filterSlice.actions
export default filterSlice.reducer