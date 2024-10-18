import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getApi } from "../../Api/Api";
const initialState = {
    taskbyid: null,
    loading: false,
    error: null
}

export const getAllTaskByCourse = createAsyncThunk('getAllTaskByCourse', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    console.log(id)
    console.log(token)
    try {
        const data = getApi(`${burl}/task/getTaskByCourse/${id}`,token);
        console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
})

export const getAllTaskByCourseSlice = createSlice({
    name: "getAllTaskByCourse",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTaskByCourse.pending, (state, action) => {
                console.log("pending");
                state.loading = true
            })
            .addCase(getAllTaskByCourse.fulfilled, (state, action) => {
                console.log("getAllTaskByCourse fulfilled", action.payload)
                state.loading = false
                state.taskbyid = action.payload.data
            })
            .addCase(getAllTaskByCourse.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false
                state.error = action.error.message
                console.log("error", action.error)
            })
    }
})

export default getAllTaskByCourseSlice.reducer