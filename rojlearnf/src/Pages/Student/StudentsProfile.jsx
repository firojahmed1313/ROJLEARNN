import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import StudentDashBord from '@/Comp/Student/DashBord/StudentDashBord'


const StudentsProfile = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <StudentDashBord />
        </div>
      </div>
    </>
  )
}

export default StudentsProfile