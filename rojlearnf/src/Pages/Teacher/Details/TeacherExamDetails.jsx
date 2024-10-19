import React from 'react'
import BreadcrumbStu from '@/Comp/Navber/Breadcrumb/BreadcrumbStu'
import Topnav from '@/Comp/Navber/Topnav'
import StuExamDetails from '@/Comp/Student/Details/StuExamDetails'

const TeacherExamDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbStu />
        <StuExamDetails/>
    </>
  )
}

export default TeacherExamDetails