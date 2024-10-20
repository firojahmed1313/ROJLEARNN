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
import { getAllExamByCourseSlice } from './Features/Assignment/getAllExamByCourseSlice'
import { getAllAssByCourseSlice } from './Features/Assignment/getAllAssByCourseSlice'
import { getAllTaskByCourseSlice } from './Features/Assignment/getAllTaskByCourseSlice'
import { getTaskDetailsSlice } from './Features/EATDetailsByid/GetTaskDetailsSlice'
import { getAssignmentDetailsSlice } from './Features/EATDetailsByid/GetAssignmentDetailsSlice'
import { getExamDetailsSlice } from './Features/EATDetailsByid/GetExamDetailsSlice'
import { getCourseRateingSlice } from './Features/Course/getCourseRateingSlice'



export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        getUser: UserSlice.reducer,
        getCourse: getCourseSlice.reducer,
        getCourseDetails: getCourseDetailsSlice.reducer,
        getCourseRateing: getCourseRateingSlice.reducer,
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
      getVideoByCourse: getVideoByCourseSlice.reducer,
      getExamByCourse: getAllExamByCourseSlice.reducer,
      getAssByCourse: getAllAssByCourseSlice.reducer,
      getTaskByCourse: getAllTaskByCourseSlice.reducer,
      getTaskById: getTaskDetailsSlice.reducer,
      getAssignmentById: getAssignmentDetailsSlice.reducer,
      getExamById: getExamDetailsSlice.reducer,

        

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})