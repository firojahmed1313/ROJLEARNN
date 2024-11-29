import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initalState = {
    submitass: null,
    loading: false,
    error: null
}

export const getSubmitass = createAsyncThunk('getSubmitass', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/submit/getAssSubmitByAssId/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
})

export const getSubmitassSlice = createSlice({
    name: "getSubmitass",
    initialState: initalState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(getSubmitass.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        builder.addCase(getSubmitass.fulfilled, (state, action) => {
            //console.log("getSubmitass fulfilled", action.payload);
            state.loading = false;
            state.submitass = action.payload.data;
        })
        builder.addCase(getSubmitass.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
            //console.log("error", action.error);
        })
        
    }
})

export default getSubmitassSlice.reducer