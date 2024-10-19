import BreadcrumbStu from '@/Comp/Navber/Breadcrumb/BreadcrumbStu'
import Topnav from '@/Comp/Navber/Topnav'
import StuExamDetails from '@/Comp/Student/Details/StuExamDetails'
import React from 'react'
import { Link } from 'react-router-dom'

const StudentExamDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbStu type="Exam" />
        <StuExamDetails/>
    </>
  )
}

export default StudentExamDetails