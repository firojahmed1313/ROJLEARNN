import React from 'react'
import Topnav from '@/Comp/Navber/Topnav'
import StudentTaskDetails from '@/Comp/Student/Details/StudentTaskDetails'
import BreadcrumbTracher from '@/Comp/Navber/Breadcrumb/BreadcrumbTracher'

const TracherTaskDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbTracher type="Task" />
        <StudentTaskDetails />
        <p>TracherTaskDetails</p>
    </>
  )
}

export default TracherTaskDetails