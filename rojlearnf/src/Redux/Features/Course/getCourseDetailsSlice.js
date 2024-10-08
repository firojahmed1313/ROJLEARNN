import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";


const initialState = {
    course: null,
    isLoading: false,
    isError: false,
}

export const getCourseDetailsData = createAsyncThunk('getCourseDetailsData', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    console.log(id);
    console.log(token);
    try {
        const data = getApi(`${burl}/course/${id}`,token);
        console.log(data);
        return data;
    } catch (error) {
        console.warn(error);
    }



})

export const getCourseDetailsSlice = createSlice({
    name: "getCourseDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCourseDetailsData.pending, (state, action) => {
                console.log("pending");
                state.isLoading = true;
            })
            .addCase(getCourseDetailsData.fulfilled, (state, action) => {
                console.log("fulfilled", action.payload);
                state.isLoading = false;
                state.course = action.payload;
            })
            .addCase(getCourseDetailsData.rejected, (state, action) => {
                console.log("rejected");
                state.isLoading = false;
                state.isError = true;
                console.log("error", action.error);

            })
    },
})

export default getCourseDetailsSlice.reducer