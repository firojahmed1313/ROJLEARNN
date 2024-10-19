import React from 'react'
import Topnav from '@/Comp/Navber/Topnav'
import StudentAssDetails from '@/Comp/Student/Details/StudentAssDetails'
import BreadcrumbTracher from '@/Comp/Navber/Breadcrumb/BreadcrumbTracher'

const TracherAssDetails = () => {
  return (
    <>
        <Topnav />
        <BreadcrumbTracher type="Assignment" />
        <StudentAssDetails/>
        <p>TracherAssDetails</p>
    </>
  )
}

export default TracherAssDetails