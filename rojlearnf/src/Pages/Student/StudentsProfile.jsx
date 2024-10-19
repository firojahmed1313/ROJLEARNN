import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import DashBord from '../../Comp/Teacher/DashBord'


const StudentsProfile = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <DashBord />
        </div>
      </div>
    </>
  )
}

export default StudentsProfile