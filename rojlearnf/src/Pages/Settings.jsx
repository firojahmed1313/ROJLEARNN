import React from 'react'
import ProfileNav from '../Comp/Navber/ProfileNav'
import Topnav from '../Comp/Navber/Topnav'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileData } from '../Redux/Features/User/UserSlice'
import { useEffect } from 'react'

const Settings = () => {
  const user = useSelector((state) => state.getUser.user);
  console.log(user);
  const token = Cookies.get("ROJLEARN");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(!token){
    navigate("/login");
  }

  useEffect(() => {
    setTimeout(() => {
      if(user==null){
        dispatch(getProfileData(token));
      }
      
    },1000)
    
  }, [])

  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Student"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <div>Settings</div>
        </div>
      </div>
    </>
    
  )
}

export default Settings