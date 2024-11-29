import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../Api/Api";
import Cookies from "js-cookie";
const initalState = {
    assignmentDetails: null,
    loading: false,
    error: null
}

export const getAssignmentDetails = createAsyncThunk('getAssignmentDetails', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/assignment/getAssignment/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }


})

export const getAssignmentDetailsSlice = createSlice({
    name: "getAssignmentDetails",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAssignmentDetails.pending, (state) => {
                //console.log("pending");
                state.loading = true
            })
            .addCase(getAssignmentDetails.fulfilled, (state, action) => {
                //console.log("getAssignmentDetails fulfilled", action.payload);
                state.loading = false
                state.assignmentDetails = action.payload.data
            })
            .addCase(getAssignmentDetails.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false
                state.error = action.error.message
                //console.log("error", action.error)
            })
    }
})

export default getAssignmentDetailsSlice.reducer