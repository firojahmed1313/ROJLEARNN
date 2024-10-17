import React from 'react'
import ProfileNav from '../Comp/Navber/ProfileNav'
import Topnav from '../Comp/Navber/Topnav'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileData } from '../Redux/Features/User/UserSlice'
import { useEffect } from 'react'
import EditProfile from '../Comp/Settings/EditProfile'
import Password from '../Comp/Settings/Password'

const Settings = () => {
  const user = useSelector((state) => state.getUser.user);
  console.log(user);
  const token = Cookies.get("ROJLEARN");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    setTimeout(() => {
      if (user == null) {
        dispatch(getProfileData(token));
      }

    }, 1000)

  }, [])

  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav/>
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <div class="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 px-4 sm:px-8 sm:shadow">
            <div class="pt-4">
              <h1 class="py-2 text-2xl font-semibold">Account settings</h1>
              <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <hr class="mt-4 mb-8" />
            <p class="py-2 text-xl font-semibold">Email Address</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600">Your email address is <strong>{user?.email}</strong></p>
              {/* <button class="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button> */}
            </div>
            <EditProfile user={user} />
            <Password user={user} />
          </div>
        </div>
      </div>
    </>

  )
}

export default Settings