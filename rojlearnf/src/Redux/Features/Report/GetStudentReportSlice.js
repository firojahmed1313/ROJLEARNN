import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";    

const initalState={
    studentReport: null,
    loading: false,
    error: null
}

export const getStudentReport = createAsyncThunk('getStudentReport', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/report/markByStudent/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getStudentReportSlice = createSlice({
    name: "getStudentReport",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudentReport.pending, (state) => {
                //console.log("pending");
                state.loading = true;
            })
            .addCase(getStudentReport.fulfilled, (state, action) => {
                //console.log("getStudentReport fulfilled", action.payload);
                state.loading = false;
                state.studentReport = action.payload.data;
            })
            .addCase(getStudentReport.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false;
                state.error = action.error.message;
                //console.log("error", action.error);
            });
    },
})

export default getStudentReportSlice.reducer;