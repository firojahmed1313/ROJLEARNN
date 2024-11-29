import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initalState={
    studentExamReport: null,
    loading: false,
    error: null
}

export const getStudentExamReport = createAsyncThunk('getStudentExamReport', async (data) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const res = postApi(`${burl}/report/examMarkByStudent`,data,token);
        //console.log(res);
        return res; 
    } catch (error) {
        //console.warn(error);
    }

})

export const getStudentExamReportSlice = createSlice({
    name: "getStudentExamReport",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudentExamReport.pending, (state) => {
                //console.log("pending");
                state.loading = true;
            })
            .addCase(getStudentExamReport.fulfilled, (state, action) => {
                //console.log("getStudentReport fulfilled", action.payload);
                state.loading = false;
                state.studentExamReport = action.payload.data;
            })
            .addCase(getStudentExamReport.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false;
                state.error = action.error.message;
                //console.log("error", action.error);
            })
    }
})

export default getStudentExamReportSlice.reducer