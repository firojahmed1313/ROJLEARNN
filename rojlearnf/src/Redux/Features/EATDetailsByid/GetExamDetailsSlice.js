import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initalState = {
    examDetails: null,
    loading: false,
    error: null
}

export const getExamDetails = createAsyncThunk('getExamDetails', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/exam/getExam/${id}`,token);
        console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getExamDetailsSlice = createSlice({
    name: "getExamDetails",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getExamDetails.pending, (state) => {
                console.log("pending");
                state.loading = true
            })
            .addCase(getExamDetails.fulfilled, (state, action) => {
                console.log("getExamDetails fulfilled", action.payload);
                state.loading = false
                state.examDetails = action.payload.data
            })
            .addCase(getExamDetails.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false
                state.error = action.error.message
            }) 
    }
})

export default getExamDetailsSlice.reducer