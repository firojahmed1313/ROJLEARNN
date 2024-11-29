import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";


const initalState = {
    courseRateing: null,
    loading: false,
    error: null
}

export const getCourseRateing = createAsyncThunk('getCourseRateing', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/rateing/getRateing/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    

})

export const getCourseRateingSlice = createSlice({
    name: "getCourseRateing",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourseRateing.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        builder.addCase(getCourseRateing.fulfilled, (state, action) => {
            //console.log("getCourseRateing fulfilled", action.payload);
            state.loading = false;
            state.courseRateing = action.payload;
        })
        builder.addCase(getCourseRateing.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error;
            //console.log("error", action.error);
        })
    }
})  

export default getCourseRateingSlice.reducer