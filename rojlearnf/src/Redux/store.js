import {configureStore} from '@reduxjs/toolkit'
import { loginSlice } from './Features/Credentials/LoginSlice'
import { UserSlice } from './Features/User/UserSlice'
import { getCourseSlice } from './Features/Course/getCourseSlice'
import { getCourseDetailsSlice } from './Features/Course/getCourseDetailsSlice'
export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        getUser: UserSlice.reducer,
        getCourse: getCourseSlice.reducer,
        getCourseDetails: getCourseDetailsSlice.reducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})