import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initalState={
    studentTaskReport: null,
    loading: false,
    error: null
}

export const getStudentTaskReport = createAsyncThunk('getStudentTaskReport', async (data) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const res = postApi(`${burl}/report/taskMarkByStudent`,data,token);
        //console.log(res);
        return res; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getStudentTaskReportSlice = createSlice({
    name: "getStudentTaskReport",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStudentTaskReport.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        });
        builder.addCase(getStudentTaskReport.fulfilled, (state, action) => {
            //console.log("getStudentTaskReport fulfilled", action.payload);
            state.loading = false;
            state.studentTaskReport = action.payload.data;
        });
        builder.addCase(getStudentTaskReport.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
            //console.log("error", action.error);
        });
    }
})

export default getStudentTaskReportSlice.reducer