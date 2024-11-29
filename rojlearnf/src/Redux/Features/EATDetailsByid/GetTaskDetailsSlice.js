import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initalState = {
    taskDetails: null,
    loading: false,
    error: null
}

export const getTaskDetails = createAsyncThunk('getTaskDetails', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/task/getTask/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
})

export const getTaskDetailsSlice = createSlice({
    name: "getTaskDetails",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTaskDetails.pending, (state) => {
                //console.log("pending");
                state.loading = true
            })
            .addCase(getTaskDetails.fulfilled, (state, action) => {
                //console.log("getTaskDetails fulfilled", action.payload);
                state.loading = false
                state.taskDetails = action.payload.data
            })
            .addCase(getTaskDetails.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false
                state.error = action.error.message
                //console.log("error", action.error)
            })
    }
})      

export default getTaskDetailsSlice.reducer