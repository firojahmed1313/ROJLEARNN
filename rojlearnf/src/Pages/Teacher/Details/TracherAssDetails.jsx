import React from 'react'
import Topnav from '@/Comp/Navber/Topnav'
import StudentAssDetails from '@/Comp/Student/Details/StudentAssDetails'
import BreadcrumbTracher from '@/Comp/Navber/Breadcrumb/BreadcrumbTracher'
import TeacherAssignmentExtra from '@/Comp/Teacher/DetailsExtra/TeacherAssignmentExtra'

const TracherAssDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbTracher type="Assignment" />
        <StudentAssDetails/>
        <TeacherAssignmentExtra/>
    </>
  )
}

export default TracherAssDetails