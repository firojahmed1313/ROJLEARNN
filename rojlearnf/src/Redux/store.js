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
import { getStudentTrackingSlice } from './Features/Activity/StudentTrackingSlice'
import { getAllCartsSlice } from './Features/Chackout/GetAllCartsSlice'
import { getCartItemsSlice } from './Features/Chackout/GetCartItemsSlice'
import { getStudentsNotificationsSlice } from './Features/Notifications/GetStudentsNotificationsSlice'
import { getCourseByTeacherSlice } from './Features/Course/teacher/getCourseByTeacherSlice'
import { getVideoByCourseSlice } from './Features/Video/GetVideoByCourseSlice'



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
        getStudentsFeedback: getStudentFeedbackSlice.reducer,
        getStudentTracking: getStudentTrackingSlice.reducer,
        getCarts: getAllCartsSlice.reducer,
        getCartItems: getCartItemsSlice.reducer,
        getStudentsNotifications: getStudentsNotificationsSlice.reducer,
      getTeacherCourse: getCourseByTeacherSlice.reducer,
      getVideoByCourse: getVideoByCourseSlice.reducer
        

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})