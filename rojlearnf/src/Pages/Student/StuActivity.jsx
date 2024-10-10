import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import StudentLike from '../../Comp/Student/lcrf/StudentLike'
import StudentComment from '../../Comp/Student/lcrf/StudentComment'
import StudentRating from '../../Comp/Student/lcrf/StudentRating'
import StudentFeedback from '../../Comp/Student/lcrf/StudentFeedback'
import StudentTracking from '../../Comp/Student/lcrf/StudentTracking'

const StuActivity = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Student"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <div>
            <StudentLike />
            <StudentComment />
            <StudentRating />
            <StudentFeedback  />
            <StudentTracking />
          </div>
        </div>
      </div>
    </>
  )
}

export default StuActivity