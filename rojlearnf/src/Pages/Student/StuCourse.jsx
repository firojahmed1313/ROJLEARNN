import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import AllStudentCourses from '../../Comp/Student/AllStudentCourses'
const StuCourse = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Student"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <AllStudentCourses />
        </div>
      </div>
    </>
  )
}

export default StuCourse