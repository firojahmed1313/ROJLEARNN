import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../Api/Api";
const initialState = {
    user: null,
    isAuth: false,
    isLoading: false,
    isError: false,
    

}
export const getProfileData = createAsyncThunk('getProfileData', async (token) => {
    const burl = import.meta.env.VITE_URL;
    console.log(token);
    try {
        const data = getApi(`${burl}/user/me`, token);
        console.log(data);
        return data; 
    } catch (error) {
        console.warn(error);
    }
    
})

//const isAuth = false;
export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserData: (state, action) => {
            const data = {
                "_id": "66e1a30b095c06a595b4ac80",
                "username": "student_001",
                "email": "student001@example.com",
                "password": "004",
                "role": "Instructor",
                "profile_picture_url": "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHwxfDB8fHww",
                "phone_number": "321-654-9870",
                "address": "321 Student Ln, City, Country",
                "is_active": true,
                "created_at": "2024-09-11T17:54:57.527"
            };
            state.user = data;
        },
        chackAuth: (state, action) => {
            state.isAuth = true;
        },
        logout: (state, action) => {
            state.user = null;
            state.isAuth = false;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileData.pending, (state, action) => {
                console.log("pending");
                state.isLoading = true;
            })
            .addCase(getProfileData.fulfilled, (state, action) => {
                console.log("fulfilled", action.payload);
                state.isLoading = false;
                state.user = action.payload.data;
                state.isAuth = true;
            })
            .addCase(getProfileData.rejected, (state, action) => {
                console.log("rejected");
                state.isLoading = false;
                state.isError = true;
                console.log("error", action.error);
                
            })
    },
    
})

export const { chackAuth, logout } = UserSlice.actions;
export default UserSlice.reducer;