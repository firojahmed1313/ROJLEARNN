import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initialState ={
    cartItems: null,
    loading: false,
    error: null
}

export const getCartItems = createAsyncThunk('getCartItems', async (id) => {
    //console.log(id)
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/cart/getCartitemsNow/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getCartItemsSlice = createSlice({
    name: "getCartItems",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                //console.log("pending")
                state.loading = true
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                //console.log("Carts fulfilled")
                state.loading = false
                state.cartItems = action.payload.data
                
            })
            .addCase(getCartItems.rejected, (state, action) => {
                //console.log("rejected")
                state.loading = false
                state.error = action.error.message
                //console.log("error", action.error)
            
            })
    }
})