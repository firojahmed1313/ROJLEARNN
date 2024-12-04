import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initalState = {
    studentFeedback: null,
    loading: false,
    error: null
}

export const getStudentFeedback = createAsyncThunk('getStudentFeedback', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/feedback/user/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getStudentFeedbackSlice = createSlice({
    name: "getStudentFeedback",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getStudentFeedback.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        .addCase(getStudentFeedback.fulfilled, (state, action) => {
            //console.log("getStudentFeedback fulfilled", action.payload);
            state.loading = false;
            state.studentFeedback = action.payload.data;
        })
        .addCase(getStudentFeedback.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default getStudentFeedbackSlice.reducer