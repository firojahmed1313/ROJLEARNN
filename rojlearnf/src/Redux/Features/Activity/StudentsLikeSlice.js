import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";    

const initalState = {
    studentsLike: null,
    loading: false,
    error: null
}

export const getStudentsLike = createAsyncThunk('getStudentsLike', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/lrcf/user/alllike/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getStudentsLikeSlice = createSlice({
    name: "getStudentsLike",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getStudentsLike.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        .addCase(getStudentsLike.fulfilled, (state, action) => {
            //console.log("getStudentsLike fulfilled", action.payload);
            state.loading = false;
            state.studentsLike = action.payload;
        })
        .addCase(getStudentsLike.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
            //console.log("error", action.error);
        })
    }
});

export default getStudentsLikeSlice.reducer