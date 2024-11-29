import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getApi } from "../../Api/Api";

const initialState = {
    assignmentbyid: null,
    loading: false,
    error: null
}

export const getAllAssByCourse = createAsyncThunk('getAllAssByCourse', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/assignment/getAssignmentByCourse/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getAllAssByCourseSlice = createSlice({
    name: "getAllAssByCourse",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllAssByCourse.pending, (state, action) => {
                //console.log("pending");
                state.loading = true
            })
            .addCase(getAllAssByCourse.fulfilled, (state, action) => {
                //console.log("getAllAssByCourse fulfilled", action.payload)
                state.loading = false
                state.assignmentbyid = action.payload.data
            })
            .addCase(getAllAssByCourse.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false
                state.error = action.error.message
                //console.log("error", action.error)
            })
    }
})  

export default getAllAssByCourseSlice.reducer