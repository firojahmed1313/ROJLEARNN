import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";


const initalState = {
    studentAllExam: null,
    loading: false,
    error: null,
};

export const getStudentAllExam = createAsyncThunk('getStudentAllExam', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/student/exam/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getStudentAllExamSlice = createSlice({
    name: "getStudentAllExam",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudentAllExam.pending, (state, action) => {
                //console.log("pending");
                state.loading = true;
            })
            .addCase(getStudentAllExam.fulfilled, (state, action) => {
                //console.log("getStudentAllExam fulfilled", action.payload);
                state.loading = false;
                state.studentAllExam = action.payload.data;
            })
            .addCase(getStudentAllExam.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false;
                state.error = action.error;
                //console.log("error", action.error);
            })
    }
})