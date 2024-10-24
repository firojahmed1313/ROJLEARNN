import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initalState = {
    cartItems: [],
    loading: false,
    error: null
}

const getData=async(id)=>{const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    console.log(token);    
    try {
        const data = getApi(`${burl}/course/${id}`,token);
        
        return data;
    } catch (error) {
        console.warn(error);
    }
}
export const getCartLtemsNow = createAsyncThunk('getCartLtemsNow', async (item) => {
    const datas = [];
    //console.log(item)
    for(let i = 0; i < item.length; i++){
        //console.log(item[i])
        const data = await getData(item[i].courseid);
        //console.log(data.data);
        datas.push(data.data);
        
    }
    console.log(datas);
    return datas; 
    // try {
    //     const data = getApi(`${burl}/cart/getCartItems`,token);
    //     console.log(data);
    //     return data; 
    // } catch (error) {
    //     console.warn(error);
    // }
    
})

export const getCartLtemsNowSlice = createSlice({   
    name: "getCartLtemsNow",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartLtemsNow.pending, (state) => {
            console.log("pending");
            state.loading = true;
        });
        builder.addCase(getCartLtemsNow.fulfilled, (state, action) => {
            console.log("Carts fulfilled");
            state.loading = false;
            state.cartItems = action.payload;
            //state.cartItems = "data";
        });
        builder.addCase(getCartLtemsNow.rejected, (state, action) => {
            console.log("rejected");
            state.loading = false;
            state.error = action.error;
            console.log("error", action.error);
        });
    }
})

export default getCartLtemsNowSlice.reducer

