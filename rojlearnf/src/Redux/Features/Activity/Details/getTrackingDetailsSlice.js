import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../Api/Api";
import Cookies from "js-cookie";
const initialState={
    trackingDetails:null,
    loading:false,
    error:null
    
}
export const getTrackingDetails = createAsyncThunk('getTrackingDetails', async (data) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const res = postApi(`${burl}/activity/trackingDetails`,data,token);
        //console.log(res);
        return res; 
    } catch (error) {
       //console.warn(error);
    }
})

export const getTrackingDetailsSlice = createSlice({
    name: "getTrackingDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTrackingDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTrackingDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.trackingDetails = action.payload.data;
            })
            .addCase(getTrackingDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default getTrackingDetailsSlice.reducer;