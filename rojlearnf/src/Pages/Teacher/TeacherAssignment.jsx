import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import TeacherAllAssignment from '../../Comp/Teacher/TeacherAllAssignment'

const TeacherAssignment = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Teacher"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <TeacherAllAssignment />
        </div>
      </div>
    </>
    
  )
}

export default TeacherAssignment