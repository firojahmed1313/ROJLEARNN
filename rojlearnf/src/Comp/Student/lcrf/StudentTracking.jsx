import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getStudentTracking } from '../../../Redux/Features/Activity/StudentTrackingSlice';
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../../Redux/Features/User/UserSlice';
import ActivityTable from './ActivityTable'


const StudentTracking = () => {
    const studentTracking = useSelector((state) => state.getStudentTracking.studentTracking);
  const user = useSelector((state) => state.getUser.user);
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
  useEffect(() => {
    setTimeout(() => {
      if (!studentTracking && user != null) {
        dispatch(getStudentTracking(user._id));
      }
    }, 2000)

  }, [])
 //console.log(studentTracking)
  return (
    <ActivityTable type="tracking" data={studentTracking}/>
  )
}

export default StudentTracking