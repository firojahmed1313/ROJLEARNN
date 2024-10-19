import StudentTaskDetails from '@/Comp/Student/Details/StudentTaskDetails'
import React from 'react'
import Topnav from '@/Comp/Navber/Topnav'
import { Link } from 'react-router-dom'
import BreadcrumbStu from '@/Comp/Navber/Breadcrumb/BreadcrumbStu'

const StuTaskDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbStu type="Task" />
        <StudentTaskDetails />
    </>
  )
}

export default StuTaskDetails