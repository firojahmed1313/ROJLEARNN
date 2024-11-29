import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import AdminPanel from './Pages/AdminPanel.jsx'
import TeacherProfile from './Pages/Teacher/TeacherProfile.jsx'
import StudentsProfile from './Pages/Student/StudentsProfile.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Pagenotfound from './Pages/Pagenotfound.jsx'
import CourseAll from './Pages/Course/CourseAll.jsx'
import TeacherCourse from './Pages/Teacher/TeacherCourse.jsx'
import TeacherExam from './Pages/Teacher/TeacherExam.jsx'
import TeacherTask from './Pages/Teacher/TeacherTask.jsx'
import TeacherAssignment from './Pages/Teacher/TeacherAssignment.jsx'
import StuActivity from './Pages/Student/StuActivity.jsx'
import StuExam from './Pages/Student/StuExam.jsx'
import StuReport from './Pages/Student/StuReport.jsx'
import StuCourse from './Pages/Student/StuCourse.jsx'
import CourseDetails from './Pages/Course/CourseDetails.jsx'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { chackAuth,getProfileData } from './Redux/Features/User/UserSlice'
import Profile from './Pages/Profile.jsx'
import About from './Pages/About.jsx'
import Settings from './Pages/Settings.jsx'
import CourseVideo from './Pages/Student/CourseVideo.jsx'
import TeacherCourseVideo from './Pages/Teacher/TeacherCourseVideo.jsx'
import CourseCartChackout from './Pages/Course/CourseCartChackout.jsx'
import StudentExamDetails from './Pages/Student/Details/StudentExamDetails'
import StuTaskDetails from './Pages/Student/Details/StuTaskDetails'
import StuAssDetails from './Pages/Student/Details/StuAssDetails'
import TeacherExamDetails from './Pages/Teacher/Details/TeacherExamDetails'
import TracherTaskDetails from './Pages/Teacher/Details/TracherTaskDetails'
import TracherAssDetails from './Pages/Teacher/Details/TracherAssDetails'
function App() {
  const dispatch = useDispatch();

  // Retrieve cookie
  const isCookies = Cookies.get('ROJLEARN');
  //console.log(isCookies);

  // Retrieve user and isAuth from state
  const User = useSelector((state) => state.getUser.user);
  const isAuth = useSelector((state) => state.getUser.isAuth);
  //console.log(User);

  // Use useEffect to handle dispatch and side-effects
  useEffect(() => {
    if (isCookies) {
      dispatch(getProfileData(isCookies));  // Fetch user data if cookie exists
    }
  }, [isCookies, dispatch]);

  useEffect(() => {
    if (User?.role) {  // Ensure User is not null/undefined and has a role
      dispatch(chackAuth());  // Dispatch authentication check action
    }
  }, [User, dispatch]);

  // Optional: log to check the authentication status
  useEffect(() => {
    //console.log(isAuth);
  }, [isAuth]);

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/aboutUs' element={<About />} />
      <Route path='/teacher' element={<TeacherProfile />} />
      <Route path='/teacherCourses' element={<TeacherCourse />} />
      <Route path='/teacherAssignment' element={<TeacherAssignment />} />
      <Route path='/teacherExam' element={<TeacherExam />} />
      <Route path='/teacherTask' element={<TeacherTask />} />
      <Route path='/teacherExam/:id' element={<TeacherExamDetails />} />
      <Route path='/teacherTask/:id' element={<TracherTaskDetails />} />
      <Route path='/teacherAssignment/:id' element={<TracherAssDetails />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/coursevideo/:id' element={<CourseVideo />} />
      <Route path='/teachercoursevideo/:id' element={<TeacherCourseVideo />} />
      <Route path='/student' element={<StudentsProfile />} />
      <Route path='/studentActivity' element={<StuActivity />} />
      <Route path='/studentExam' element={<StuExam />} />
      <Route path='/studentReport' element={<StuReport />} />
      <Route path='/studentCourse' element={<StuCourse />} />
      <Route path='/studentExam/:id' element={<StudentExamDetails />} />
      <Route path='/studentTask/:id' element={<StuTaskDetails />} />
      <Route path='/studentAssignment/:id' element={<StuAssDetails />} />
      <Route path='/cardCackout' element={<CourseCartChackout />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/courses' element={<CourseAll />} />
      <Route path='/course/:id' element={<CourseDetails />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>

  )
}

export default App
