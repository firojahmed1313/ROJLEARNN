import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";

const initialState = {
    userData: null,
    loading: false,
    error: null
}

export const getUserByid = createAsyncThunk('getUserByid', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/user/${id}`,token);
        console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

export const getUserByidSlice = createSlice({
    name: "getUserByid",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserByid.pending, (state) => {
            console.log("pending");
            state.loading = true;
        })
        builder.addCase(getUserByid.fulfilled, (state, action) => {
            console.log("fulfilled", action.payload);
            state.loading = false;
            state.userData = action.payload.data;
        })
        builder.addCase(getUserByid.rejected, (state, action) => {
            console.log("rejected");
            state.loading = false;
            state.error = action.payload;
            console.log("error", action.error);
        })
    }
})

export default getUserByidSlice.reducer

