import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initalState={
    studentComments: null,
    loading: false,
    error: null
}

export const getStudentComments = createAsyncThunk('getStudentComments', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/comments/user/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getStudentCommentsSlice = createSlice({
    name: "getStudentComments",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getStudentComments.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        .addCase(getStudentComments.fulfilled, (state, action) => {
            //console.log("getStudentComments fulfilled", action.payload);
            state.loading = false;
            state.studentComments = action.payload.data;
        })
        .addCase(getStudentComments.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
            //console.log("error", action.error);
        })
    }
})

export default getStudentCommentsSlice.reducer