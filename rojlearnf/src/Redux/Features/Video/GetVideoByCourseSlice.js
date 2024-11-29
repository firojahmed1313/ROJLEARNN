import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initalState = {
    videoByCourse: null,
    loading: false,
    error: null
}

export const getVideoByCourse = createAsyncThunk('getVideoByCourse', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    //console.log(id)
    //console.log(token)
    try {
        const data = getApi(`${burl}/video/getAllVideoByCourseId/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
})

export const getVideoByCourseSlice = createSlice({
    name: "getVideoByCourse",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVideoByCourse.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        builder.addCase(getVideoByCourse.fulfilled, (state, action) => {
            //console.log("getVideoByCourse fulfilled", action.payload);
            state.loading = false;
            state.videoByCourse = action.payload.data;
        })
        builder.addCase(getVideoByCourse.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.payload;
            //console.log("error", action.error);
        })
    }
})

export default getVideoByCourseSlice.reducer