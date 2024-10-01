import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import AdminPanel from './Pages/AdminPanel.jsx'
import TeacherProfile from './Pages/TeacherProfile.jsx'
import StudentsProfile from './Pages/StudentsProfile.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Pagenotfound from './Pages/Pagenotfound.jsx'
import CourseAll from './Pages/CourseAll.jsx'
import TeacherCourse from './Pages/Teacher/TeacherCourse.jsx'
import TeacherExam from './Pages/Teacher/TeacherExam.jsx'
import TeacherTask from './Pages/Teacher/TeacherTask.jsx'
import TeacherAssignment from './Pages/Teacher/TeacherAssignment.jsx'
import StuActivity from './Pages/Student/StuActivity.jsx'
import StuExam from './Pages/Student/StuExam.jsx'
import StuReport from './Pages/Student/StuReport.jsx'
import StuCourse from './Pages/Student/StuCourse.jsx'
import CourseDetails from './Pages/CourseDetails.jsx'


function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/teacher' element={<TeacherProfile />} />
      <Route path='/teacherCourses' element={<TeacherCourse />} />
      <Route path='/teacherAssignment' element={<TeacherAssignment />} />
      <Route path='/teacherExam' element={<TeacherExam />} />
      <Route path='/teacherTask' element={<TeacherTask />} />
      <Route path='/student' element={<StudentsProfile />} />
      <Route path='/studentActivity' element={<StuActivity />} />
      <Route path='/studentExam' element={<StuExam />} />
      <Route path='/studentReport' element={<StuReport />} />
      <Route path='/studentCourse' element={<StuCourse />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/courses' element={<CourseAll/>} />
      <Route path='/courses/:id' element={<CourseDetails/>} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
    
  )
}

export default App
