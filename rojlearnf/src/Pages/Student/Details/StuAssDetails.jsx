import StudentAssDetails from '@/Comp/Student/Details/StudentAssDetails'
import BreadcrumbStu from '@/Comp/Navber/Breadcrumb/BreadcrumbStu'
import React from 'react'
import Topnav from '@/Comp/Navber/Topnav'
import { Link } from 'react-router-dom'

const StuAssDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbStu />
        <StudentAssDetails/>
    </>
  )
}

export default StuAssDetails