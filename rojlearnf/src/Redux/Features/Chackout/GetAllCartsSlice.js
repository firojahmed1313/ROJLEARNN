import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getApi } from "../../Api/Api";
const initialState = {
    carts: null,
    loading: false,
    error: null
}

export const getAllCarts = createAsyncThunk('getAllCarts', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/cart/getCarts/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getAllCartsSlice = createSlice({
    name: "getAllCarts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCarts.pending, (state) => {
                //console.log("pending")
                state.loading = true
            })
            .addCase(getAllCarts.fulfilled, (state, action) => {
                //console.log("Carts fulfilled")
                state.loading = false
                state.carts = action.payload
                
            })
            .addCase(getAllCarts.rejected, (state, action) => {
                //console.log("rejected")
                state.loading = false
                state.error = action.error.message
                //console.log("error", action.error)
            
            })
    }
})

export default getAllCartsSlice.reducer