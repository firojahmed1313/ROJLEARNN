import {configureStore} from '@reduxjs/toolkit'
import { loginSlice } from './Features/Credentials/LoginSlice'
import { UserSlice } from './Features/User/UserSlice'
import { getCourseSlice } from './Features/Course/getCourseSlice'
import { getCourseDetailsSlice } from './Features/Course/getCourseDetailsSlice'
import { getCourseofStudentSlice } from './Features/Course/getCourseofStudentSlice'
import { getStudentReportSlice } from './Features/Report/GetStudentReportSlice'
import { getStudentsLikeSlice } from './Features/Activity/StudentsLikeSlice'
import { getStudentCommentsSlice } from './Features/Activity/StudentCommentsSlice'
import { getStudentsRatingSlice } from './Features/Activity/StudentsRatingSlice'
import { getStudentFeedbackSlice } from './Features/Activity/StudentFeedbackSlice'



export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        getUser: UserSlice.reducer,
        getCourse: getCourseSlice.reducer,
        getCourseDetails: getCourseDetailsSlice.reducer,
        getCourseofStudent: getCourseofStudentSlice.reducer,
        getStudentReport: getStudentReportSlice.reducer,
        getStudentLike: getStudentsLikeSlice.reducer,
        getStudentComments: getStudentCommentsSlice.reducer,
        getStudentsRating: getStudentsRatingSlice.reducer,
        getStudentsFeedback: getStudentFeedbackSlice.reducer
        

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})