import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    user: {
        email: "",
        password: "",
        id: nanoid(),
    },
    token: "",
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            state.token = "MDFIROJAHMED";
        },
    },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;