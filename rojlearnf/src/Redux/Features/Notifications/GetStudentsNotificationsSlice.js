import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initialState = {
    notifications: null,
    loading: false,
    error: null
}

export const getStudentsNotifications = createAsyncThunk('getStudentsNotifications', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/notification/getNotification/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getStudentsNotificationsSlice = createSlice({
    name: "getStudentsNotifications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudentsNotifications.pending, (state) => {
                //console.log("pending")
                state.loading = true
            })
            .addCase(getStudentsNotifications.fulfilled, (state, action) => {
                //console.log("Notifications fulfilled")
                state.loading = false
                state.notifications = action.payload.data
            })
            .addCase(getStudentsNotifications.rejected, (state, action) => {
                //console.log("rejected")
                state.loading = false
                state.error = action.error.message
                //console.log("error", action.error)
            
            })
    }
})

export default getStudentsNotificationsSlice.reducer