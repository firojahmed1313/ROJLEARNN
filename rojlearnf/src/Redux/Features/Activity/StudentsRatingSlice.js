import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initalState = {
    studentsRating: null,
    loading: false,
    error: null
}

export const getStudentsRating = createAsyncThunk('getStudentsRating', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/rateing/getRateingByUser/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getStudentsRatingSlice = createSlice({
    name: "getStudentsRating",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getStudentsRating.pending, (state) => {
            //console.log("pending");
            state.loading = true;
        })
        .addCase(getStudentsRating.fulfilled, (state, action) => {
            //console.log("getStudentsRating fulfilled", action.payload);
            state.loading = false;
            state.studentsRating = action.payload.data;
        })
        .addCase(getStudentsRating.rejected, (state, action) => {
            //console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
            //console.log("error", action.error);
        })
    }
})

export default getStudentsRatingSlice.reducer