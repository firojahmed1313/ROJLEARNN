import {configureStore} from '@reduxjs/toolkit'
import { loginSlice } from './Features/Credentials/LoginSlice'
import { UserSlice } from './Features/User/UserSlice'
export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        getUser: UserSlice.reducer
    }
})