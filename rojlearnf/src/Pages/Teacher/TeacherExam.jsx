import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import TeacherAllExam from '../../Comp/Teacher/TeacherAllExam'
const TeacherExam = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Teacher"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <TeacherAllExam/>
        </div>
      </div>
    </>
    
  )
}

export default TeacherExam