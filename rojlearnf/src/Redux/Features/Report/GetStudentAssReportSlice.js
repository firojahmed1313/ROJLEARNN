import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initalState={
    studentAssReport: null,
    loading: false,
    error: null
}

export const getStudentAssReport = createAsyncThunk('getStudentAssReport', async (data) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const res = postApi(`${burl}/report/assMarkByStudent`,data,token);
        //console.log(res);
        return res; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getStudentAssReportSlice = createSlice({
    name: "getStudentAssReport",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStudentAssReport.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        });
        builder.addCase(getStudentAssReport.fulfilled, (state, action) => {
            //console.log("getStudentAssReport fulfilled", action.payload);
            state.loading = false;
            state.studentAssReport = action.payload.data;
        });
        builder.addCase(getStudentAssReport.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
            //console.log("error", action.error);
        });
    },
});

export default getStudentAssReportSlice.reducer