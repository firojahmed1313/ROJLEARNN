import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
const StuReport = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Student"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <h2>StuReport</h2>
        </div>
      </div>
    </>
  )
}

export default StuReport