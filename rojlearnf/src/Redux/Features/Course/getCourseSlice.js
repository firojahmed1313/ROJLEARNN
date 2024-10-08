import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
const initialState = {
    course: null,
    isLoading: false,
    isError: false,
}
export const getCourseData = createAsyncThunk('getCourseData', async () => {
    const burl = import.meta.env.VITE_URL;
    try {
        const data = getApi(`${burl}/course/all`,null);
        console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getCourseSlice = createSlice({
    name: "getCourse",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCourseData.pending, (state, action) => {
                console.log("pending");
                state.isLoading = true;
            })
            .addCase(getCourseData.fulfilled, (state, action) => {
                console.log("fulfilled", action.payload);
                state.isLoading = false;
                state.course = action.payload;
            })
            .addCase(getCourseData.rejected, (state, action) => {
                console.log("rejected");
                state.isLoading = false;
                state.isError = true;
                console.log("error", action.error);
                
            })
    }
})

export default getCourseSlice.reducer