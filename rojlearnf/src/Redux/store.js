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
import { getSubmitassSlice } from './Features/SubmitTeacher/GetSubmitassSlice'
import { getSubmitTaskSlice } from './Features/SubmitTeacher/GetSubmitTaskSlice'
import { getCartLtemsNowSlice } from './Features/Chackout/GetCartLtemsNowSlice'
import {getUserByidSlice} from './Features/User/GetUserByidSlice'
import {getQuestioninExamSlice} from './Features/Assignment/getQuestioninExamSlice'
import { getStudentExamReportSlice } from './Features/Report/GetStudentExamReportSlice'
import { getStudentAssReportSlice } from './Features/Report/GetStudentAssReportSlice'
import { getStudentTaskReportSlice } from './Features/Report/GetStudentTaskReportSlice'
import { getCommentsDetailsSlice } from './Features/Activity/Details/getCommentsDetailsSlice'
import { getRatingDetailsSlice } from './Features/Activity/Details/getRatingDetailsSlice'
//import { getLikeDetailsSlice } from './Features/Activity/Details/getLikeDetailsSlice'
import { getFeedbackDetailsSlice } from './Features/Activity/Details/getFeedbackDetailsSlice'
import { getTrackingDetailsSlice } from './Features/Activity/Details/getTrackingDetailsSlice'
import { getLikeDetailsSlice } from './Features/Activity/Details/getLikeDetailsSlice'





export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        getUser: UserSlice.reducer,
        getUserById: getUserByidSlice.reducer,
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
        getCartItemsNow: getCartLtemsNowSlice.reducer,
        getStudentsNotifications: getStudentsNotificationsSlice.reducer,
      getTeacherCourse: getCourseByTeacherSlice.reducer,
      getVideoByCourse: getVideoByCourseSlice.reducer,
      getExamByCourse: getAllExamByCourseSlice.reducer,
      getAssByCourse: getAllAssByCourseSlice.reducer,
      getTaskByCourse: getAllTaskByCourseSlice.reducer,
      getTaskById: getTaskDetailsSlice.reducer,
      getAssignmentById: getAssignmentDetailsSlice.reducer,
      getExamById: getExamDetailsSlice.reducer,
      getQuestionsinExam: getQuestioninExamSlice.reducer,
      getSubmitTask: getSubmitTaskSlice.reducer,
      getSubmitass: getSubmitassSlice.reducer,
      getStudentExamMarks: getStudentExamReportSlice.reducer,
      getStudentAssMarks: getStudentAssReportSlice.reducer,
      getStudentTaskMarks: getStudentTaskReportSlice.reducer,
      getCommentsDetails: getCommentsDetailsSlice.reducer,
      getRatingDetails: getRatingDetailsSlice.reducer,
      getLikeDetails: getLikeDetailsSlice.reducer,
      getFeedbackDetails: getFeedbackDetailsSlice.reducer,
      getTrackingDetails: getTrackingDetailsSlice.reducer


        

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})