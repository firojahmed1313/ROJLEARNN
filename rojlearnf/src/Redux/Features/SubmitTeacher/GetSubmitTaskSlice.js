import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initalState = {
    submitTask: null,
    loading: false,
    error: null
}

export const getSubmitTask = createAsyncThunk('getSubmitTask', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/submit/getTaskSubmitByTaskid/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
})


export const getSubmitTaskSlice = createSlice({
    name: "getSubmitTask",
    initialState: initalState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(getSubmitTask.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        builder.addCase(getSubmitTask.fulfilled, (state, action) => {
            //console.log("getSubmitTask fulfilled", action.payload);
            state.loading = false;
            state.submitTask = action.payload.data;
        })
        builder.addCase(getSubmitTask.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
            //console.log("error", action.error);
        })
        
    }

})

export default getSubmitTaskSlice.reducer