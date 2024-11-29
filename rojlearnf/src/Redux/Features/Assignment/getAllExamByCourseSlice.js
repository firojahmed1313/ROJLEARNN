import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initialState = {
    exambyid: null,
    loading: false,
    error: null
}

export const getAllExamByCourse = createAsyncThunk('getAllExamByCourse', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/exam/getExamByCourse/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getAllExamByCourseSlice = createSlice({
    name: "getAllExamByCourse",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllExamByCourse.pending, (state) => {
                //console.log("pending");
                state.loading = true;
            })
            .addCase(getAllExamByCourse.fulfilled, (state, action) => {
                //console.log("getAllExamByCourse fulfilled", action.payload);
                state.loading = false;
                state.exambyid = action.payload.data;
            })
            .addCase(getAllExamByCourse.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false;
                state.error = action.payload;
                //console.log("error", action.error);
            })
    }
})

export default getAllExamByCourseSlice.reducer