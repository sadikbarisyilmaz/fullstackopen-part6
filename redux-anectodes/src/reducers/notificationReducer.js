import { createSlice } from "@reduxjs/toolkit"

export const notificationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        createNotification(state, action) {
            return action.payload
        },
        clearNotification(state, action) {
            return ""
        }

    }
})


export const { createNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer