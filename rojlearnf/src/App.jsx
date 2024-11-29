import React, { Suspense, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { chackAuth, getProfileData } from './Redux/Features/User/UserSlice';
import Loader from './Comp/utlits/loder/Loder';

// Lazy load components
const Home = React.lazy(() => import('./Pages/Home.jsx'));
const AdminPanel = React.lazy(() => import('./Pages/AdminPanel.jsx'));
const TeacherProfile = React.lazy(() => import('./Pages/Teacher/TeacherProfile.jsx'));
const StudentsProfile = React.lazy(() => import('./Pages/Student/StudentsProfile.jsx'));
const Register = React.lazy(() => import('./Pages/Register.jsx'));
const Login = React.lazy(() => import('./Pages/Login.jsx'));
const Pagenotfound = React.lazy(() => import('./Pages/Pagenotfound.jsx'));
const CourseAll = React.lazy(() => import('./Pages/Course/CourseAll.jsx'));
const TeacherCourse = React.lazy(() => import('./Pages/Teacher/TeacherCourse.jsx'));
const TeacherExam = React.lazy(() => import('./Pages/Teacher/TeacherExam.jsx'));
const TeacherTask = React.lazy(() => import('./Pages/Teacher/TeacherTask.jsx'));
const TeacherAssignment = React.lazy(() => import('./Pages/Teacher/TeacherAssignment.jsx'));
const StuActivity = React.lazy(() => import('./Pages/Student/StuActivity.jsx'));
const StuExam = React.lazy(() => import('./Pages/Student/StuExam.jsx'));
const StuReport = React.lazy(() => import('./Pages/Student/StuReport.jsx'));
const StuCourse = React.lazy(() => import('./Pages/Student/StuCourse.jsx'));
const CourseDetails = React.lazy(() => import('./Pages/Course/CourseDetails.jsx'));
const Profile = React.lazy(() => import('./Pages/Profile.jsx'));
const About = React.lazy(() => import('./Pages/About.jsx'));
const Settings = React.lazy(() => import('./Pages/Settings.jsx'));
const CourseVideo = React.lazy(() => import('./Pages/Student/CourseVideo.jsx'));
const TeacherCourseVideo = React.lazy(() => import('./Pages/Teacher/TeacherCourseVideo.jsx'));
const CourseCartChackout = React.lazy(() => import('./Pages/Course/CourseCartChackout.jsx'));
const StudentExamDetails = React.lazy(() => import('./Pages/Student/Details/StudentExamDetails'));
const StuTaskDetails = React.lazy(() => import('./Pages/Student/Details/StuTaskDetails'));
const StuAssDetails = React.lazy(() => import('./Pages/Student/Details/StuAssDetails'));
const TeacherExamDetails = React.lazy(() => import('./Pages/Teacher/Details/TeacherExamDetails'));
const TracherTaskDetails = React.lazy(() => import('./Pages/Teacher/Details/TracherTaskDetails'));
const TracherAssDetails = React.lazy(() => import('./Pages/Teacher/Details/TracherAssDetails'));
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
    <Suspense fallback={<Loader/>}>
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
    </Suspense>


  )
}

export default App
