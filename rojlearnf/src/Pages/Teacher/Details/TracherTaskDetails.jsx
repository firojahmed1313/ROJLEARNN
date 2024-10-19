import React from 'react'
import BreadcrumbStu from '@/Comp/Navber/Breadcrumb/BreadcrumbStu'
import Topnav from '@/Comp/Navber/Topnav'
import StudentTaskDetails from '@/Comp/Student/Details/StudentTaskDetails'

const TracherTaskDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbStu />
        <StudentTaskDetails />
    </>
  )
}

export default TracherTaskDetails