import React from 'react'
import BreadcrumbStu from '@/Comp/Navber/Breadcrumb/BreadcrumbStu'
import Topnav from '@/Comp/Navber/Topnav'
import StudentAssDetails from '@/Comp/Student/Details/StudentAssDetails'

const TracherAssDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbStu />
        <StudentAssDetails/>
    </>
  )
}

export default TracherAssDetails