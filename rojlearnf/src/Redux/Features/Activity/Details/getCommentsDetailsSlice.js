
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { postApi } from "../../../Api/Api";
const initialState={
    commentsDetails:null,
    loading:false,
    error:null
    
}
export const getCommentsDetails = createAsyncThunk('getCommentsDetails', async (data) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const res = postApi(`${burl}/activity/commentsDetails`,data,token);
        //console.log(res);
        return res; 
    } catch (error) {
       //console.warn(error);
    }
})

export const getCommentsDetailsSlice = createSlice({
    name: "getCommentsDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCommentsDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCommentsDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.commentsDetails = action.payload.data;
        });
        builder.addCase(getCommentsDetails.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export default getCommentsDetailsSlice.reducer