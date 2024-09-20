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

function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/teacher' element={<TeacherProfile />} />
      <Route path='/student' element={<StudentsProfile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
    
  )
}

export default App
