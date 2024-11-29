import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initalState = {
    studentTracking: null,
    loading: false,
    error: null
}   

export const getStudentTracking = createAsyncThunk('getStudentTracking', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/tracking/gettackingByUser/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getStudentTrackingSlice = createSlice({
    name: "getStudentTracking",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudentTracking.pending, (state) => {
                //console.log("pending");
                state.loading = true;
            })
            .addCase(getStudentTracking.fulfilled, (state, action) => {
                //console.log("getStudentTracking fulfilled", action.payload);
                state.loading = false;
                state.studentTracking = action.payload.data;

            })
            .addCase(getStudentTracking.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false;
                state.error = action.error.message;
                //console.log("error", action.error);
            })
    }
})