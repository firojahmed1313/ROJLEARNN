import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import StudentsAssignment from '../../Comp/Student/StudentsAssignment'
import StudentsTask from '../../Comp/Student/StudentsTask'
import StudentsExam from '../../Comp/Student/StudentsExam'
const StuExam = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Student"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <div>
            <StudentsAssignment />
            <StudentsTask />
            <StudentsExam />
          </div>
        </div>
      </div>
    </>
  )
}

export default StuExam