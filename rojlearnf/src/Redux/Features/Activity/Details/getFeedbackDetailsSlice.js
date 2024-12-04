
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../Api/Api";
import Cookies from "js-cookie";
const initialState={
    feedbackDetails:null,
    loading:false,
    error:null
    
}
export const getFeedbackDetails = createAsyncThunk('getFeedbackDetails', async (data) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const res = postApi(`${burl}/activity/feedbackDetails`,data,token);
        //console.log(res);
        return res; 
    } catch (error) {
       //console.warn(error);
    }
})

export const getFeedbackDetailsSlice = createSlice({
    name: "getFeedbackDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFeedbackDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getFeedbackDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.feedbackDetails = action.payload.data;
        });
        builder.addCase(getFeedbackDetails.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    }
})

export default getFeedbackDetailsSlice.reducer