import React from 'react'
import Topnav from '@/Comp/Navber/Topnav'
import StuExamDetails from '@/Comp/Student/Details/StuExamDetails'
import BreadcrumbTracher from '@/Comp/Navber/Breadcrumb/BreadcrumbTracher'

const TeacherExamDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbTracher type="Exam" />
        <StuExamDetails/>
        <p>TeacherExamDetails</p>
    </>
  )
}

export default TeacherExamDetails