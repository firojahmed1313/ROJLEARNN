import React from 'react'
import Topnav from '@/Comp/Navber/Topnav'
import StudentTaskDetails from '@/Comp/Student/Details/StudentTaskDetails'
import BreadcrumbTracher from '@/Comp/Navber/Breadcrumb/BreadcrumbTracher'
import TeacherTaskExtra from '@/Comp/Teacher/DetailsExtra/TeacherTaskExtra'

const TracherTaskDetails = () => {
  
  return (
    <>
        <Topnav />
        <BreadcrumbTracher type="Task" />
        <StudentTaskDetails />
        <TeacherTaskExtra />
    </>
  )
}

export default TracherTaskDetails