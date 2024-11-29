import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";


const initialState = {
        course: null,
        loading: false,
        error: null,
};

export const getCourseofStudent = createAsyncThunk('getCourseofStudent', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/enroll/enrollments/student/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getCourseofStudentSlice = createSlice({
    name: "getCourseofStudent",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCourseofStudent.pending, (state, action) => {
                //console.log("pending");
                state.loading = true;
            })
            .addCase(getCourseofStudent.fulfilled, (state, action) => {
                //console.log("getCourseofStudent fulfilled", action.payload);
                state.loading = false;
                state.course = action.payload.data;
            })
            .addCase(getCourseofStudent.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false;
                state.error = action.error;
                //console.log("error", action.error);
            })
    }
})
    
    