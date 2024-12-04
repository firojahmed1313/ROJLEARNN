import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../Api/Api";
import Cookies from "js-cookie";
const initialState={
    ratingDetails:null,
    loading:false,
    error:null
    
}
export const getRatingDetails = createAsyncThunk('getRatingDetails', async (data) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const res = postApi(`${burl}/activity/ratingDetails`,data,token);
        //console.log(res);
        return res; 
    } catch (error) {
       //console.warn(error);
    }
})

export const getRatingDetailsSlice = createSlice({
    name: "getRatingDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRatingDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getRatingDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.ratingDetails = action.payload.data;
        });
        builder.addCase(getRatingDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default getRatingDetailsSlice.reducer