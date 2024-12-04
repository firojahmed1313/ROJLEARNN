import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../Api/Api";
import Cookies from "js-cookie";
const initialState={
    likeDetails:null,
    loading:false,
    error:null
    
}
export const getLikeDetails = createAsyncThunk('getLikeDetails', async (data) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const res = postApi(`${burl}/activity/likeDetails`,data,token);
        //console.log(res);
        return res; 
    } catch (error) {
       //console.warn(error);
    }
})

export const getLikeDetailsSlice = createSlice({
    name: "getLikeDetails",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(getLikeDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.likeDetails = action.payload.data;
           //console.log(action.payload.data)
        })
        builder.addCase(getLikeDetails.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getLikeDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    } 
})

export default getLikeDetailsSlice.reducer