import {configureStore} from '@reduxjs/toolkit'
import { loginSlice } from './Features/Credentials/LoginSlice'
export const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    }
})