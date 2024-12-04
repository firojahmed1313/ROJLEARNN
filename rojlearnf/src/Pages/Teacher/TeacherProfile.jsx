import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import DashBord from '../../Comp/Teacher/DashBord'
import Topnav from '../../Comp/Navber/Topnav'
import TeacherDashBord from '@/Comp/Teacher/DashBord/TeacherDashBord'
const TeacherProfile = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav/>
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <TeacherDashBord />
        </div>
      </div>
    </>
  )
}

export default TeacherProfile