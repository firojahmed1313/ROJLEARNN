import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../../Api/Api";
import Cookies from "js-cookie";

const initialState = {
    courseByTeacher: null,
    loading: false,
    error: null
}

export const getCourseByTeacher = createAsyncThunk('getCourseByTeacher', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/course/${id}/courses`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getCourseByTeacherSlice = createSlice({
    name: "getCourseByTeacher",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourseByTeacher.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        builder.addCase(getCourseByTeacher.fulfilled, (state, action) => {
            //console.log("getCourseByTeacher fulfilled", action.payload);
            state.loading = false;
            state.courseByTeacher = action.payload.data;
        })
        builder.addCase(getCourseByTeacher.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
            //console.log("error", action.error);
        })
    }
})

export default getCourseByTeacherSlice.reducer